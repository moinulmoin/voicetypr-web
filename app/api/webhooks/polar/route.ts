import { prisma } from "@/lib/db";
import { redis } from "@/lib/redis";
import { Webhooks } from "@polar-sh/nextjs";
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,
  onPayload: async (payload) => {
    console.log(`[Webhook] ${payload.type}`);

    const payloadData = payload.data as { id?: string | number };
    const eventId = payloadData?.id ?? JSON.stringify(payload.data).slice(0, 32);
    const eventKey = `${payload.type}:${eventId}`;
    const processedKey = `webhook:processed:${eventKey}`;
    const lockKey = `webhook:processing:${eventKey}`;

    const alreadyProcessed = await redis.get(processedKey);
    if (alreadyProcessed) {
      console.log(`[Webhook] Duplicate event skipped: ${eventKey}`);
      return;
    }

    const lockClaimed = await redis.set(lockKey, "1", { ex: 300, nx: true });
    if (!lockClaimed) {
      console.log(`[Webhook] Event already in-flight: ${eventKey}`);
      return;
    }

    try {
      // Handle different webhook events
      switch (payload.type) {
        case "order.refunded":
          // Handle license revocation by removing device bindings
          await handleLicenseRevocation(payload.data);
          break;

        // Add more webhook handlers as needed
        default:
          console.log(`Unhandled webhook event: ${payload.type}`);
      }

      await redis.set(processedKey, "1", { ex: 86400 });
    } finally {
      await redis.del(lockKey);
    }
  },
});

async function handleLicenseRevocation(data: WebhookOrderRefundedPayload["data"]) {
  try {
    // Get customer ID from the order
    const customerId = data.customerId;

    if (!customerId) {
      console.log("No customer ID found in webhook data");
      return;
    }

    // Use transaction for atomic operations
    const result = await prisma.$transaction(async (tx) => {
      // Find all licenses for this customer
      const licenses = await tx.license.findMany({
        where: { customerId },
        select: { licenseKey: true }
      });

      if (licenses.length === 0) {
        console.log(`No licenses found for customer: ${customerId}`);
        return { licenseKeys: [], deviceCount: 0 };
      }

      const licenseKeys = licenses.map(l => l.licenseKey);

      // Clear license data for all devices with these license keys
      const updated = await tx.device.updateMany({
        where: {
          licenseKey: {
            in: licenseKeys
          }
        },
        data: {
          licenseKey: null,
          activationId: null
          // Device record stays, but license is cleared
          // Note: customerId is deprecated and will be removed
        }
      });

      // Delete the license records themselves
      await tx.license.deleteMany({
        where: {
          licenseKey: {
            in: licenseKeys
          }
        }
      });

      return { licenseKeys, deviceCount: updated.count };
    });

    if (result.deviceCount > 0) {
      console.log(
        `Cleared ${result.licenseKeys.length} license(s) from ${result.deviceCount} device(s) for refunded customer: ${customerId}`
      );

      // Note: Not logging to activityLog since it requires a device_hash
      // and order refunds are customer-level, not device-level actions.
      // The console.log above provides audit trail for now.
    } else if (result.licenseKeys.length > 0) {
      console.log(`Deleted ${result.licenseKeys.length} unused license(s) for customer: ${customerId}`);
    }
  } catch (error) {
    console.error("[Webhook] License revocation failed:", error);
    throw error;
  }
}
