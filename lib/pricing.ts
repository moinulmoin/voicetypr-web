/**
 * Shared pricing constants and utilities
 * Used across homepage Pricing section and Download page
 */

export const BASE_PRICES = {
  pro: 50,
  plus: 80,
  max: 140,
} as const;

/* ── Flash-offer (time-limited "random" discount) ── */

/** Discount fraction applied when the flash offer is active */
export const FLASH_DISCOUNT_RATE = 0.20; // 20 %

/** Integer percentage for display (avoids duplicating Math.round everywhere) */
export const FLASH_DISCOUNT_PCT = Math.round(FLASH_DISCOUNT_RATE * 100);

/** Whether the flash offer feature is enabled (requires a coupon code) */
export const FLASH_OFFER_ENABLED = Boolean(process.env.NEXT_PUBLIC_COUPON_CODE);

/** Polar.sh discount-id for the flash offer (reuses existing coupon env var) */
export const FLASH_DISCOUNT_CODE =
  process.env.NEXT_PUBLIC_COUPON_CODE ?? "";

/** Pre-computed discounted prices (used by the flash-offer UI) */
export const FLASH_DISCOUNTED_PRICES = {
  pro: BASE_PRICES.pro * (1 - FLASH_DISCOUNT_RATE),
  plus: BASE_PRICES.plus * (1 - FLASH_DISCOUNT_RATE),
  max: BASE_PRICES.max * (1 - FLASH_DISCOUNT_RATE),
} as const;

/** How long the flash-offer countdown lasts (ms) */
export const FLASH_OFFER_DURATION_MS = 6 * 60 * 60 * 1000; // 6 h

/** Cooldown before the offer can re-appear after expiry (ms) */
export const FLASH_OFFER_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 d

/**
 * Format price with smart decimal handling
 * - Integers: $50
 * - .5 decimals: $35.5
 * - Other decimals: $56.00
 */
export function formatPrice(n: number): string {
  const isInt = Number.isInteger(n);
  const tenth = Math.round(n * 10) / 10;
  const hasPointFive =
    Math.abs(tenth * 10 - Math.round(tenth * 10)) < 1e-6 && !isInt;
  const val = isInt
    ? n.toString()
    : hasPointFive
      ? tenth.toString()
      : n.toFixed(2);
  return `$${val}`;
}

export type PlanKey = "pro" | "plus" | "max";
