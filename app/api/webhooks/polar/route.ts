import { redis } from "@/lib/redis";
import { Webhooks } from "@polar-sh/nextjs";
import type { WebhookOrderPaidPayload } from "@polar-sh/sdk/models/components/webhookorderpaidpayload.js";
import { opServer } from "@/lib/openpanel-server";
import { after } from "next/server";

/**
 * Redis-based deduplication: prevents the same webhook event from being
 * processed more than once. Uses a processing lock and a processed marker.
 */
async function deduplicated<T extends { type: string; data: { id?: string | number } }>(
  payload: T,
  handler: () => Promise<void>,
) {
  const eventId = payload.data.id ?? JSON.stringify(payload.data).slice(0, 32);
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
    await handler();
    await redis.set(processedKey, "1", { ex: 86400 });
  } finally {
    await redis.del(lockKey);
  }
}

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,
  onOrderPaid: async (payload: WebhookOrderPaidPayload) => {
    console.log(`[Webhook] ${payload.type}`);

    await deduplicated(payload, () => handleOrderPaid(payload.data));
  },
});

async function handleOrderPaid(data: WebhookOrderPaidPayload["data"]) {
  try {
    const metadata = data.metadata as Record<string, string> | undefined;
    const amount = data.totalAmount;

    if (!amount) {
      console.log("[Webhook] No amount found in order.paid event");
      return;
    }

    const deviceId = metadata?.deviceId;
    const productId = data.productId;

    // Track revenue with OpenPanel after the webhook responds.
    // `after` keeps the serverless invocation alive on Vercel (via waitUntil)
    // so the event actually flushes without blocking the webhook response.
    after(async () => {
      try {
        await opServer.revenue(amount, {
          deviceId: deviceId || undefined,
          productId: productId,
          currency: "USD",
        });
      } catch (err) {
        console.error("[Webhook] OpenPanel revenue flush failed:", err);
      }
    });

    console.log(`[Webhook] Revenue queued: $${(amount / 100).toFixed(2)}${deviceId ? ` (deviceId: ${deviceId})` : ""}`);
  } catch (error) {
    console.error("[Webhook] Revenue tracking failed:", error);
    // Don't throw - revenue tracking failure shouldn't break the webhook
  }
}
