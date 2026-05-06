"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#features", label: "Features", section: "features" },
  { href: "/#how-it-works", label: "How it works", section: "how-it-works" },
  { href: "/use-cases", label: "Use cases", section: "use-cases" },
  { href: "/#pricing", label: "Pricing", section: "pricing" },
  { href: "/#faq", label: "FAQ", section: "faq" },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 border-b border-editorial-line bg-editorial-bg/85 backdrop-blur-md transition-[padding] duration-200 ${
        isScrolled ? "py-2.5" : "py-[22px]"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-10 max-md:px-5">
        {/* Left: Logo + Ideaplexa */}
        <div className="flex items-center gap-2.5">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="font-serif text-[22px] tracking-[-0.01em] text-editorial-ink">
              VoiceTypr
            </span>
          </Link>
          <a
            href="https://ideaplexa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-mono text-[11px] tracking-[0.08em] text-editorial-ink-3 sm:inline-block"
            data-umami-event="header-parent-company-click"
          >
            by Ideaplexa
          </a>
        </div>

        {/* Center: Nav */}
        <nav className="hidden gap-8 text-sm text-editorial-ink-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.section}
              href={link.href}
              className="transition-colors hover:text-editorial-ink"
              data-umami-event="nav-click"
              data-umami-event-section={link.section}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Try free */}
        <div className="flex items-center">
          <Link
            href="/download"
            className="rounded-lg bg-editorial-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black"
            data-umami-event="header-download-click"
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}
