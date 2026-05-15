import { NextRequest, NextResponse } from 'next/server';

import { acceptsMarkdown, isMarkdownEligiblePath } from '@/lib/markdown-negotiation';

// EU (27 countries) + EEA (3) + UK + Switzerland + Brazil = 33 total
const GDPR_COUNTRIES = [
  // EU member states
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA (non-EU)
  'NO', 'IS', 'LI',
  // UK (post-Brexit)
  'GB',
  // Switzerland
  'CH',
  // Brazil (LGPD)
  'BR',
];

const BYPASS_HEADER = 'x-markdown-bypass';

export function proxy(request: NextRequest) {
  if (
    request.headers.get(BYPASS_HEADER) === '1' ||
    !acceptsMarkdown(request.headers.get('accept')) ||
    !isMarkdownEligiblePath(request.nextUrl.pathname)
  ) {
    return createBaseResponse(request);
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = '/api/markdown';
  rewriteUrl.search = '';
  rewriteUrl.searchParams.set('path', `${request.nextUrl.pathname}${request.nextUrl.search}`);

  return createBaseResponse(request, rewriteUrl);
}

function createBaseResponse(request: NextRequest, rewriteUrl?: URL) {
  // Read country from Vercel geo header
  const country = request.headers.get('x-vercel-ip-country');

  // Determine if user needs consent (default to true if unknown)
  const requiresConsent = !country || GDPR_COUNTRIES.includes(country);

  // Create response with geo cookie
  const response = rewriteUrl ? NextResponse.rewrite(rewriteUrl) : NextResponse.next();

  // Set session-only cookie (no explicit expiration = session cookie)
  response.cookies.set('vt_geo_requires_consent', String(requiresConsent), {
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    // No 'expires' = session cookie (deleted when browser closes)
    // httpOnly: false (default) - client needs to read this
  });

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'],
};
