/**
 * Shared pricing constants and utilities
 * Used across homepage Pricing section and Download page
 */

export const BASE_PRICES = {
  pro: 50,
  plus: 80,
  max: 140,
} as const;

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
