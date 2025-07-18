import {
  corsHeaders,
  createSuccessResponse,
  handleInternalError,
  handleValidationError
} from "@/lib/api-utils";
import { ERROR_MESSAGES, ErrorCode } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { validateLicenseKey } from "@/lib/polar";
import { licenseValidateRequestSchema } from "@/lib/types";
import { after, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = licenseValidateRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return handleValidationError(validationResult.error);
    }

    const { licenseKey, deviceHash, appVersion } = validationResult.data;

    // 1. Check device binding first to get license key
    const device = await prisma.device.findUnique({
      where: { licenseKey },
      select: {
        activationId: true,
        deviceHash: true,
        licenseKey: true,
        lastChecked: true
      }
    });

    if (!device || device.deviceHash !== deviceHash) {
      const response = {
        valid: false,
      };
      return createSuccessResponse(response, ERROR_MESSAGES[ErrorCode.DEVICE_MISMATCH]);
    }

    // 2. Validate with Polar (no activation_id needed)
    try {
      await validateLicenseKey(licenseKey, device.activationId!);
    } catch (polarError: any) {
      const errorMessage = polarError.error || "Unknown error";
      console.error("Polar validation error:", errorMessage);

      if (errorMessage === "NotPermitted") {
        const data = {
          valid: false,
        };
        return createSuccessResponse(data, ERROR_MESSAGES[ErrorCode.LICENSE_ALREADY_ACTIVATED]);
      }

      if (errorMessage === "ResourceNotFound") {
        const data = {
          valid: false,
        };
        return createSuccessResponse(data, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]);
      }

      return handleInternalError(polarError);
    }
    // 4. All good - update last checked time AND customer ID (in case it changed)
    await prisma.device.update({
      where: { deviceHash },
      data: {
        lastChecked: new Date(),
        appVersion
      }
    });

    // Log validation
    after(async () => {
      await prisma.activityLog.create({
        data: {
          deviceHash,
          action: "validate",
          metadata: { licenseKey }
        }
      });
    });

    const data = {
      valid: true
    };
    return createSuccessResponse(data);
  } catch (error) {
    return handleInternalError(error);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: corsHeaders });
}
