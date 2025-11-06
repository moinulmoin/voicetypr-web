"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BASE_PRICES,
  COUPON_ACTIVE,
  DISCOUNTED_PRICES,
  formatPrice,
  type PlanKey,
} from "@/lib/pricing";
import { ArrowRight, Check } from "lucide-react";

interface PricingCardsProps {
  affonsoReferral: string;
  referrer: string;
  /** Event prefix for analytics (e.g., "pricing" or "download-page") */
  eventPrefix?: string;
}

const plans: Array<{
  key: PlanKey;
  name: string;
  devices: string;
  productId: string | undefined;
}> = [
  {
    key: "pro",
    name: "Pro",
    devices: "1 device",
    productId: process.env.NEXT_PUBLIC_PRO_PRODUCT_ID,
  },
  {
    key: "plus",
    name: "Plus",
    devices: "Up to 2 devices",
    productId: process.env.NEXT_PUBLIC_PLUS_PRODUCT_ID,
  },
  {
    key: "max",
    name: "Max",
    devices: "Up to 4 devices",
    productId: process.env.NEXT_PUBLIC_MAX_PRODUCT_ID,
  },
];

export default function PricingCards({
  affonsoReferral,
  referrer,
  eventPrefix = "pricing",
}: PricingCardsProps) {
  const handleCheckout = (productId: string | undefined) => {
    const metadata = {
      affonso_referral: affonsoReferral,
      referrer: referrer,
    };
    const discount = process.env.NEXT_PUBLIC_COUPON_CODE
      ? `&discountId=${process.env.NEXT_PUBLIC_COUPON_CODE}`
      : "";
    window.location.href =
      "/api/v1/checkout?products=" +
      productId +
      discount +
      `&metadata=${encodeURIComponent(JSON.stringify(metadata))}`;
  };

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((plan) => {
          const isPopular = plan.key === "plus";
          const basePrice = BASE_PRICES[plan.key];
          const discountedPrice = DISCOUNTED_PRICES?.[plan.key];
          const showDiscount =
            COUPON_ACTIVE && discountedPrice && discountedPrice < basePrice;

          return (
            <Card
              key={plan.key}
              className={`bg-card/50 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-none relative ${
                isPopular
                  ? "border-primary/50 scale-[1.03] ring-2 ring-primary/20"
                  : "border-border/50 hover:border-border/70"
              }`}
            >
              {/* Most popular badge */}
              {isPopular && (
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
                <div className="mt-3">
                  <div className="flex items-baseline justify-center gap-2">
                    {showDiscount ? (
                      <>
                        <span className="text-xl text-muted-foreground line-through">
                          {formatPrice(basePrice)}
                        </span>
                        <span className="text-4xl font-bold">
                          {formatPrice(discountedPrice)}
                        </span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold">
                        {formatPrice(basePrice)}
                      </span>
                    )}
                  </div>
                  {showDiscount && (
                    <p className="text-xs mt-1 font-semibold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        {`Save ${formatPrice(basePrice - discountedPrice).replace("$", "$$")}`}
                      </span>
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="px-6 py-3">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {plan.devices}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Lifetime access
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      All future updates
                    </span>
                  </li>
                </ul>
              </CardContent>

              <CardFooter className="px-6 pb-5 pt-2">
                <Button
                  className={`w-full group ${
                    isPopular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-card hover:bg-muted"
                  }`}
                  variant={isPopular ? "default" : "outline"}
                  onClick={() => handleCheckout(plan.productId)}
                  data-umami-event={`${eventPrefix}-plan-click`}
                  data-umami-event-plan={plan.key}
                >
                  Get {plan.name}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Secure payment • 14-day money-back guarantee
      </p>
    </>
  );
}
