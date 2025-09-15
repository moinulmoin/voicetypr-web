import {
  corsHeaders,
  createErrorResponse,
  createSuccessResponse,
  handleInternalError,
  handleValidationError
} from "@/lib/api-utils";
import { ErrorCode } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { getMaxDevicesForLicense } from "@/lib/license-utils";
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

    const { licenseKey, deviceHash, osType, osVersion, appVersion } = validationResult.data;

    // 1. Check device limit for this license
    const maxDevices = getMaxDevicesForLicense(licenseKey);
    if (isNaN(maxDevices)) {
      return createErrorResponse(ErrorCode.INVALID_LICENSE, 400);
    }
    const currentDeviceCount = await prisma.device.count({
      where: {
        licenseKey,
        NOT: { deviceHash } // Don't count current device if re-activating
      }
    });

    if (currentDeviceCount >= maxDevices) {
      return createErrorResponse(ErrorCode.LICENSE_ACTIVATION_LIMIT_REACHED, 400);
    }

    // 2. activate the license with Polar
    let activation;
    try {
      activation = await activateLicenseKey(licenseKey, deviceHash);
    } catch (polarError: any) {
      // Handle specific Polar API errors
      if (polarError.statusCode === 403) {
        if (polarError.detail?.includes('activation limit')) {
          return createErrorResponse(ErrorCode.LICENSE_ACTIVATION_LIMIT_REACHED, 400);
        }
      } else if (polarError.statusCode === 404 || polarError.error === 'ResourceNotFound') {
        // License key not found
        return createErrorResponse(ErrorCode.INVALID_LICENSE, 400);
      }
      // Re-throw other errors to be handled by the outer catch
      throw polarError;
    }

    // 3. Create or update License record (source of truth for customer data)
    await prisma.license.upsert({
      where: { licenseKey },
      create: {
        licenseKey,
        customerId: activation.licenseKey.customerId
      },
      update: {
        customerId: activation.licenseKey.customerId // Update in case it changed
      }
    });

    // 4. Update device with license and OS info
    await prisma.device.update({
      where: { deviceHash },
      data: {
        licenseKey,
        activationId: activation.id,
        // Don't set customerId - use License table as source of truth
        osType,
        osVersion,
        appVersion,
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
