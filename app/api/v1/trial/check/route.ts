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

    // check if trial started in between 60s of now then create a new trial
    const newTrialDevice =
      trialDevice.trialStartedAt && trialDevice.trialStartedAt < new Date(Date.now() - 60 * 1000);
    if (newTrialDevice) {
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
      isExpired: (trialDevice.trialExpiresAt && trialDevice.trialExpiresAt < new Date()) || false
    };

    return createSuccessResponse(data);
  } catch (error) {
    return handleInternalError(error);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: corsHeaders });
}
