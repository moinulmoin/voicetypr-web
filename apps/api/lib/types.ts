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