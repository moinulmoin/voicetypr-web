"use client";

import PricingCards from "@/components/PricingCards";
import { useFlashOfferContext } from "@/components/flash-offer/FlashOfferContext";
import { FLASH_DISCOUNT_PCT } from "@/lib/pricing";
import { Clock } from "lucide-react";

interface PricingProps {
  affonsoReferral: string;
  referrer: string;
}

export default function Pricing({ affonsoReferral, referrer }: PricingProps) {
  const { isActive, formattedTime, pricingRef } = useFlashOfferContext();

  return (
    <section className="relative py-24" id="pricing" ref={pricingRef}>
      {/* Section intro */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-4">
          Own it forever. No monthly fees.
        </h2>
        <p className="text-muted-foreground mb-2">
          One-time purchase, lifetime access
        </p>
        {isActive && (
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-sm">
            <Clock className="h-3.5 w-3.5" />
            <span>
              {FLASH_DISCOUNT_PCT}% off — expires in{" "}
              <span className="font-mono font-semibold tabular-nums">
                {formattedTime}
              </span>
            </span>
          </div>
        )}
      </div>

      {/* Pricing cards */}
      <div className="max-w-5xl mx-auto px-4">
        <PricingCards affonsoReferral={affonsoReferral} referrer={referrer} eventPrefix="pricing" />
      </div>
    </section>
  );
}
