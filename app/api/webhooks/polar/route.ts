import { prisma } from "@/lib/db";
import { Webhooks } from "@polar-sh/nextjs";
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";
import { after } from "next/server";

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,
  onPayload: async (payload) => {
    console.log(`Received Polar webhook: ${payload.type}`, payload.data);

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
  }
});

async function handleLicenseRevocation(data: WebhookOrderRefundedPayload["data"]) {
  try {
    // Get customer ID from the order
    const customerId = data.customerId;

    if (!customerId) {
      console.log("No customer ID found in webhook data");
      return;
    }

    // Clear license data for all devices with this customer ID
    const updated = await prisma.device.updateMany({
      where: { customerId },
      data: {
        licenseKey: null,
        activationId: null,
        customerId: null
        // Device record stays, but license is cleared
      }
    });

    if (updated.count > 0) {
      console.log(
        `Cleared license from ${updated.count} device(s) for refunded customer: ${customerId}`
      );

      // Log the revocation
      after(async () => {
        await prisma.activityLog.create({
          data: {
            action: "order_refunded",
            metadata: {
              customerId,
              clearedDevices: updated.count,
              orderId: data.id
            }
          }
        });
      });
    } else {
      console.log(`No licensed devices found for customer: ${customerId}`);
    }
  } catch (error) {
    console.error("Failed to handle license revocation:", error);
    // Don't throw - we don't want to fail the webhook
  }
}
