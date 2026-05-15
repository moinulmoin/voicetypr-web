import { afterEach, describe, expect, it } from 'vitest';
import {
  BASE_PRICES,
  PLANS,
  formatPrice,
  getMaxDevices,
  getPlanByLicensePrefix,
  getPlanByProductId,
  resolvePlan,
} from './pricing';

const originalEnv = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnv };
});

describe('pricing plan metadata', () => {
  it('keeps the public pricing ladder and device limits in one place', () => {
    expect(BASE_PRICES).toEqual({ pro: 39, plus: 59, max: 99, team: 199 });
    expect(getMaxDevices('pro')).toBe(1);
    expect(getMaxDevices('plus')).toBe(2);
    expect(getMaxDevices('max')).toBe(4);
    expect(getMaxDevices('team')).toBe(10);
  });

  it('maps license key prefixes to the correct plan', () => {
    expect(getPlanByLicensePrefix(`${PLANS.pro.keyPrefix}-license`)).toBe('pro');
    expect(getPlanByLicensePrefix(`${PLANS.plus.keyPrefix}-license`)).toBe('plus');
    expect(getPlanByLicensePrefix(`${PLANS.max.keyPrefix}-license`)).toBe('max');
    expect(getPlanByLicensePrefix(`${PLANS.team.keyPrefix}-license`)).toBe('team');
    expect(getPlanByLicensePrefix('UNKNOWN-license')).toBeNull();
  });

  it('prefers product id mapping over license prefix fallback', () => {
    process.env.NEXT_PUBLIC_PRO_PRODUCT_ID = 'prod-pro';
    process.env.NEXT_PUBLIC_TEAM_PRODUCT_ID = 'prod-team';

    expect(getPlanByProductId('prod-team')).toBe('team');
    expect(resolvePlan('prod-team', `${PLANS.pro.keyPrefix}-license`)).toBe('team');
    expect(resolvePlan(undefined, `${PLANS.pro.keyPrefix}-license`)).toBe('pro');
  });

  it('formats prices without unnecessary decimals', () => {
    expect(formatPrice(39)).toBe('$39');
    expect(formatPrice(29.5)).toBe('$29.5');
    expect(formatPrice(11.8)).toBe('$11.80');
    expect(formatPrice(7.83)).toBe('$7.83');
  });
});
