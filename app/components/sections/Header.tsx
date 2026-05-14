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
      className={`fixed left-0 right-0 z-50 border-b border-editorial-line bg-editorial-bg/95 backdrop-blur-sm transition duration-200 ${
        isScrolled ? "py-2 shadow-sm" : "py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 max-md:px-5">
        <div className="flex items-center gap-2.5">
          <Link href="/" className="flex items-center">
            <span className="text-sm font-semibold tracking-tight text-editorial-ink">
              VoiceTypr
            </span>
          </Link>
          <a
            href="https://ideaplexa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-editorial-ink-3 sm:inline-block"
            data-umami-event="header-parent-company-click"
          >
            by Ideaplexa
          </a>
        </div>

        <nav className="hidden gap-7 text-sm text-editorial-ink-2 md:flex">
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

        <div className="flex items-center">
          <Link
            href="/download"
            className="rounded-md border border-editorial-line bg-white px-4 py-2 text-sm font-medium text-editorial-ink shadow-sm transition-colors hover:bg-editorial-surface-2"
            data-umami-event="header-download-click"
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}
