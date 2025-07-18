import { Polar } from "@polar-sh/sdk";

// Initialize Polar SDK
export const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  server: process.env.NODE_ENV !== "production" ? "sandbox" : "production",
});

// Validate a license key with Polar
export async function validateLicenseKey(licenseKey: string, activationId: string) {
  // Let errors bubble up to the API route
  const response = await polar.customerPortal.licenseKeys.validate({
    key: licenseKey,
    organizationId: process.env.POLAR_ORGANIZATION_ID!,
    activationId: activationId
  });

  // Return the full response for the route to use
  // Routes will check status, expiration, activation, etc.
  return response;
}

// Deactivate a license key
export async function deactivateLicenseKey({
  licenseKey,
  activationId,
}: {
  licenseKey: string;
  activationId: string;
}) {
  // Just call Polar API, let errors bubble up
  const response = await polar.customerPortal.licenseKeys.deactivate({
    key: licenseKey,
    organizationId: process.env.POLAR_ORGANIZATION_ID!,
    activationId: activationId,
  });

  return response;
}

// activate a license key
export async function activateLicenseKey(licenseKey: string, deviceHash: string) {
  // Just call Polar API, let errors bubble up
  const response = await polar.customerPortal.licenseKeys.activate({
    key: licenseKey,
    organizationId: process.env.POLAR_ORGANIZATION_ID!,
    label: "VoiceTypr",
    meta: {
      deviceHash
    }
  });

  return response;
}
