"use client";

import { GitHub, XformerlyTwitter } from "@/components/icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-5xl mx-auto px-4 py-24">
        {/* Main content */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">VoiceTypr</h3>
          <p className="text-muted-foreground mb-4 max-w-md text-balance">
            Ship 3x faster with your voice. Voice to text tool for busy founders & AI super users.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Available for macOS (13+) and Windows (10+)
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6 mb-12">
            <a
              href="https://github.com/moinulmoin/voicetypr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
              data-umami-event="social-link-click"
              data-umami-event-platform="github"
            >
              <GitHub className="w-5 h-5 fill-current" />
            </a>
            <a
              href="https://x.com/voicetypr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
              data-umami-event="social-link-click"
              data-umami-event-platform="twitter"
            >
              <XformerlyTwitter className="w-5 h-5 fill-current" />
            </a>
            <a
              href="mailto:support@voicetypr.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Support"
              data-umami-event="social-link-click"
              data-umami-event-platform="email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            {/* <a href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors" data-umami-event="footer-link-click" data-umami-event-page="changelog">
              Changelog
            </a> */}
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors" data-umami-event="footer-link-click" data-umami-event-page="privacy">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors" data-umami-event="footer-link-click" data-umami-event-page="terms">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}