import { z } from 'zod';

// Base request schema with device hash and app version
export const baseRequestSchema = z.object({
  deviceHash: z.string().length(64).regex(/^[a-f0-9]{64}$/), // SHA256 hash
  appVersion: z.string().regex(/^\d+\.\d+\.\d+$/), // Semantic versioning
  osType: z.enum(['windows', 'macos', 'linux']).optional(),
  osVersion: z.string().optional(),
});

// Trial schemas
export const trialCheckRequestSchema = z.object({
  deviceHash: z.string().length(64).regex(/^[a-f0-9]{64}$/),
  osType: z.enum(['windows', 'macos', 'linux']).optional(),
  osVersion: z.string().optional(),
});

// License schemas
export const licenseActivateRequestSchema = z.object({
  licenseKey: z.string().min(1),
  deviceHash: z.string().length(64).regex(/^[a-f0-9]{64}$/),
  osType: z.enum(['windows', 'macos', 'linux']).optional(),
  osVersion: z.string().optional(),
  appVersion: z.string().regex(/^\d+\.\d+\.\d+$/).optional(),
  deviceName: z.string().optional(), // Device hostname for better identification
});

export const licenseValidateRequestSchema = z.object({
  licenseKey: z.string().min(1),
  deviceHash: z.string().length(64).regex(/^[a-f0-9]{64}$/),
  appVersion: z.string().regex(/^\d+\.\d+\.\d+$/),
  osType: z.enum(['windows', 'macos', 'linux']).optional(),
  osVersion: z.string().optional(),
});

export const licenseDeactivateRequestSchema = z.object({
  licenseKey: z.string().min(1),
  deviceHash: z.string().length(64).regex(/^[a-f0-9]{64}$/),
});

const optionalTrimmedString = (maxLength: number) =>
  z.string().trim().max(maxLength).optional();

const bugReportEnvironmentSchema = z.object({
  appVersion: z.string().trim().min(1).max(32),
  platform: z.string().trim().min(1).max(32),
  osVersion: z.string().trim().min(1).max(128),
  architecture: z.string().trim().min(1).max(64),
  currentModel: z.string().trim().max(128).nullable().optional(),
  deviceId: z.string().trim().max(128).optional(),
  timestamp: z.string().datetime(),
});

const bugReportLatestLogSchema = z.object({
  fileName: z.string().trim().max(255).nullable().optional(),
  content: z.string().max(50_000),
  truncated: z.boolean(),
  statusNote: z.string().trim().max(500).optional(),
});

const bugReportBaseSchema = z.object({
  name: optionalTrimmedString(100),
  email: z.string().trim().email().max(254).optional(),
  environment: bugReportEnvironmentSchema,
  latestLog: bugReportLatestLogSchema,
});

export const bugReportRequestSchema = z.discriminatedUnion('kind', [
  bugReportBaseSchema.extend({
    kind: z.literal('manual'),
    message: z.string().trim().min(1).max(10_000),
  }),
  bugReportBaseSchema.extend({
    kind: z.literal('crash'),
    message: optionalTrimmedString(10_000),
    crash: z.object({
      errorMessage: z.string().trim().min(1).max(5_000),
      errorStack: z.string().max(20_000).optional(),
      componentStack: z.string().max(10_000).optional(),
    }),
  }),
]);

export type BugReportRequest = z.infer<typeof bugReportRequestSchema>;

// Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface TrialCheckResponse {
    isExpired: boolean;
}

export interface TrialActivateResponse {
  success: boolean;
  expiresAt?: string;
  daysRemaining?: number;
}

export interface LicenseActivateResponse {
  success: boolean;
  activatedAt?: string;
  error?: string;
  message?: string;
}

export interface LicenseValidateResponse {
  valid: boolean;
  reason?: string;
  offlineMode?: boolean;
}

export interface LicenseDeactivateResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Polar webhook types
export interface PolarWebhookPayload {
  event: string;
  data: {
    license_key?: string;
    subscription_id?: string;
    order_id?: string;
    customer_id?: string;
  };
}