"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useDetectedOs, downloadHrefForOs } from "@/lib/use-os";
import { Bi } from "@/app/components/landing-v2/brand-icons";
import { Brandmark } from "@/components/marketing/brandmark";

const NAV = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Use cases", href: "/use-cases" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const os = useDetectedOs();

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
        scrolled ? "bg-background/85 backdrop-blur" : "bg-transparent",
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
              <Link key={l.label} href={l.href} className="transition-colors hover:text-foreground" data-track="nav-click">
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href={downloadHrefForOs(os)}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            data-track="nav-download-click"
          >
            Download
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
