import { redis } from "@/lib/redis";
import { Webhooks } from "@polar-sh/nextjs";
import type { WebhookOrderPaidPayload } from "@polar-sh/sdk/models/components/webhookorderpaidpayload.js";
import { opServer } from "@/lib/openpanel-server";
import { prisma } from "@/lib/db";
import { PLANS, resolvePlan } from "@/lib/pricing";
import type { PlanKey } from "@/lib/pricing";
import { after } from "next/server";

// ── Defensive payload extraction helpers ──────────────────────────────────
// The exact payload shape may vary; these never throw.

/** Try to pull a license key string out of an arbitrary webhook payload. */
function extractLicenseKey(data: Record<string, unknown>): string | null {
  // Common locations across different Polar webhook events
  const candidates = [
    data.license_key,
    data.licenseKey,
    (data.metadata as Record<string, unknown> | undefined)?.license_key,
    (data.metadata as Record<string, unknown> | undefined)?.licenseKey,
  ];

  for (const c of candidates) {
    if (typeof c === 'string' && c.length > 0) return c;
  }
  return null;
}

/** Try to pull a product ID string out of an arbitrary webhook payload. */
function extractProductId(data: Record<string, unknown>): string | null {
  if (typeof data.productId === 'string' && data.productId.length > 0) {
    return data.productId;
  }
  return null;
}

// ── Deduplication ─────────────────────────────────────────────────────────

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

// ── Webhook handler ───────────────────────────────────────────────────────

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

    // Persist plan/maxDevices on the License record when the payload contains
    // enough information. This is best-effort and must never throw.
    await persistLicensePlan(data as unknown as Record<string, unknown>);
  } catch (error) {
    console.error("[Webhook] Revenue tracking failed:", error);
    // Don't throw - revenue tracking failure shouldn't break the webhook
  }
}

/**
 * Best-effort: resolve the plan from productId / license key prefix and
 * update the matching License row. Silently no-ops when data is incomplete.
 */
async function persistLicensePlan(data: Record<string, unknown>) {
  try {
    const licenseKey = extractLicenseKey(data);
    const productId = extractProductId(data);

    if (!licenseKey) return;

    // Try to resolve plan via productId first, then license key prefix
    const planKey: PlanKey | null = resolvePlan(productId, licenseKey);
    if (!planKey) return;

    const planMeta = PLANS[planKey];

    await prisma.license.updateMany({
      where: { licenseKey },
      data: {
        plan: planKey,
        maxDevices: planMeta.maxDevices,
      },
    });
  } catch (err) {
    // Plan persistence must never break the webhook pipeline
    console.error("[Webhook] Failed to persist license plan:", err);
  }
}
