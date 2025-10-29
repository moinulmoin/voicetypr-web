import { prisma } from "@/lib/db";
import { Webhooks } from "@polar-sh/nextjs";
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

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
    console.error("Failed to handle license revocation:", error);
    // Don't throw - we don't want to fail the webhook
  }
}
