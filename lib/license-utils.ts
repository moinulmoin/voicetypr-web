/**
 * License utility functions for device limit enforcement
 */

/**
 * Get maximum devices allowed for a license based on its prefix
 * @param licenseKey - The Polar license key
 * @returns Maximum number of devices allowed
 */
export function getMaxDevicesForLicense(licenseKey: string): number {
  // Pro plan - 1 device
  if (licenseKey.startsWith('vtp')) {
    return 1;
  }

  // Plus plan - 2 devices
  if (licenseKey.startsWith('vts')) {
    return 2;
  }

  // Future plans (ready when you add them)
  if (licenseKey.startsWith('vtm')) {
    return 4;
  }

  // Default to Pro (1 device) for unknown prefixes
  return 1;
}

/**
 * Get license type from license key prefix
 * @param licenseKey - The Polar license key
 * @returns License type name
 */
export function getLicenseType(licenseKey: string): string {
  if (licenseKey.startsWith('vtp')) return 'Pro';
  if (licenseKey.startsWith('vts')) return 'Plus';
  if (licenseKey.startsWith('vtm')) return 'Team';

  return 'Pro';
}