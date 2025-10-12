"use client";

import logo from "@/app/assets/transparent-logo.png";
import { GitHub } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <header className={cn("fixed left-0 right-0 z-50", isScrolled && "top-2")}>
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0",
          isScrolled ? "" : "py-2",
        )}
      >
        <div className="flex items-center justify-between">
          {/* Left: VoiceTypr Brand */}
          <div className="flex items-center gap-3">
            <Image src={logo} alt="VoiceTypr logo - AI voice to text software" width={50} height={50} className="dark:invert-0 invert" />
            <div className="hidden sm:flex items-center">
              <a
                href="https://ideaplexa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                data-umami-event="header-parent-company-click"
              >
                by Ideaplexa
              </a>
            </div>
          </div>

          {/* Middle: Navigation Links */}
          <nav
            className={cn(
              "hidden md:flex items-center gap-8",
              isScrolled
                ? "bg-muted/30 backdrop-blur-md px-2 py-2 rounded-lg border border-border/50"
                : "",
            )}
          >
            <a
              href="/#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="nav-click"
              data-umami-event-section="features"
            >
              Features
            </a>
            <a
              href="/#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="nav-click"
              data-umami-event-section="testimonials"
            >
              Testimonials
            </a>
            <a
              href="/#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="nav-click"
              data-umami-event-section="pricing"
            >
              Pricing
            </a>
            <a
              href="/#faq"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="nav-click"
              data-umami-event-section="faq"
            >
              FAQ
            </a>
            <Link
              href="/download"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="nav-click"
              data-umami-event-section="download"
            >
              Download
            </Link>
          </nav>

          {/* Right: GitHub Star + Buy Now Button */}
          <div className="flex items-center gap-3">
            {/* GitHub Star Button */}
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "items-center gap-2",
                isScrolled ? "backdrop-blur-md" : "",
              )}
              onClick={() =>
                window.open("https://github.com/moinulmoin/voicetypr", "_blank")
              }
              data-umami-event="github-star-click"
            >
              <GitHub className="w-4 h-4 fill-current" />
              <span>Star us</span>
            </Button>

            {/* Get Lifetime License Button */}
            <Button
              size="sm"
              data-umami-event="header-try-for-free-click"
              asChild
            >
              <Link href="/download">
              Try for free
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
