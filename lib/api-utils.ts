import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { ERROR_MESSAGES, ErrorCode } from './constants';
import { ApiResponse } from './types';

export function createSuccessResponse<T>(data: T, message: string = "Success"): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
    message
  });
}

export function createErrorResponse(
  error: ErrorCode,
  statusCode: number = 400
): NextResponse<ApiResponse> {


  return NextResponse.json(
    {
      success: false,
      message: ERROR_MESSAGES[error],
    },
    { status: statusCode }
  );
}

export function handleValidationError(error: ZodError): NextResponse<ApiResponse> {
  const firstError = error.errors[0];
  const message = `${firstError?.path.join('.')}: ${firstError?.message}`;

  return NextResponse.json(
    {
      success: false,
      error: 'parameter_validation_error',
      message,
    },
    { status: 400 }
  );
}

export function handleInternalError(error: unknown): NextResponse<ApiResponse> {
  console.error('Internal error:', error);

  return NextResponse.json(
    {
      success: false,
      error: ErrorCode.INTERNAL_ERROR,
      message: ERROR_MESSAGES[ErrorCode.INTERNAL_ERROR],
    },
    { status: 500 }
  );
}

// Extract and validate device hash from request
export function extractDeviceHash(request: NextRequest): string | null {
  const deviceHash = request.headers.get('x-device-hash');

  if (!deviceHash || deviceHash.length !== 64 || !/^[a-f0-9]{64}$/.test(deviceHash)) {
    return null;
  }

  return deviceHash;
}

// Redact license key for logging - show only first 8 characters
export function redactLicenseKey(key: string): string {
  return key.substring(0, 8) + '...';
}

// Dynamic CORS headers for API routes
export function getCorsHeaders(request?: NextRequest): Record<string, string> {
  const origin = request?.headers.get('origin');
  const ALLOWED_ORIGINS = [
    process.env.NEXT_PUBLIC_APP_URL,
    'tauri://localhost',
    'https://tauri.localhost',
    ...(process.env.ALLOWED_ORIGINS?.split(',').map(o => o.trim()) || []),
  ].filter(Boolean) as string[];

  const isStrictCors = process.env.STRICT_CORS === 'true';
  const allowedOrigin = isStrictCors
    ? (origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0] || '*')
    : '*';

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-device-hash',
  };
}

// Backward-compatible alias (uses wildcard when no request available)
export const corsHeaders = getCorsHeaders();

// Add CORS headers to any NextResponse
export function withCorsHeaders(response: NextResponse, request?: NextRequest): NextResponse {
  const headers = getCorsHeaders(request);
  Object.entries(headers).forEach(([k, v]) => response.headers.set(k, v));
  return response;
}