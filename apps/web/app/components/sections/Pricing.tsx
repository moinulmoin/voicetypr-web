"use client";

import PricingCards from "@/components/PricingCards";
import { COUPON_ACTIVE } from "@/lib/pricing";
import { useEffect, useState } from "react";

export default function Pricing() {
  const [referral, setReferral] = useState("");

  useEffect(() => {
    const affonso_referral = window?.affonso_referral;
    if (affonso_referral) {
      setReferral(affonso_referral);
    }
  }, []);

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
        {COUPON_ACTIVE && (
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm text-amber-700 dark:text-amber-300">
            <span>🎉 Limited discount activated for you</span>
          </div>
        )}
      </div>

      {/* Pricing cards */}
      <div className="max-w-5xl mx-auto px-4">
        <PricingCards referral={referral} eventPrefix="pricing" />
      </div>
    </section>
  );
}
