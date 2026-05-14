/**
 * Shared pricing constants and utilities
 * Central plan metadata for backend use and pricing UI
 */

// ── Plan definitions ──────────────────────────────────────────────────────

export type PlanKey = 'pro' | 'plus' | 'max' | 'team';

export interface PlanMeta {
  key: PlanKey;
  label: string;
  maxDevices: number;
  price: number;
  /** Polar license key prefix */
  keyPrefix: string;
}

export const PLANS: Record<PlanKey, PlanMeta> = {
  pro:  { key: 'pro',  label: 'Pro',  maxDevices: 1,  price: 39,  keyPrefix: 'VTP' },
  plus: { key: 'plus', label: 'Plus', maxDevices: 2,  price: 59,  keyPrefix: 'VTS' },
  max:  { key: 'max',  label: 'Max',  maxDevices: 4,  price: 99,  keyPrefix: 'VTM' },
  team: { key: 'team', label: 'Team', maxDevices: 10, price: 199, keyPrefix: 'VTT' },
};

/** Legacy shape kept for PricingCards – maps plan key to price */
export const BASE_PRICES: Record<PlanKey, number> = {
  pro:  PLANS.pro.price,
  plus: PLANS.plus.price,
  max:  PLANS.max.price,
  team: PLANS.team.price,
} as const;

// ── Helpers ───────────────────────────────────────────────────────────────

/**
 * Map Polar productId to PlanKey using environment variables.
 * Safe to call with undefined/null – returns null instead of throwing.
 */
export function getPlanByProductId(productId: string | null | undefined): PlanKey | null {
  if (!productId) return null;

  const envMap: Record<string, PlanKey> = {
    [process.env.POLAR_PRODUCT_ID_PRO ?? process.env.NEXT_PUBLIC_PRO_PRODUCT_ID ?? '']: 'pro',
    [process.env.POLAR_PRODUCT_ID_PLUS ?? process.env.NEXT_PUBLIC_PLUS_PRODUCT_ID ?? '']: 'plus',
    [process.env.POLAR_PRODUCT_ID_MAX ?? process.env.NEXT_PUBLIC_MAX_PRODUCT_ID ?? '']: 'max',
    [process.env.POLAR_PRODUCT_ID_TEAM ?? process.env.NEXT_PUBLIC_TEAM_PRODUCT_ID ?? '']: 'team',
  };

  return envMap[productId] ?? null;
}

/**
 * Determine plan from license key prefix.
 * Used as a fallback when productId is not available.
 */
export function getPlanByLicensePrefix(licenseKey: string): PlanKey | null {
  for (const meta of Object.values(PLANS)) {
    if (licenseKey.startsWith(meta.keyPrefix)) return meta.key;
  }
  return null;
}

/**
 * Resolve the plan for a license, preferring productId over prefix fallback.
 * Returns null if the plan cannot be determined.
 */
export function resolvePlan(productId: string | null | undefined, licenseKey: string): PlanKey | null {
  const byProduct = getPlanByProductId(productId);
  if (byProduct) return byProduct;
  return getPlanByLicensePrefix(licenseKey);
}

/** Get maxDevices for a known plan key. */
export function getMaxDevices(plan: PlanKey): number {
  return PLANS[plan].maxDevices;
}

// ── Formatting (used by pricing UI) ──────────────────────────────────────

/**
 * Format price with smart decimal handling
 * - Integers: $39
 * - .5 decimals: $29.5
 * - Other decimals: $11.80
 */
export function formatPrice(n: number): string {
  const isInt = Number.isInteger(n);
  const hasPointFive = Number.isInteger(n * 2) && !isInt;
  const val = isInt
    ? n.toString()
    : hasPointFive
      ? n.toString()
      : n.toFixed(2);
  return `$${val}`;
}
