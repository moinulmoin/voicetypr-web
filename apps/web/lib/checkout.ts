import type { PublicPlanKey } from '@voicetypr/api-core/pricing';

/**
 * Plan key -> Polar product id, resolved at module load from NEXT_PUBLIC_* env.
 * Shared by the pricing card and landing checkout flows.
 */
export const productIds: Record<PublicPlanKey, string | undefined> = {
  pro: process.env.NEXT_PUBLIC_PRO_PRODUCT_ID,
  plus: process.env.NEXT_PUBLIC_PLUS_PRODUCT_ID,
  max: process.env.NEXT_PUBLIC_MAX_PRODUCT_ID,
};

/**
 * Build checkout metadata (device id + attribution) and redirect to the Polar
 * checkout endpoint. Callers guard a missing productId beforehand — this
 * performs the redirect unconditionally.
 */
export function redirectToCheckout(
  productId: string,
  { affonsoReferral, referrer }: { affonsoReferral: string; referrer: string },
) {
  const metadata: Record<string, string> = {};

  if (typeof window !== 'undefined' && window.openpanel?.getDeviceId) {
    const deviceId = window.openpanel.getDeviceId();
    if (deviceId) metadata.deviceId = deviceId;
  }

  if (affonsoReferral) metadata.affonso_referral = affonsoReferral;
  if (referrer) metadata.referrer = referrer;

  const metadataParam =
    Object.keys(metadata).length > 0
      ? `&metadata=${encodeURIComponent(JSON.stringify(metadata))}`
      : '';

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? '';
  window.location.assign(`${apiBaseUrl}/api/checkout?products=${productId}${metadataParam}`);
}
