"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FlashOfferProvider } from "@/components/flash-offer/FlashOfferContext";
import FlashOfferBanner from "@/components/flash-offer/FlashOfferBanner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <FlashOfferProvider>
        {children}
        <FlashOfferBanner />
      </FlashOfferProvider>
    </NextThemesProvider>
  );
}
