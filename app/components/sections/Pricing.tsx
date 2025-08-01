"use client";

import WindowsWaitlist from "@/app/components/WindowsWaitlist";
import { useCountdownOffer } from "@/app/hooks/useCountdownOffer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { downloadURL, siteUrl } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    description: "Try it for free",
    features: [
      "Full app access",
      "3 days unlimited usage",
      "No credit card required",
    ],
    cta: "Try for free",
    popular: false,
    originalPrice: null,
    discount: null,
    couponCode: null,
    onClick: () => {},
  },
  {
    name: "Pro",
    price: "$19",
    description: "Perfect for individual use",
    features: ["1 device", "All features", "Lifetime support"],
    cta: "Get Pro",
    popular: true,
    originalPrice: "$49",
    discount: "61% OFF",
    couponCode: "EARLY61",
    savingsAmount: "$30",
    onClick: () => {
      window.location.href =
        "/api/v1/checkout?products=" +
        process.env.NEXT_PUBLIC_PRO_PRODUCT_ID +
        "&discountId=" +
        process.env.NEXT_PUBLIC_PRO_COUPON_CODE;
    },
  },
  {
    name: "Plus",
    price: "$29",
    description: "Great for multi-device users",
    features: ["2 devices", "All features", "Lifetime support"],
    cta: "Get Plus",
    popular: false,
    originalPrice: "$99",
    discount: "71% OFF",
    couponCode: "LAUNCH71",
    savingsAmount: "$70",
    onClick: () => {
      window.location.href =
        siteUrl +
        "/api/v1/checkout?products=" +
        process.env.NEXT_PUBLIC_PLUS_PRODUCT_ID +
        "&discountId=" +
        process.env.NEXT_PUBLIC_PLUS_COUPON_CODE;
    },
  },
  {
    name: "Max",
    price: "$69",
    description: "Best for teams & power users",
    features: ["4 devices", "All features", "Lifetime support"],
    cta: "Get Max",
    popular: false,
    originalPrice: "$199",
    discount: "65% OFF",
    couponCode: "MAX65",
    savingsAmount: "$130",
    onClick: () => {
      window.location.href =
        siteUrl +
        "/api/v1/checkout?products=" +
        process.env.NEXT_PUBLIC_MAX_PRODUCT_ID +
        "&discountId=" +
        process.env.NEXT_PUBLIC_MAX_COUPON_CODE;
    },
  },
];

export default function Pricing() {
  // Use the countdown hook
  const { timeLeft, offerProgress } = useCountdownOffer(6);

  return (
    <section className="relative py-24" id="pricing">
      {/* Section intro */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-4">
          One-time purchase. Lifetime access.
        </h2>
        <p className="text-muted-foreground mb-2">
          No subscriptions. No hidden fees.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Replaces $15/month or $140/year transcription tools
        </p>

        {/* Urgency indicators - time-based */}
        <div className="max-w-sm mx-auto px-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Limited launch offer</span>
            <span className="font-medium text-amber-600">{timeLeft}</span>
          </div>
          <Progress
            value={offerProgress}
            className="h-1.5 [&>div]:bg-amber-600"
          />
        </div>
      </div>

      {/* Pricing cards */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              className={`bg-card/50 backdrop-blur-sm rounded-3xl transition-all duration-300 hover:scale-[1.02] shadow-none ${
                plan.popular
                  ? "border-primary/50 scale-[1.03] ring-2 ring-primary/20"
                  : "border-border/50 hover:border-border/70"
              }`}
            >
              {/* Discount badge */}
              {plan.discount && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-primary rounded-full px-3 py-1">
                  {plan.discount}
                </Badge>
              )}

              <CardHeader className="text-center pb-1 px-6 pt-6">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>

                {/* Pricing with discount */}
                <div className="mt-3">
                  <div className="flex items-baseline justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-center mt-1">
                      <span className="text-sm text-green-500 font-medium">
                        Save {plan.savingsAmount}
                      </span>
                    </div>
                  )}
                  {/* Coupon code display */}
                  {plan.couponCode && (
                    <div className="mt-2 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1 inline-flex items-center gap-2">
                      <span className="text-xs text-green-600">✓</span>
                      <code className="text-xs font-mono text-green-700 font-bold">
                        {plan.couponCode}
                      </code>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="px-6 py-3">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-6 pb-5 pt-2">
                <Button
                  className={`w-full group ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-card hover:bg-muted"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={
                    i === 0
                      ? () => window.open(downloadURL, "_blank")
                      : plan.onClick
                  }
                  data-umami-event={
                    i === 0
                      ? "pricing-trial-click"
                      : plan.name === "Pro"
                        ? "pricing-pro-click"
                        : "pricing-max-click"
                  }
                  data-umami-event-plan={plan.name.toLowerCase()}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Secure payment • 14 day money back guarantee
          </p>
        </div>

        {/* Windows Waitlist */}
        <WindowsWaitlist />
      </div>
    </section>
  );
}
