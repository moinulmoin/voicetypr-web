/**
 * License utility functions for device limit enforcement.
 * Delegates plan definitions to lib/pricing.ts.
 */

import { PLANS, getPlanByLicensePrefix, getMaxDevices as getMaxDevicesForPlan } from './pricing';

/**
 * Get maximum devices allowed for a license based on its prefix.
 * @param licenseKey - The Polar license key
 * @returns Maximum number of devices allowed, or NaN for unknown formats
 */
export function getMaxDevicesForLicense(licenseKey: string): number {
  const plan = getPlanByLicensePrefix(licenseKey);
  if (!plan) return NaN;
  return getMaxDevicesForPlan(plan);
}

/**
 * Get license type (plan label) from license key prefix.
 * @param licenseKey - The Polar license key
 * @returns License type name
 */
export function getLicenseType(licenseKey: string): string {
  const planKey = getPlanByLicensePrefix(licenseKey);
  if (!planKey) return 'Unknown';
  return PLANS[planKey].label;
}
