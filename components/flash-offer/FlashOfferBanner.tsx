"use client";

import { useFlashOfferContext } from "./FlashOfferContext";
import { FLASH_DISCOUNT_RATE } from "@/lib/pricing";
import { Clock, X, Zap } from "lucide-react";

export default function FlashOfferBanner() {
  const { isActive, formattedTime, dismissBanner, isBannerDismissed } =
    useFlashOfferContext();

  if (!isActive || isBannerDismissed) return null;

  const pct = Math.round(FLASH_DISCOUNT_RATE * 100);

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 w-[92vw] max-w-lg animate-in slide-in-from-bottom-8 fade-in duration-500">
      <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-background/95 shadow-2xl shadow-purple-500/10 backdrop-blur-md">
        {/* Gradient accent bar */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600" />

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
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <p className="text-sm font-semibold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Special offer unlocked!
              </span>
            </p>
          </div>

          {/* Body */}
          <p className="text-sm text-muted-foreground mb-3">
            We&apos;ve activated a{" "}
            <span className="font-bold text-foreground">{pct}% discount</span>{" "}
            on all plans just for you. Grab it before it expires!
          </p>

          {/* Countdown */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-lg border border-purple-500/20 bg-purple-500/5 px-3 py-1.5">
              <Clock className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              <span className="font-mono text-sm font-semibold tabular-nums text-purple-700 dark:text-purple-300">
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
