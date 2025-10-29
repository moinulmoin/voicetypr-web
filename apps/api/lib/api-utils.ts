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

// CORS headers for API routes
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-device-hash',
};