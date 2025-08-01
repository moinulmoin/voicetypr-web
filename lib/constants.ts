export const CONFIG = {
  // Trial
  trialDurationDays: 3,
  trialsPerDevice: 1, // One trial per device forever

  // License
  devicesPerLicense: 1, // One device at a time
  devicesPerMaxLicense: 5, // Up to 4 devices for Max plan

  // Validation
  validationIntervalInHours: 6, // Check license status every 6 hours
  offlineGracePeriodDays: 7, // Work offline for 3 days

  // Versions
  minSupportedVersion: '1.0.0',
} as const;

export enum ErrorCode {
  // Trial errors
  TRIAL_EXPIRED = 'trial_expired',
  TRIAL_ALREADY_USED = 'trial_already_used',

  // License errors
  INVALID_LICENSE = 'invalid_license',
  LICENSE_ALREADY_ACTIVATED = 'license_already_activated',
  DEVICE_MISMATCH = 'device_mismatch',

  // Deactivation errors
  NOT_YOUR_LICENSE = 'not_your_license',

  // System errors
  INTERNAL_ERROR = 'internal_error',
  INVALID_DEVICE_HASH = 'invalid_device_hash',
  MISSING_DEVICE_HASH = 'missing_device_hash',

  // Activation errors
  LICENSE_ACTIVATION_FAILED = 'license_activation_failed',
  LICENSE_REVOKED = 'license_revoked',
  LICENSE_DISABLED = 'license_disabled',
  LICENSE_ACTIVATION_LIMIT_REACHED = 'license_activation_limit_reached',
}

export const ERROR_MESSAGES: Record<ErrorCode, string> = {
  [ErrorCode.TRIAL_EXPIRED]: 'Your 3 day trial has ended. Purchase a license to continue.',
  [ErrorCode.TRIAL_ALREADY_USED]: 'A trial has already been used on this device.',
  [ErrorCode.INVALID_LICENSE]: 'Invalid license key.',
  [ErrorCode.LICENSE_ALREADY_ACTIVATED]:
    'This license is active on another device. Deactivate it first.',
  [ErrorCode.DEVICE_MISMATCH]: 'This license is registered to a different device.',
  [ErrorCode.NOT_YOUR_LICENSE]: 'This license is not activated on this device.',
  [ErrorCode.INTERNAL_ERROR]: 'An internal error occurred. Please try again.',
  [ErrorCode.INVALID_DEVICE_HASH]: 'Invalid device identifier.',
  [ErrorCode.MISSING_DEVICE_HASH]: 'Device identifier is required.',
  [ErrorCode.LICENSE_ACTIVATION_FAILED]: 'Failed to activate license.',
  [ErrorCode.LICENSE_REVOKED]: 'License revoked.',
  [ErrorCode.LICENSE_DISABLED]: 'License disabled.',
  [ErrorCode.LICENSE_ACTIVATION_LIMIT_REACHED]: 'This license has already been activated on the maximum number of devices.',
};