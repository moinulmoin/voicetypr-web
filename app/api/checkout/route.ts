import { Checkout } from '@polar-sh/nextjs';
import { NextRequest } from 'next/server';
import { polarServer } from '@/lib/polar';
import { siteUrl } from '@/lib/utils';

const checkoutHandler = Checkout({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  successUrl: siteUrl + '?checkout=success',
  includeCheckoutId: false,
  server: polarServer,
});

export async function GET(request: NextRequest) {
  return checkoutHandler(request);
}
