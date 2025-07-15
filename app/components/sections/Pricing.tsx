"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
    discount: null
  },
  {
    name: "Pro",
    price: "$25",
    description: "Perfect for individual use",
    features: [
      "Lifetime access",
      "1 device license",
      "Priority support",
      "Future updates"
    ],
    cta: "Get Lifetime Access",
    popular: true,
    originalPrice: "$60",
    discount: "Most Popular"
  },
  {
    name: "Max",
    price: "$120",
    description: "Best value for multiple devices",
    features: [
      "Lifetime access",
      "5 device licenses",
      "Priority support",
      "Future updates"
    ],
    cta: "Get Max plan",
    popular: false,
    originalPrice: "$250",
    discount: "Most Valuable"
  }
];

export default function Pricing() {
  return (
    <section className="relative py-24" id="pricing">
      {/* Section intro */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-muted-foreground">
          Choose the plan that fits your needs
        </p>
      </div>

      {/* Pricing cards */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`bg-card/50 backdrop-blur-sm rounded-3xl transition-all duration-300 hover:scale-[1.02] shadow-none ${
                plan.popular
                  ? "border-primary/50"
                  : "border-border/50 hover:border-border/70"
              }`}
            >
              {/* Discount badge */}
              {plan.discount && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-red-500 text-white rounded-full px-3 py-1">
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
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Limited time notice */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-sm font-medium text-red-500">
            ⏰ Limited Time Offer - Lifetime licenses at discounted prices
          </p>
          <p className="text-sm text-muted-foreground">
            30-day money-back guarantee • One-time payment • No subscriptions
          </p>
        </div>
      </div>
    </section>
  );
}