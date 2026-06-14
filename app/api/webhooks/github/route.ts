import { revalidateTag } from "next/cache";
import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

/**
 * GitHub webhook → revalidate the cached latest-release fetch.
 *
 * Setup in the GitHub repo settings (Settings → Webhooks → Add webhook):
 *   - Payload URL: https://voicetypr.com/api/webhooks/github
 *   - Content type: application/json
 *   - Secret:       GITHUB_WEBHOOK_SECRET (must match the env var below)
 *   - Which events: just "Releases"
 *
 * On any `release` event (published / edited / unpublished / deleted) we drop
 * the `github-release` cache tag so `/download` re-fetches on the next
 * request. The 30-day fallback TTL in app/lib/github.ts only kicks in if this
 * webhook ever stops firing.
 */

const SIGNATURE_PREFIX = "sha256=";

function verifySignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string,
): boolean {
  if (!signatureHeader || !signatureHeader.startsWith(SIGNATURE_PREFIX)) {
    return false;
  }

  const provided = signatureHeader.slice(SIGNATURE_PREFIX.length);
  const digest = createHmac("sha256", secret).update(rawBody).digest();
  const providedBuf = Buffer.from(provided, "hex");

  // Constant-time compare of equal-length buffers.
  if (providedBuf.length !== digest.length) return false;
  return timingSafeEqual(providedBuf, digest);
}

export async function POST(request: Request) {
  const secret = process.env.GITHUB_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[GitHub Webhook] GITHUB_WEBHOOK_SECRET is not configured");
    return new NextResponse("Webhook secret not configured", { status: 500 });
  }

  // Read the raw bytes — GitHub signed exactly these, so do not JSON.parse first.
  const rawBody = await request.text();
  const signature = request.headers.get("x-hub-signature-256");

  if (!verifySignature(rawBody, signature, secret)) {
    console.warn("[GitHub Webhook] Invalid signature — rejecting");
    return new NextResponse("Invalid signature", { status: 401 });
  }

  let payload: { action?: string };
  try {
    payload = JSON.parse(rawBody) as { action?: string };
  } catch {
    return new NextResponse("Invalid JSON", { status: 400 });
  }

  const event = request.headers.get("x-github-event");

  // GitHub sends a `ping` when the webhook is first configured. Acknowledge it.
  if (event === "ping") {
    return new NextResponse("pong", { status: 200 });
  }

  // Only release events should refresh the download cache.
  if (event !== "release") {
    return new NextResponse("Ignored: not a release event", { status: 200 });
  }

  revalidateTag("github-release", { expire: 30 * 24 * 3600 });
  console.log(
    `[GitHub Webhook] release.${payload.action ?? "unknown"} → revalidated "github-release" tag`,
  );

  return NextResponse.json({ ok: true, revalidated: true });
}
