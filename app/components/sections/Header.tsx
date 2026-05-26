"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#features", label: "Features", section: "features" },
  { href: "/#how-it-works", label: "How it works", section: "how-it-works" },
  { href: "/#pricing", label: "Pricing", section: "pricing" },
  { href: "/#faq", label: "FAQ", section: "faq" },
] as const;


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <header data-markdown-skip className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="px-4 pt-4 md:px-6">
        <div
          className={`mx-auto flex items-center justify-between gap-6 transition-all duration-200 ${
            isScrolled
              ? "pointer-events-auto max-w-[1088px] rounded-2xl border border-editorial-line bg-editorial-bg/96 px-5 py-3 shadow-sm backdrop-blur-sm"
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

            <Link
              href="/use-cases"
              className="transition-colors hover:text-editorial-ink"
              data-umami-event="nav-use-cases-click"
            >
              Use cases
            </Link>

            <Link
              href="/tools"
              className="transition-colors hover:text-editorial-ink"
              data-umami-event="nav-free-tools-click"
            >
              Free tools
            </Link>

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
              Download free trial
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
