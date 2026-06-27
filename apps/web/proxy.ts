import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { acceptsMarkdown, isMarkdownEligiblePath } from '@/lib/markdown-negotiation';
import { routing } from '@/i18n/routing';

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

// next-intl locale router (localePrefix: "as-needed" — English stays at root,
// other locales get a /<locale> prefix). Routing only; pages stay prerendered.
const handleI18nRouting = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Markdown content-negotiation for AI clients — bypasses locale routing.
  const wantsMarkdown =
    request.headers.get(BYPASS_HEADER) !== '1' &&
    acceptsMarkdown(request.headers.get('accept')) &&
    isMarkdownEligiblePath(pathname);

  if (wantsMarkdown) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = '/api/markdown';
    rewriteUrl.search = '';
    rewriteUrl.searchParams.set('path', `${pathname}${request.nextUrl.search}`);
    return decorate(request, NextResponse.rewrite(rewriteUrl));
  }

  // 2. Locale routing for real page paths only (skip /api, /r/, and static files).
  if (shouldLocaleRoute(pathname)) {
    return decorate(request, handleI18nRouting(request));
  }

  // 3. Everything else (api, affiliate proxy, sitemap/robots/llms/og files): pass through.
  return decorate(request, NextResponse.next());
}

function shouldLocaleRoute(pathname: string): boolean {
  // Exact-segment checks (so e.g. a future /apiary page isn't skipped).
  if (pathname === '/api' || pathname.startsWith('/api/')) return false;
  if (pathname === '/r' || pathname.startsWith('/r/')) return false;
  // Skip files like /sitemap.xml, /robots.txt, /llms.txt, /pricing.md, og images.
  const lastSegment = pathname.split('/').pop() ?? '';
  return !lastSegment.includes('.');
}

function isNonDefaultLocalePath(pathname: string): boolean {
  return routing.locales.some(
    (l) => l !== routing.defaultLocale && (pathname === `/${l}` || pathname.startsWith(`/${l}/`)),
  );
}

function decorate(request: NextRequest, response: NextResponse) {
  // Non-default-locale pages (/es/...) are not translated yet — their content is
  // still English. Keep them out of search indexes (avoids duplicate-content) until
  // the copy is genuinely localized. One header here covers every /es route.
  if (isNonDefaultLocalePath(request.nextUrl.pathname)) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }

  // Read country from Vercel geo header; default to requiring consent if unknown.
  const country = request.headers.get('x-vercel-ip-country');
  const requiresConsent = !country || GDPR_COUNTRIES.includes(country);

  // Session-only cookie the client reads to decide whether to show consent UI.
  response.cookies.set('vt_geo_requires_consent', String(requiresConsent), {
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
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
