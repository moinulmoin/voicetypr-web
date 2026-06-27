"use client";

import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useDetectedOs, downloadHrefForOs } from "@/lib/use-os";
import { Bi } from "@/app/components/landing-v2/brand-icons";
import { Brandmark } from "@/components/marketing/brandmark";
import { useTranslations } from "next-intl";

const NAV = [
  { key: "features", href: "/#features" },
  { key: "pricing", href: "/#pricing" },
  { key: "faq", href: "/#faq" },
  { key: "useCases", href: "/use-cases" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const os = useDetectedOs();
  const t = useTranslations("Nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
          <Brandmark className="h-6 w-6 shrink-0 text-sage" />
          Voicetypr
        </Link>
        <nav className="flex items-center gap-7">
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {NAV.map((l) => (
              <Link key={l.key} href={l.href} className="transition-colors hover:text-foreground" data-track="nav-click">
                {t(l.key)}
              </Link>
            ))}
          </div>
          <Link
            href={downloadHrefForOs(os)}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            data-track="nav-download-click"
          >
            {t("download")}
            {os === "windows" ? (
              <Bi name="windows" className="text-sm" />
            ) : os === "mac" ? (
              <Bi name="apple" className="text-sm" />
            ) : null}
          </Link>
        </nav>
      </div>
    </header>
  );
}
