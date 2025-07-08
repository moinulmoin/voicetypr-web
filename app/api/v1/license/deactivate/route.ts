import {
  corsHeaders,
  createErrorResponse,
  createSuccessResponse,
  handleInternalError,
  handleValidationError
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
      return handleValidationError(validationResult.error);
    }

    const { licenseKey, deviceHash } = validationResult.data;

    // 1. Verify ownership - check if this device has this license
    const device = await prisma.device.findUnique({
      where: { licenseKey },
      select: {
        deviceHash: true,
        activationId: true,
        licenseKey: true
      }
    });

    if (!device || device.deviceHash !== deviceHash) {
      return createErrorResponse(ErrorCode.NOT_YOUR_LICENSE);
    }

    // 2. Deactivate the license
    await deactivateLicenseKey({ licenseKey, activationId: device.activationId! });

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
          metadata: { licenseKey }
        }
      });
    });

    const data = {
      deactivatedAt: new Date().toISOString()
    };

    return createSuccessResponse(data);
  } catch (error) {
    return handleInternalError(error);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: corsHeaders });
}