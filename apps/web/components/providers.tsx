"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeHotkey } from "@/components/theme-toggle";

const ThemeProvider = NextThemesProvider as React.ComponentType<
  React.PropsWithChildren<React.ComponentProps<typeof NextThemesProvider>>
>;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <ThemeHotkey />
      {children}
    </ThemeProvider>
  );
}
