"use client";


import { BASE_PRICES, formatPrice, type PlanKey } from "@/lib/pricing";
import { ArrowRight } from "lucide-react";

interface PricingCardsProps {
  affonsoReferral: string;
  referrer: string;
  /** Event prefix for analytics (e.g., "pricing" or "download-page") */
  eventPrefix?: string;
}

interface Plan {
  key: PlanKey;
  name: string;
  devices: string;
  tagline: string;
  productId: string | undefined;
  highlight?: boolean;
  ribbon?: string;
  features: string[];
}

const plans: Plan[] = [
  {
    key: "pro",
    name: "Pro",
    devices: "1 device",
    tagline: "One machine. Lifetime access. For the solo setup.",
    productId: process.env.NEXT_PUBLIC_PRO_PRODUCT_ID,
    features: [
      "1 device activation",
      "All Whisper models · 99+ languages",
      "Every formatting mode",
      "Lifetime free updates",
      "macOS 13+ & Windows 10+",
      "7-day money-back guarantee",
    ],
  },
  {
    key: "plus",
    name: "Plus",
    devices: "Up to 2 devices",
    tagline: "Laptop and desktop on one license. For people with two setups.",
    productId: process.env.NEXT_PUBLIC_PLUS_PRODUCT_ID,
    highlight: true,
    ribbon: "Most chosen",
    features: [
      "2 device activations",
      "Everything in Pro",
      "Priority email support",
      "Lifetime free updates",
      "macOS 13+ & Windows 10+",
      "7-day money-back guarantee",
    ],
  },
  {
    key: "max",
    name: "Max",
    devices: "Up to 4 devices",
    tagline: "Work, home, travel, spare. For the full toolkit.",
    productId: process.env.NEXT_PUBLIC_MAX_PRODUCT_ID,
    features: [
      "4 device activations",
      "Everything in Plus",
      "Early access to new features",
      "Lifetime free updates",
      "macOS 13+ & Windows 10+",
      "7-day money-back guarantee",
    ],
  },
];

export default function PricingCards({
  affonsoReferral,
  referrer,
  eventPrefix = "pricing",
}: PricingCardsProps) {
  const handleCheckout = (productId: string | undefined) => {
    if (!productId) return;

    const metadata: Record<string, string> = {};

    if (typeof window !== "undefined" && window.openpanel?.getDeviceId) {
      const deviceId = window.openpanel.getDeviceId();
      if (deviceId) {
        metadata.deviceId = deviceId;
      }
    }

    if (affonsoReferral) metadata.affonso_referral = affonsoReferral;
    if (referrer) metadata.referrer = referrer;

    const metadataParam =
      Object.keys(metadata).length > 0
        ? `&metadata=${encodeURIComponent(JSON.stringify(metadata))}`
        : "";

    window.location.assign(
      `/api/v1/checkout?products=${productId}${metadataParam}`,
    );
  };

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {plans.map((plan) => {
        const isHL = Boolean(plan.highlight);
        return (
          <div
            key={plan.key}
            className={`relative flex flex-col gap-5 rounded-2xl border p-7 transition-transform ${
              isHL
                ? "-translate-y-1 border-editorial-ink bg-editorial-ink text-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)]"
                : "border-editorial-line bg-editorial-surface"
            }`}
          >
            {isHL && plan.ribbon ? (
              <div className="absolute -top-3 left-6 rounded-md bg-editorial-accent px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white">
                {plan.ribbon}
              </div>
            ) : null}

            <div
              className={`font-mono text-[11px] font-medium uppercase tracking-[0.14em] ${
                isHL ? "text-white/70" : "text-editorial-ink-3"
              }`}
            >
              {plan.name} · {plan.devices}
            </div>

            <div>
              <div className="font-serif text-6xl leading-none">
                {formatPrice(BASE_PRICES[plan.key])}
                <small
                  className={`ml-1 font-sans text-[15px] font-normal ${
                    isHL ? "text-white/60" : "text-editorial-ink-3"
                  }`}
                >
                  /once
                </small>
              </div>
              <p
                className={`mt-3 text-sm leading-snug ${
                  isHL ? "text-white/75" : "text-editorial-ink-2"
                }`}
              >
                {plan.tagline}
              </p>
            </div>

            <ul
              className={`flex flex-col text-sm leading-relaxed ${
                isHL ? "text-white/85" : "text-editorial-ink-2"
              }`}
            >
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2.5 border-t py-2.5 first:border-t-0 first:pt-0 ${
                    isHL ? "border-white/12" : "border-editorial-line"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mt-2 h-[2px] w-3 flex-shrink-0 ${
                      isHL ? "bg-white/40" : "bg-editorial-accent"
                    }`}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleCheckout(plan.productId)}
              data-umami-event={`${eventPrefix}-plan-click`}
              data-umami-event-plan={plan.key}
              data-track={`${eventPrefix}-plan-click`}
              data-track-plan={plan.key}
              className={`group mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-[1px] active:translate-y-0 ${
                isHL
                  ? "bg-editorial-accent text-white hover:brightness-110"
                  : "bg-editorial-ink text-white hover:bg-black"
              }`}
            >
              Get {plan.name}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
