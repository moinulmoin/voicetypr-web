"use client";

import { useFlashOfferContext } from "./FlashOfferContext";
import { FLASH_DISCOUNT_PCT } from "@/lib/pricing";
import { Clock, X, Zap } from "lucide-react";

export default function FlashOfferBanner() {
  const { isActive, formattedTime, dismissBanner, isBannerDismissed } =
    useFlashOfferContext();

  if (!isActive || isBannerDismissed) return null;

  return (
    <div className="fixed bottom-6 left-4 z-50 w-[80vw] max-w-sm animate-in slide-in-from-bottom-8 fade-in duration-500">
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/95 shadow-xl backdrop-blur-md">
        <div className="px-5 pt-5 pb-4">
          {/* Close button */}
          <button
            onClick={dismissBanner}
            className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Dismiss offer"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Heading */}
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-foreground" />
            <p className="text-sm font-semibold">
              Special offer unlocked!
            </p>
          </div>

          {/* Body */}
          <p className="text-sm text-muted-foreground mb-3">
            A limited-time{" "}
            <span className="font-bold text-foreground">{FLASH_DISCOUNT_PCT}% discount</span>{" "}
            is now active. Grab it before it expires!
          </p>

          {/* Countdown */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/50 px-3 py-1.5">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-mono text-sm font-semibold tabular-nums">
                {formattedTime}
              </span>
            </div>
            <a
              href="#pricing"
              onClick={dismissBanner}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              View plans
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
