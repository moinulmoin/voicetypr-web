import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

export function getClientIp(request: NextRequest): string {
  const vercelForwardedFor = request.headers.get('x-vercel-forwarded-for');
  if (vercelForwardedFor) {
    const parts = vercelForwardedFor.split(',');
    return parts[0]?.trim() || '0.0.0.0';
  }

  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const parts = forwardedFor.split(',');
    return parts[0]?.trim() || '0.0.0.0';
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  // request.ip may be available in some Next.js/Vercel environments
  if (request.ip) {
    return request.ip;
  }
  return '0.0.0.0';
}

export async function getClientIpFromHeaders(): Promise<string> {
  const headersList = await headers();

  const vercelForwardedFor = headersList.get('x-vercel-forwarded-for');
  if (vercelForwardedFor) {
    const parts = vercelForwardedFor.split(',');
    return parts[0]?.trim() || '0.0.0.0';
  }

  const forwardedFor = headersList.get('x-forwarded-for');
  if (forwardedFor) {
    const parts = forwardedFor.split(',');
    return parts[0]?.trim() || '0.0.0.0';
  }

  const realIp = headersList.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  return '0.0.0.0';
}
