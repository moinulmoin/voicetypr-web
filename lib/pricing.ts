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

/** Discount fraction applied when the flash offer is active.
 *  Changing this requires a redeploy — not controlled via env var. */
export const FLASH_DISCOUNT_RATE = 0.20; // 20 %

/** Integer percentage for display (avoids duplicating Math.round everywhere) */
export const FLASH_DISCOUNT_PCT = Math.round(FLASH_DISCOUNT_RATE * 100);

/** Whether the flash offer feature is enabled (requires a coupon code) */
export const FLASH_OFFER_ENABLED = Boolean(process.env.NEXT_PUBLIC_COUPON_CODE);

/** Polar.sh discount-id for the flash offer.
 *  Intentionally public (NEXT_PUBLIC_) — Polar validates the coupon server-side.
 *  The env var just tells the UI which discount ID to pass at checkout. */
export const FLASH_DISCOUNT_CODE =
  process.env.NEXT_PUBLIC_COUPON_CODE ?? "";

/** Pre-computed discounted prices (rounded to avoid floating-point display issues).
 *  Always computed regardless of FLASH_OFFER_ENABLED — gated at runtime in the UI. */
export const FLASH_DISCOUNTED_PRICES = {
  pro: Math.round(BASE_PRICES.pro * (1 - FLASH_DISCOUNT_RATE)),
  plus: Math.round(BASE_PRICES.plus * (1 - FLASH_DISCOUNT_RATE)),
  max: Math.round(BASE_PRICES.max * (1 - FLASH_DISCOUNT_RATE)),
} as const;

/** Flash-offer countdown durations per visit (ms).
 *  Each subsequent visit uses the next shorter duration.
 *  The last entry acts as a floor — all visits beyond that use it. */
export const FLASH_OFFER_DURATIONS_MS = [
  8 * 60 * 60 * 1000, // Visit 1: 8 h
  6 * 60 * 60 * 1000, // Visit 2: 6 h
  4 * 60 * 60 * 1000, // Visit 3: 4 h
  2 * 60 * 60 * 1000, // Visit 4: 2 h
  1 * 60 * 60 * 1000, // Visit 5+: 1 h (floor)
];

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
