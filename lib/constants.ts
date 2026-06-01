import { ClaudeAI, Cursor, Gmail, Notion, OpenAI, Slack } from '@/components/icons';

export const CONFIG = {
  // Trial
  trialDurationDays: 3,
  trialsPerDevice: 1, // One trial per device forever

  // License
  devicesPerLicense: 1, // Default single-device license
  devicesPerMaxLicense: 10, // Largest public device-count option

  // Validation
  validationIntervalInHours: 6, // Check license status every 6 hours
  offlineGracePeriodDays: 7, // Work offline for 7 days

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

  // Report errors
  RATE_LIMITED = 'rate_limited',
  PAYLOAD_TOO_LARGE = 'payload_too_large',
  PARAMETER_VALIDATION_ERROR = 'parameter_validation_error',

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
  [ErrorCode.RATE_LIMITED]: 'Too many reports. Please try again later.',
  [ErrorCode.PAYLOAD_TOO_LARGE]: 'Report is too large. Please copy the report and contact support directly.',
  [ErrorCode.PARAMETER_VALIDATION_ERROR]: 'Invalid request parameters.',
  [ErrorCode.INTERNAL_ERROR]: 'An internal error occurred. Please try again.',
  [ErrorCode.INVALID_DEVICE_HASH]: 'Invalid device identifier.',
  [ErrorCode.MISSING_DEVICE_HASH]: 'Device identifier is required.',
  [ErrorCode.LICENSE_ACTIVATION_FAILED]: 'Failed to activate license.',
  [ErrorCode.LICENSE_REVOKED]: 'License revoked.',
  [ErrorCode.LICENSE_DISABLED]: 'License disabled.',
  [ErrorCode.LICENSE_ACTIVATION_LIMIT_REACHED]: 'This license has already been activated on the maximum number of devices.',
};

export const FEATURED_APPS = [
  { label: 'Gmail', Icon: Gmail },
  { label: 'Slack', Icon: Slack },
  { label: 'Notion', Icon: Notion },
  { label: 'ChatGPT', Icon: OpenAI },
  { label: 'Claude', Icon: ClaudeAI },
  { label: 'Cursor', Icon: Cursor },
] as const;

/** 
 * Apps shown in the hero (4 items max for breathing room).
 * Focused on the highest-signal apps for our target audience.
 */
export const HERO_APPS = [
  { label: 'Gmail', Icon: Gmail },
  { label: 'Cursor', Icon: Cursor },
  { label: 'Claude', Icon: ClaudeAI },
  { label: 'ChatGPT', Icon: OpenAI },
] as const;
