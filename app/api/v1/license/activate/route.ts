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
import { getClientIp } from "@/lib/get-client-ip";
import { getMaxDevicesForLicense } from "@/lib/license-utils";
import { activateLicenseKey } from "@/lib/polar";
import { activateIpLimiter, activateDeviceLimiter, createRateLimitResponse } from "@/lib/rate-limit";
import { licenseActivateRequestSchema } from "@/lib/types";
import { after, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Rate limit by IP
    const ip = getClientIp(request);
    const { success: ipOk } = await activateIpLimiter.limit(ip);
    if (!ipOk) return withCorsHeaders(createRateLimitResponse(), request);

    // Parse and validate request body
    const body = await request.json();
    const validationResult = licenseActivateRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return withCorsHeaders(handleValidationError(validationResult.error), request);
    }

    const { licenseKey, deviceHash, osType, osVersion, appVersion, deviceName } = validationResult.data;

    // Rate limit by device
    const { success: deviceOk } = await activateDeviceLimiter.limit(deviceHash);
    if (!deviceOk) return withCorsHeaders(createRateLimitResponse(), request);

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
    } catch (polarError: any) {
      // Handle specific Polar API errors
      if (polarError.statusCode === 403) {
        if (polarError.detail?.includes('activation limit')) {
          return withCorsHeaders(createErrorResponse(ErrorCode.LICENSE_ACTIVATION_LIMIT_REACHED, 400), request);
        }
      } else if (polarError.statusCode === 404 || polarError.error === 'ResourceNotFound') {
        // License key not found
        return withCorsHeaders(createErrorResponse(ErrorCode.INVALID_LICENSE, 400), request);
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
          metadata: { licenseKeyRef: redactLicenseKey(licenseKey) }
        }
      });
    });

    const data = {
      activatedAt: new Date().toISOString()
    };

    return withCorsHeaders(createSuccessResponse(data), request);
  } catch (error) {
    return withCorsHeaders(handleInternalError(error), request);
  }
}

export async function OPTIONS(request: NextRequest) {
  return new Response(null, { status: 200, headers: getCorsHeaders(request) });
}
