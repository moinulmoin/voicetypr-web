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
import { PLANS, getPlanByLicensePrefix } from "@/lib/pricing";
import { validateLicenseKey } from "@/lib/polar";
import { licenseValidateRequestSchema } from "@/lib/types";
import { after, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = licenseValidateRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return withCorsHeaders(handleValidationError(validationResult.error));
    }

    const { licenseKey, deviceHash, appVersion, osType, osVersion } = validationResult.data;

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
        lastChecked: true,
        license: {
          select: { plan: true, maxDevices: true },
        },
      }
    });

    if (!device) {
      const response = {
        valid: false,
      };
      return withCorsHeaders(createSuccessResponse(response, ERROR_MESSAGES[ErrorCode.DEVICE_MISMATCH]));
    }

    // Store original values for race-condition-safe cleanup later
    const originalLicenseKey = device.licenseKey;
    const originalActivationId = device.activationId;

    // 2. Handle missing activationId (corrupted/partial data)
    const clearStaleBinding = async (reason: string) => {
      const result = await prisma.device.updateMany({
        where: {
          deviceHash,
          licenseKey: originalLicenseKey,
          ...(originalActivationId && { activationId: originalActivationId }),
        },
        data: {
          licenseKey: null,
          activationId: null,
          lastChecked: new Date(),
        },
      });

      if (result.count > 0) {
        console.log(
          `[License Validate] Cleared stale license binding for device ${deviceHash.substring(0, 8)}... (${reason})`,
        );

        after(async () => {
          await prisma.activityLog.create({
            data: {
              deviceHash,
              action: 'license_desynced',
              metadata: { licenseKeyPrefix: licenseKey.substring(0, 8), reason },
            },
          });
        });
      } else {
        console.log(
          `[License Validate] Skipped clearing for device ${deviceHash.substring(0, 8)}...; license binding changed concurrently`,
        );
      }
    };

    if (!originalActivationId) {
      console.warn(
        `[License Validate] Device ${deviceHash.substring(0, 8)}... has licenseKey but no activationId; clearing as stale`
      );

      await clearStaleBinding('missing_activation_id');

      const data = { valid: false };
      return withCorsHeaders(createSuccessResponse(data, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]));
    }

    // 3. Validate with Polar
    let validatedLicense;
    try {
      validatedLicense = await validateLicenseKey(licenseKey, originalActivationId);
    } catch (polarError: unknown) {
      const apiError = polarError as { error?: string };
      const errorMessage = apiError.error || 'Unknown error';
      console.error('Polar validation error:', errorMessage);

      // If Polar doesn't recognize this activation anymore, clear local bindings
      // This handles the case where user deactivated via Polar customer portal
      if (errorMessage === 'NotPermitted' || errorMessage === 'ResourceNotFound') {
        try {
          await clearStaleBinding(errorMessage);
        } catch (dbErr) {
          console.error('Failed to clear stale license from device:', dbErr);
        }

        if (errorMessage === 'NotPermitted') {
          const data = { valid: false };
          return withCorsHeaders(createSuccessResponse(data, ERROR_MESSAGES[ErrorCode.LICENSE_ALREADY_ACTIVATED]));
        }

        if (errorMessage === 'ResourceNotFound') {
          const data = { valid: false };
          return withCorsHeaders(createSuccessResponse(data, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]));
        }
      }

      return withCorsHeaders(handleInternalError(polarError));
    }

    if (validatedLicense.status !== 'granted') {
      await clearStaleBinding(`license_status_${validatedLicense.status}`);

      const data = { valid: false };
      return withCorsHeaders(createSuccessResponse(data, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]));
    }

    if (!validatedLicense.activation || validatedLicense.activation.id !== originalActivationId) {
      await clearStaleBinding('missing_or_mismatched_activation');

      const data = { valid: false };
      return withCorsHeaders(createSuccessResponse(data, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]));
    }

    // 4. All good - update last checked time
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
          action: 'validate',
          metadata: { licenseKeyRef: redactLicenseKey(licenseKey) }
        }
      });
    });

    // Resolve plan/maxDevices: prefer stored License data, fall back to prefix
    const storedPlan = device.license?.plan;
    const storedMaxDevices = device.license?.maxDevices;
    const fallbackPlanKey = getPlanByLicensePrefix(licenseKey);
    const plan = storedPlan ?? fallbackPlanKey ?? undefined;
    const maxDevices = storedMaxDevices ?? (fallbackPlanKey ? PLANS[fallbackPlanKey].maxDevices : undefined);

    const data = {
      valid: true,
      ...(plan && { plan }),
      ...(maxDevices != null && { maxDevices }),
    };
    return withCorsHeaders(createSuccessResponse(data));
  } catch (error) {
    return withCorsHeaders(handleInternalError(error));
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: getCorsHeaders() });
}
