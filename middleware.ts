import { NextRequest, NextResponse } from 'next/server';

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

export function middleware(request: NextRequest) {
  // Read country from Vercel geo header
  const country = request.headers.get('x-vercel-ip-country');
  
  // Determine if user needs consent (default to true if unknown)
  const requiresConsent = !country || GDPR_COUNTRIES.includes(country);
  
  // Create response with geo cookie
  const response = NextResponse.next();
  
  // Set session-only cookie (no explicit expiration = session cookie)
  response.cookies.set('vt_geo_requires_consent', String(requiresConsent), {
    path: '/',
    sameSite: 'lax',
    // No 'expires' = session cookie (deleted when browser closes)
    // httpOnly: false (default) - client needs to read this
  });
  
  return response;
}

// Run middleware on all routes EXCEPT static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon file)
     * - public files (svg, png, jpg, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
