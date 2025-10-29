// src/app/checkout/route.ts
import { Checkout } from "@polar-sh/nextjs";
import { siteUrl } from "@/lib/utils";

export const GET = Checkout({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  successUrl: siteUrl+"?checkoutId={CHECKOUT_ID}",
  server: process.env.NODE_ENV !== "production" ? "sandbox" : "production", // Use this option if you're using the sandbox environment - else use 'production' or omit the parameter
});