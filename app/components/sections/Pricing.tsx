"use client";

import WindowsWaitlist from "@/app/components/WindowsWaitlist";
import { useCountdownOffer } from "@/app/hooks/useCountdownOffer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
      "No credit card required"
    ],
    cta: "Try for free",
    popular: false,
    originalPrice: null,
    discount: null,
    onClick: () =>{}
  },
  {
    name: "Pro",
    price: "$20",
    description: "Perfect for individual use",
    features: [
      "Lifetime access",
      "1 device",
      "Priority support",
      "Future updates"
    ],
    cta: "Start writing faster",
    popular: true,
    originalPrice: "$60",
    discount: "Most Popular",
    onClick: () => {
      window.location.href = "/api/v1/checkout?products="+process.env.NEXT_PUBLIC_PRO_PRODUCT_ID;
    }
  },
  {
    name: "Max",
    price: "$100",
    description: "Best value for multiple devices",
    features: [
      "Lifetime access",
      "Up to 5 devices",
      "Priority support",
      "Future updates"
    ],
    cta: "Get Max Plan",
    popular: false,
    originalPrice: "$250",
    discount: "Most Valuable",
    onClick: () => {
      window.location.href = siteUrl+"/api/v1/checkout?products="+process.env.NEXT_PUBLIC_MAX_PRODUCT_ID;
    }
  }
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
          <Progress value={offerProgress} className="h-1.5 [&>div]:bg-amber-600" />
        </div>
      </div>

      {/* Pricing cards */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              className={`bg-card/50 backdrop-blur-sm rounded-3xl transition-all duration-300 hover:scale-[1.02] shadow-none ${
                // On md screens, make the third card span both columns and center it
                i === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-full lg:mx-0' : ''
              } ${
                  plan.popular
                    ? "border-primary/50 scale-[1.03]"
                    : "border-border/50 hover:border-border/70 opacity-[0.85]"
                }`}
              >
                {/* Discount badge */}
                {plan.discount && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-primary rounded-full px-3 py-1">
                    {plan.discount}
                  </Badge>
                )}

                <CardHeader className="text-center pb-2 px-8 pt-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>

                  {/* Pricing with discount */}
                  <div className="mt-3">
                    <div className="flex items-baseline justify-center gap-2">
                      {plan.originalPrice && (
                        <span className="text-xl text-muted-foreground line-through">{plan.originalPrice}</span>
                      )}
                      <span className="text-4xl font-bold">{plan.price}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-center mt-2">
                        <span className="text-sm text-green-500">
                          Save ${parseInt(plan.originalPrice.slice(1)) - parseInt(plan.price.slice(1))}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* <p className="text-muted-foreground text-sm mt-2">{plan.description}</p> */}
                </CardHeader>

                <CardContent className="px-8 py-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="px-8 pb-8">
                  <Button
                    className={`w-full group ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-card hover:bg-muted"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={i === 0 ? () => window.open(downloadURL, "_blank") : plan.onClick}
                    data-umami-event={
                      i === 0 ? "pricing-trial-click" :
                      plan.name === "Pro" ? "pricing-pro-click" :
                      "pricing-max-click"
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