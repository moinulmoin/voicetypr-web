import { NextRequest } from 'next/server';
import { Checkout } from "@polar-sh/nextjs";
import { siteUrl } from "@/lib/utils";
import { checkoutIpLimiter, createRateLimitResponse } from '@/lib/rate-limit';
import { getClientIp } from '@/lib/get-client-ip';

const checkoutHandler = Checkout({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  successUrl: siteUrl+"?checkoutId={CHECKOUT_ID}",
  server: process.env.NODE_ENV !== "production" ? "sandbox" : "production",
});

export async function GET(request: NextRequest) {
  const ip = getClientIp(request);
  const { success } = await checkoutIpLimiter.limit(ip);
  if (!success) return createRateLimitResponse();
  return checkoutHandler(request);
}
