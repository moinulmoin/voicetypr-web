import { Polar } from '@polar-sh/sdk';

export const polarServer =
  process.env.NODE_ENV !== 'production' ? 'sandbox' : 'production';

export const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  server: polarServer,
});

export async function validateLicenseKey(licenseKey: string, activationId: string) {
  return polar.licenseKeys.validate({
    key: licenseKey,
    organizationId: process.env.POLAR_ORGANIZATION_ID!,
    activationId,
  });
}

export async function deactivateLicenseKey({
  licenseKey,
  activationId,
}: {
  licenseKey: string;
  activationId: string;
}) {
  return polar.licenseKeys.deactivate({
    key: licenseKey,
    organizationId: process.env.POLAR_ORGANIZATION_ID!,
    activationId,
  });
}

export async function activateLicenseKey(
  licenseKey: string,
  deviceHash: string,
  osType?: string,
  osVersion?: string,
  appVersion?: string,
  deviceName?: string
) {
  let label = 'Voicetypr';

  if (appVersion) {
    label += ` v${appVersion}`;
  }

  if (osType) {
    const osDisplay = osType.charAt(0).toUpperCase() + osType.slice(1);
    label += ` - ${osDisplay}`;
    if (osVersion) {
      label += ` ${osVersion}`;
    }
  }

  if (deviceName) {
    label += ` - ${deviceName}`;
  }

  return polar.licenseKeys.activate({
    key: licenseKey,
    organizationId: process.env.POLAR_ORGANIZATION_ID!,
    label,
    meta: {
      deviceHash,
      ...(osType && { osType }),
      ...(osVersion && { osVersion }),
      ...(appVersion && { appVersion }),
      ...(deviceName && { deviceName }),
    },
  });
}
