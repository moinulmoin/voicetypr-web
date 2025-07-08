import {
  corsHeaders,
  createErrorResponse,
  createSuccessResponse,
  handleInternalError,
  handleValidationError
} from "@/lib/api-utils";
import { ErrorCode } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { activateLicenseKey } from "@/lib/polar";
import { licenseActivateRequestSchema } from "@/lib/types";
import { after, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = licenseActivateRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return handleValidationError(validationResult.error);
    }

    const { licenseKey, deviceHash } = validationResult.data;

    // 1. Check if this license is already activated
    const existingDevice = await prisma.device.findUnique({
      where: { licenseKey },
      select: {
        deviceHash: true
      }
    });

    if (existingDevice?.deviceHash && existingDevice.deviceHash !== deviceHash) {
      return createErrorResponse(ErrorCode.LICENSE_ALREADY_ACTIVATED);
    }

    // 2. activate the license
    const activation = await activateLicenseKey(licenseKey, deviceHash);

    // 3. Save to our database (with customer ID and activation ID!)
    await prisma.device.update({
      where: { deviceHash },
      data: {
        licenseKey,
        activationId: activation.id,
        customerId: activation.licenseKey.customerId,
        lastChecked: new Date()
      }
    });

    after(async () => {
      await prisma.activityLog.create({
        data: {
          deviceHash,
          action: "activate",
          metadata: { licenseKey }
        }
      });
    });

    const data = {
      activatedAt: new Date().toISOString()
    };

    return createSuccessResponse(data);
  } catch (error) {
    return handleInternalError(error);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: corsHeaders });
}
