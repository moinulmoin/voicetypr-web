import {
  getCorsHeaders,
  withCorsHeaders,
  createSuccessResponse,
  handleInternalError,
  handleValidationError,
  redactLicenseKey
} from "@/lib/api-utils";
import { ERROR_MESSAGES, ErrorCode } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { validateLicenseKey } from "@/lib/polar";
import { validateDeviceLimiter, createRateLimitResponse } from "@/lib/rate-limit";
import { licenseValidateRequestSchema } from "@/lib/types";
import { after, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = licenseValidateRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return withCorsHeaders(handleValidationError(validationResult.error), request);
    }

    const { licenseKey, deviceHash, appVersion, osType, osVersion } = validationResult.data;

    // Rate limit by device hash (no IP limit — corporate NAT concern)
    const { success: deviceOk } = await validateDeviceLimiter.limit(deviceHash);
    if (!deviceOk) return withCorsHeaders(createRateLimitResponse(), request);

    // 1. Check device binding - must match both license and device
    const device = await prisma.device.findFirst({
      where: {
        licenseKey,
        deviceHash
      },
      select: {
        activationId: true,
        deviceHash: true,
        licenseKey: true,
        lastChecked: true
      }
    });

    if (!device) {
      const response = {
        valid: false,
      };
      return withCorsHeaders(createSuccessResponse(response, ERROR_MESSAGES[ErrorCode.DEVICE_MISMATCH]), request);
    }

    // Store original values for race-condition-safe cleanup later
    const originalLicenseKey = device.licenseKey;
    const originalActivationId = device.activationId;

    // 2. Handle missing activationId (corrupted/partial data)
    if (!originalActivationId) {
      console.warn(
        `[License Validate] Device ${deviceHash.substring(0, 8)}... has licenseKey but no activationId; clearing as stale`
      );

      await prisma.device.updateMany({
        where: { deviceHash, licenseKey: originalLicenseKey },
        data: {
          licenseKey: null,
          activationId: null,
          lastChecked: new Date(),
        },
      });

      after(async () => {
        await prisma.activityLog.create({
          data: {
            deviceHash,
            action: "license_desynced",
            metadata: { licenseKeyPrefix: licenseKey.substring(0, 8), reason: "missing_activation_id" },
          },
        });
      });

      const data = { valid: false };
      return withCorsHeaders(createSuccessResponse(data, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]), request);
    }

    // 3. Validate with Polar
    try {
      await validateLicenseKey(licenseKey, originalActivationId);
    } catch (polarError: any) {
      const errorMessage = polarError.error || "Unknown error";
      console.error("Polar validation error:", errorMessage);

      // If Polar doesn't recognize this activation anymore, clear local bindings
      // This handles the case where user deactivated via Polar customer portal
      if (errorMessage === "NotPermitted" || errorMessage === "ResourceNotFound") {
        try {
          // Use updateMany with original values to prevent race condition:
          // If user activated a NEW license between our read and this update,
          // we don't want to wipe the new valid license
          const result = await prisma.device.updateMany({
            where: {
              deviceHash,
              licenseKey: originalLicenseKey,
              activationId: originalActivationId,
            },
            data: {
              licenseKey: null,
              activationId: null,
              lastChecked: new Date(),
            },
          });

          if (result.count > 0) {
            console.log(`[License Validate] Cleared stale license binding for device ${deviceHash.substring(0, 8)}... (Polar error: ${errorMessage})`);

            after(async () => {
              await prisma.activityLog.create({
                data: {
                  deviceHash,
                  action: "license_desynced",
                  metadata: { licenseKeyPrefix: licenseKey.substring(0, 8), reason: errorMessage },
                },
              });
            });
          } else {
            console.log(`[License Validate] Skipped clearing for device ${deviceHash.substring(0, 8)}...; license binding changed concurrently`);
          }
        } catch (dbErr) {
          console.error("Failed to clear stale license from device:", dbErr);
        }

        if (errorMessage === "NotPermitted") {
          const data = { valid: false };
          return withCorsHeaders(createSuccessResponse(data, ERROR_MESSAGES[ErrorCode.LICENSE_ALREADY_ACTIVATED]), request);
        }

        if (errorMessage === "ResourceNotFound") {
          const data = { valid: false };
          return withCorsHeaders(createSuccessResponse(data, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]), request);
        }
      }

      return withCorsHeaders(handleInternalError(polarError), request);
    }
    // 3. All good - update last checked time
    await prisma.device.update({
      where: { deviceHash },
      data: {
        lastChecked: new Date(),
        appVersion,
        osType,
        osVersion
      }
    });

    // Log validation
    after(async () => {
      await prisma.activityLog.create({
        data: {
          deviceHash,
          action: "validate",
          metadata: { licenseKeyRef: redactLicenseKey(licenseKey) }
        }
      });
    });

    const data = {
      valid: true
    };
    return withCorsHeaders(createSuccessResponse(data), request);
  } catch (error) {
    return withCorsHeaders(handleInternalError(error), request);
  }
}

export async function OPTIONS(request: NextRequest) {
  return new Response(null, { status: 200, headers: getCorsHeaders(request) });
}
