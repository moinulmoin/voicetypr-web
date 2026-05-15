"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/#features", label: "Features", section: "features" },
  { href: "/#how-it-works", label: "How it works", section: "how-it-works" },
  { href: "/#pricing", label: "Pricing", section: "pricing" },
  { href: "/#faq", label: "FAQ", section: "faq" },
] as const;

const useCaseGroups = [
  {
    label: "Accessibility",
    items: [
      { href: "/use-cases/adhd", label: "ADHD" },
      { href: "/use-cases/dyslexia", label: "Dyslexia" },
      { href: "/use-cases/rsi", label: "RSI / wrist pain" },
    ],
  },
  {
    label: "By profession",
    items: [
      { href: "/use-cases/developers", label: "Developers" },
      { href: "/use-cases/writers", label: "Writers" },
      { href: "/use-cases/founders", label: "Founders" },
    ],
  },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const openUseCases = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setUseCasesOpen(true);
  };

  const scheduleCloseUseCases = () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setUseCasesOpen(false);
      closeTimer.current = null;
    }, 120);
  };


  return (
    <header data-markdown-skip className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="px-4 pt-4 md:px-6">
        <div
          className={`mx-auto flex items-center justify-between gap-6 transition-all duration-200 ${
            isScrolled
              ? "pointer-events-auto max-w-5xl rounded-2xl border border-editorial-line bg-editorial-bg/96 px-5 py-3 shadow-sm backdrop-blur-sm"
              : "pointer-events-auto max-w-6xl px-2 py-3"
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image src="/favicon-32x32.png" alt="VoiceTypr logo" width={22} height={22} className="h-[22px] w-[22px] rounded-sm" />
            <span className="text-sm font-semibold tracking-tight text-editorial-ink">
              VoiceTypr
            </span>
            <span className="hidden text-xs text-editorial-ink-3 md:inline">
              by Ideaplexa
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-editorial-ink-2 md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.section}
                href={`/#${link.section}`}
                className="transition-colors hover:text-editorial-ink"
                data-umami-event="nav-click"
                data-umami-event-section={link.section}
              >
                {link.label}
              </a>
            ))}

            <DropdownMenu open={useCasesOpen} onOpenChange={setUseCasesOpen} modal={false}>
              <div onMouseEnter={openUseCases} onMouseLeave={scheduleCloseUseCases}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="rounded-sm border-0 bg-transparent p-0 text-sm text-editorial-ink-2 outline-none transition-colors hover:text-editorial-ink focus-visible:ring-2 focus-visible:ring-editorial-ink/35 focus-visible:ring-offset-2 focus-visible:ring-offset-editorial-bg"
                    data-umami-event="nav-use-cases-open"
                  >
                    Use cases
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  sideOffset={16}
                  className="w-[26rem] rounded-2xl bg-editorial-bg p-3 shadow-sm"
                  onMouseEnter={openUseCases}
                  onMouseLeave={scheduleCloseUseCases}
                >
                  <div className="grid gap-2 md:grid-cols-2">
                    {useCaseGroups.map((group) => (
                      <div key={group.label} className="min-w-0">
                        <DropdownMenuLabel className="px-2 text-[11px] uppercase tracking-widest text-editorial-ink-3">
                          {group.label}
                        </DropdownMenuLabel>
                        {group.items.map((item) => (
                          <DropdownMenuItem
                            key={item.href}
                            asChild
                            className="rounded-xl px-2 py-2.5 text-editorial-ink data-[highlighted]:bg-editorial-surface-2"
                          >
                            <Link href={item.href} className="flex flex-col items-start">
                              <span className="font-medium">{item.label}</span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    ))}
                  </div>
                  <DropdownMenuItem asChild className="mt-2 rounded-xl px-2 py-2.5 text-editorial-ink data-[highlighted]:bg-editorial-surface-2">
                    <Link href="/use-cases" data-umami-event="nav-use-cases-hub-click">
                      See all use cases
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </div>
            </DropdownMenu>

            {navLinks.slice(2).map((link) => (
              <a
                key={link.section}
                href={`/#${link.section}`}
                className="transition-colors hover:text-editorial-ink"
                data-umami-event="nav-click"
                data-umami-event-section={link.section}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <Link
              href="/download"
              className={`rounded-md border text-sm font-medium text-editorial-ink transition-colors hover:bg-editorial-surface-2 ${
                isScrolled
                  ? "border-editorial-line bg-white px-4 py-2 shadow-sm"
                  : "border-editorial-line bg-white px-4 py-2 shadow-sm"
              }`}
              data-umami-event="header-download-click"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
