import {
  corsHeaders,
  createSuccessResponse,
  handleInternalError,
  handleValidationError
} from "@/lib/api-utils";
import { CONFIG } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { trialCheckRequestSchema } from "@/lib/types";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = trialCheckRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return handleValidationError(validationResult.error);
    }

    const { deviceHash } = validationResult.data;

    // Create device record if doesn't exist
    const trialDevice = await prisma.device.upsert({
      where: { deviceHash },
      update: {
        lastChecked: new Date(),
      },
      create: {
        deviceHash,
        lastChecked: new Date(),
        trialExpiresAt: new Date(Date.now() + CONFIG.trialDurationDays * 24 * 60 * 60 * 1000)
      }
    });

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

    return createSuccessResponse(data);
  } catch (error) {
    return handleInternalError(error);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: corsHeaders });
}
