import { PLANS, getPlanByLicensePrefix, getMaxDevices as getMaxDevicesForPlan } from './pricing.js';

export function getMaxDevicesForLicense(licenseKey: string): number {
  const plan = getPlanByLicensePrefix(licenseKey);
  if (!plan) return NaN;
  return getMaxDevicesForPlan(plan);
}

export function getLicenseType(licenseKey: string): string {
  const planKey = getPlanByLicensePrefix(licenseKey);
  if (!planKey) return 'Unknown';
  return PLANS[planKey].label;
}
