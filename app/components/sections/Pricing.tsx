"use client";


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteUrl } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";

const plans = [
  {
    name: "Pro",
    price: "$25",
    originalPrice: "$50",
    description: "",
    features: ["1 device activation", "Lifetime access", "All future updates"],
    cta: "Get Pro",
    popular: false,
    onClick: (metadata: Record<string, any>) => {
      window.location.href =
        "/api/v1/checkout?products=" +
        process.env.NEXT_PUBLIC_PRO_PRODUCT_ID +
        "&discountId=" +
        process.env.NEXT_PUBLIC_PRO_COUPON_CODE +
        `&metadata=${encodeURIComponent(JSON.stringify(metadata))}`;
    },
  },
  {
    name: "Plus",
    price: "$40",
    originalPrice: "$80",
    description: "",
    features: ["2 device activations", "Lifetime access", "All future updates"],
    cta: "Get Plus",
    popular: true,
    onClick: (metadata: Record<string, any>) => {
      window.location.href =
        siteUrl +
        "/api/v1/checkout?products=" +
        process.env.NEXT_PUBLIC_PLUS_PRODUCT_ID +
        "&discountId=" +
        process.env.NEXT_PUBLIC_PLUS_COUPON_CODE +
        `&metadata=${encodeURIComponent(JSON.stringify(metadata))}`;
    },
  },
  {
    name: "Max",
    price: "$70",
    originalPrice: "$140",
    description: "",
    features: ["4 device activations", "Lifetime access", "All future updates"],
    cta: "Get Max",
    popular: false,
    onClick: (metadata: Record<string, any>) => {
      window.location.href =
        siteUrl +
        "/api/v1/checkout?products=" +
        process.env.NEXT_PUBLIC_MAX_PRODUCT_ID +
        "&discountId=" +
        process.env.NEXT_PUBLIC_MAX_COUPON_CODE +
        `&metadata=${encodeURIComponent(JSON.stringify(metadata))}`;
    },
  },
];

export default function Pricing() {
  const [referral, setReferral] = useState("");

  useEffect(() => {
    const affonso_referral = window?.affonso_referral;
    if (affonso_referral) {
      setReferral(affonso_referral);
    }
  }, []);

  const metadata = {
    referral: referral || "none",
  };

  return (
    <section className="relative py-24" id="pricing">
      {/* Section intro */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-4">
          Own it forever. No monthly fees.
        </h2>
        <p className="text-muted-foreground mb-2">
          One-time purchase, lifetime access
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Save $180/year vs subscription alternatives
        </p>

        {/* Real urgency - limited time discount */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-600/20">
          <span className="text-sm font-medium">
            🎉 Save 50% - Early Adopter Pricing (ending soon)
          </span>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              className={`bg-card/50 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-none relative ${
                plan.popular
                  ? "border-primary/50 scale-[1.03] ring-2 ring-primary/20"
                  : "border-border/50 hover:border-border/70"
              }`}
            >
              {/* Most popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-white">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-1 px-6 pt-6">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>

                {/* Pricing */}
                <div className="mt-3">
                  <div className="flex items-baseline justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                  {plan.originalPrice && (
                    <p className="text-xs mt-1 font-semibold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        Save $
                        {parseInt(plan.originalPrice.slice(1)) -
                          parseInt(plan.price.slice(1))}
                      </span>
                    </p>
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
                  onClick={() => plan.onClick(metadata)}
                  data-umami-event={
                    plan.name === "Pro"
                      ? "pricing-pro-click"
                      : plan.name === "Plus"
                      ? "pricing-plus-click"
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
            Secure payment • 7 day money back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
