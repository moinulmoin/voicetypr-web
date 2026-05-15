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
import { getMaxDevicesForLicense } from "@/lib/license-utils";
import { PLANS, resolvePlan } from "@/lib/pricing";
import { activateLicenseKey } from "@/lib/polar";
import { licenseActivateRequestSchema } from "@/lib/types";
import { after, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = licenseActivateRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return withCorsHeaders(handleValidationError(validationResult.error));
    }

    const { licenseKey, deviceHash, osType, osVersion, appVersion, deviceName } = validationResult.data;

    // 1. Advisory device limit check for logging/analytics only - Polar enforces the real limit
    // This is purely informational because our DB may be stale (e.g., user deactivated via Polar portal)
    const maxDevices = getMaxDevicesForLicense(licenseKey);
    if (isNaN(maxDevices)) {
      // Unknown license format - log but don't block, let Polar decide validity
      console.warn(
        `[License Activate] Unknown license format for ${licenseKey.substring(0, 8)}...; skipping local device check, relying on Polar`
      );
    } else {
      const currentDeviceCount = await prisma.device.count({
        where: {
          licenseKey,
          NOT: { deviceHash }
        }
      });

      if (currentDeviceCount >= maxDevices) {
        console.log(
          `[License Activate] Local device count (${currentDeviceCount}) >= maxDevices (${maxDevices}) for license ${licenseKey.substring(0, 8)}... - relying on Polar to enforce actual limit`
        );
      }
    }

    // 2. Activate the license with Polar (Polar is source of truth for device limits)
    let activation;
    try {
      activation = await activateLicenseKey(licenseKey, deviceHash, osType, osVersion, appVersion, deviceName);
    } catch (polarError: unknown) {
      const apiError = polarError as { statusCode?: number; detail?: string; error?: string };
      // Handle specific Polar API errors
      if (apiError.statusCode === 403) {
        if (apiError.detail?.includes('activation limit')) {
          return withCorsHeaders(createErrorResponse(ErrorCode.LICENSE_ACTIVATION_LIMIT_REACHED, 400));
        }
      } else if (apiError.statusCode === 404 || apiError.error === 'ResourceNotFound') {
        // License key not found
        return withCorsHeaders(createErrorResponse(ErrorCode.INVALID_LICENSE, 400));
      }
      // Re-throw other errors to be handled by the outer catch
      throw polarError;
    }

    // 3. Create or update License record (source of truth for customer data)
    // Resolve plan from license key prefix (productId unavailable at activation)
    const planKey = resolvePlan(null, licenseKey);
    await prisma.license.upsert({
      where: { licenseKey },
      create: {
        licenseKey,
        customerId: activation.licenseKey.customerId,
        ...(planKey && {
          plan: planKey,
          maxDevices: PLANS[planKey].maxDevices,
        }),
      },
      update: {
        customerId: activation.licenseKey.customerId,
        // Fill plan/maxDevices on first activation if still null
        ...(!planKey ? {} : {
          plan: planKey,
          maxDevices: PLANS[planKey].maxDevices,
        }),
      }
    });

    // 4. Upsert device with license and OS info. Some activation paths may not
    // have created a trial/device row before the user enters a license key.
    await prisma.device.upsert({
      where: { deviceHash },
      create: {
        deviceHash,
        licenseKey,
        activationId: activation.id,
        osType,
        osVersion,
        appVersion,
        lastChecked: new Date(),
      },
      update: {
        licenseKey,
        activationId: activation.id,
        // Don't set customerId - use License table as source of truth
        osType,
        osVersion,
        appVersion,
        lastChecked: new Date(),
      },
    });

    after(async () => {
      await prisma.activityLog.create({
        data: {
          deviceHash,
          action: "activate",
          metadata: { licenseKeyRef: redactLicenseKey(licenseKey) }
        }
      });
    });

    const data = {
      activatedAt: new Date().toISOString()
    };

    return withCorsHeaders(createSuccessResponse(data));
  } catch (error) {
    return withCorsHeaders(handleInternalError(error));
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: getCorsHeaders() });
}
