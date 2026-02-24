import {
  getCorsHeaders,
  withCorsHeaders,
  createErrorResponse,
  createSuccessResponse,
  handleInternalError,
  handleValidationError,
  redactLicenseKey
} from "@/lib/api-utils";
import { ErrorCode } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { deactivateIpLimiter, createRateLimitResponse } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/get-client-ip";
import { deactivateLicenseKey } from "@/lib/polar";
import { licenseDeactivateRequestSchema } from "@/lib/types";
import { after, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // IP rate limiting
    const ip = getClientIp(request);
    const { success: ipOk } = await deactivateIpLimiter.limit(ip);
    if (!ipOk) return withCorsHeaders(createRateLimitResponse(), request);

    // Parse and validate request body
    const body = await request.json();
    const validationResult = licenseDeactivateRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return withCorsHeaders(handleValidationError(validationResult.error), request);
    }

    const { licenseKey, deviceHash } = validationResult.data;

    // 1. Verify ownership - check if this device has this license
    const device = await prisma.device.findFirst({
      where: {
        licenseKey,
        deviceHash
      },
      select: {
        deviceHash: true,
        activationId: true,
        licenseKey: true
      }
    });

    if (!device) {
      return withCorsHeaders(createErrorResponse(ErrorCode.NOT_YOUR_LICENSE), request);
    }

    // 2. Try to deactivate the license on Polar
    try {
      await deactivateLicenseKey({ licenseKey, activationId: device.activationId! });
    } catch (polarError: any) {
      // If license is already deactivated (404), that's fine - we still want to clear it locally
      if (polarError?.statusCode === 404 || polarError?.error === 'ResourceNotFound') {
        console.log(`License already deactivated on Polar: ${licenseKey}, cleaning up local state`);
        // Continue to step 3 to clear from our DB
      } else {
        // For other errors (network, permissions, etc), throw them
        throw polarError;
      }
    }

    // 3. Remove license from device (but keep device record)
    await prisma.device.update({
      where: { deviceHash },
      data: {
        licenseKey: null,
        activationId: null,
        lastChecked: new Date()
      }
    });

    after(async () => {
      await prisma.activityLog.create({
        data: {
          deviceHash,
          action: "deactivate",
          metadata: { licenseKeyRef: redactLicenseKey(licenseKey) }
        }
      });
    });

    const data = {
      deactivatedAt: new Date().toISOString()
    };

    return withCorsHeaders(createSuccessResponse(data), request);
  } catch (error) {
    return withCorsHeaders(handleInternalError(error), request);
  }
}

export async function OPTIONS(request: NextRequest) {
  return new Response(null, { status: 200, headers: getCorsHeaders(request) });
}