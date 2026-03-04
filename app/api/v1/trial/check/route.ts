import {
  getCorsHeaders,
  withCorsHeaders,
  createSuccessResponse,
  handleInternalError,
  handleValidationError
} from "@/lib/api-utils";
import { CONFIG } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { trialCheckRequestSchema } from "@/lib/types";
import { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = trialCheckRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return withCorsHeaders(handleValidationError(validationResult.error));
    }

    const { deviceHash } = validationResult.data;

    const existingDevice = await prisma.device.findUnique({ where: { deviceHash } });

    let trialDevice;
    if (!existingDevice) {
      try {
        trialDevice = await prisma.device.create({
          data: {
            deviceHash,
            lastChecked: new Date(),
            trialExpiresAt: new Date(Date.now() + CONFIG.trialDurationDays * 24 * 60 * 60 * 1000)
          }
        });
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
          const createdDevice = await prisma.device.findUnique({ where: { deviceHash } });
          if (!createdDevice) {
            throw error;
          }
          trialDevice = createdDevice;
        } else {
          throw error;
        }
      }
    } else {
      trialDevice = await prisma.device.update({
        where: { deviceHash },
        data: {
          lastChecked: new Date(),
        }
      });
    }

    // Check if trial started within the last 60 seconds (new trial)
    const isNewTrial = trialDevice.trialStartedAt &&
      trialDevice.trialStartedAt > new Date(Date.now() - 60 * 1000);
    if (isNewTrial) {
      // Log trial activation
      await prisma.activityLog.create({
        data: {
          deviceHash,
          action: "trial_start",
          metadata: {
            expiresAt: trialDevice.trialExpiresAt?.toISOString(),
            daysGranted: CONFIG.trialDurationDays
          }
        }
      });
    }

    const data = {
      isExpired: !!trialDevice.trialExpiresAt && trialDevice.trialExpiresAt < new Date(),
      daysLeft: trialDevice.trialExpiresAt && trialDevice.trialExpiresAt > new Date()
        ? Math.ceil((trialDevice.trialExpiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
        : 0,
      expiresAt: trialDevice.trialExpiresAt?.toISOString() || null
    };

    return withCorsHeaders(createSuccessResponse(data));
  } catch (error) {
    return withCorsHeaders(handleInternalError(error));
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: getCorsHeaders() });
}
