import { NextRequest } from 'next/server';
import { Checkout } from "@polar-sh/nextjs";
import { siteUrl } from "@/lib/utils";

const checkoutHandler = Checkout({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  successUrl: siteUrl+"?checkoutId={CHECKOUT_ID}",
  server: process.env.NODE_ENV !== "production" ? "sandbox" : "production",
});

export async function GET(request: NextRequest) {
  return checkoutHandler(request);
}
