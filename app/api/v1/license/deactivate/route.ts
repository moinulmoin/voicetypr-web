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
import { deactivateLicenseKey } from "@/lib/polar";
import { licenseDeactivateRequestSchema } from "@/lib/types";
import { after, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = licenseDeactivateRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return withCorsHeaders(handleValidationError(validationResult.error));
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
      return withCorsHeaders(createErrorResponse(ErrorCode.NOT_YOUR_LICENSE));
    }

    // 2. Try to deactivate the license on Polar
    try {
      await deactivateLicenseKey({ licenseKey, activationId: device.activationId! });
    } catch (polarError: unknown) {
      const apiError = polarError as { statusCode?: number; error?: string; body?: string };
      let parsedError = apiError.error;

      if (!parsedError && typeof apiError.body === 'string') {
        try {
          const parsedBody = JSON.parse(apiError.body) as { error?: string };
          parsedError = parsedBody.error;
        } catch {
          // Ignore non-JSON bodies and fall through to the generic error path.
        }
      }

      // If Polar no longer considers this activation active, that's fine -
      // we still want to clear our local binding and keychain state.
      if (
        apiError.statusCode === 404 ||
        parsedError === 'ResourceNotFound' ||
        parsedError === 'NotPermitted'
      ) {
        console.log(`License already inactive on Polar: ${licenseKey}, cleaning up local state`);
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

    return withCorsHeaders(createSuccessResponse(data));
  } catch (error) {
    return withCorsHeaders(handleInternalError(error));
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: getCorsHeaders() });
}
