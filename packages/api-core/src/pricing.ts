export type PlanKey = 'pro' | 'plus' | 'max' | 'team';

export interface PlanMeta {
  key: PlanKey;
  label: string;
  maxDevices: number;
  price: number;
  keyPrefix: string;
}

export const PLANS: Record<PlanKey, PlanMeta> = {
  pro:  { key: 'pro',  label: 'Pro',  maxDevices: 1,  price: 39,  keyPrefix: 'VTP' },
  plus: { key: 'plus', label: 'Plus', maxDevices: 2,  price: 59,  keyPrefix: 'VTS' },
  max:  { key: 'max',  label: 'Max',  maxDevices: 4,  price: 99,  keyPrefix: 'VTM' },
  team: { key: 'team', label: 'Team', maxDevices: 10, price: 199, keyPrefix: 'VTT' },
};

export const PUBLIC_PLAN_KEYS = ['pro', 'plus', 'max'] as const;
export type PublicPlanKey = (typeof PUBLIC_PLAN_KEYS)[number];

export const BASE_PRICES: Record<PlanKey, number> = {
  pro: PLANS.pro.price,
  plus: PLANS.plus.price,
  max: PLANS.max.price,
  team: PLANS.team.price,
} as const;

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

export function getPlanByLicensePrefix(licenseKey: string): PlanKey | null {
  for (const meta of Object.values(PLANS)) {
    if (licenseKey.startsWith(meta.keyPrefix)) return meta.key;
  }
  return null;
}

export function resolvePlan(productId: string | null | undefined, licenseKey: string): PlanKey | null {
  const byProduct = getPlanByProductId(productId);
  if (byProduct) return byProduct;
  return getPlanByLicensePrefix(licenseKey);
}

export function getMaxDevices(plan: PlanKey): number {
  return PLANS[plan].maxDevices;
}

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
