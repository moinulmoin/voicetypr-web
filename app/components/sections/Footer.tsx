"use client";

import { GitHub, XformerlyTwitter } from "@/components/icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/50">
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Main content */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">VoiceTypr</h3>
          <p className="text-muted-foreground mb-4 max-w-md text-balance">
            Offline AI voice to text app for founders and builders.
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
            <Link
              href="/download"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="footer-link-click"
              data-umami-event-page="download"
            >
              Download
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="footer-link-click"
              data-umami-event-page="cookies"
            >
              Cookies
            </Link>
            {/* <a href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors" data-track="footer-link-click" data-track-page="changelog">
              Changelog
            </a> */}
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="footer-link-click"
              data-umami-event-page="privacy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="footer-link-click"
              data-umami-event-page="terms"
            >
              Terms & Conditions
            </Link>
            <button
              type="button"
              onClick={() => (window as any).__openCookiePreferences?.()}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="footer-link-click"
              data-umami-event-page="manage-cookies"
            >
              Manage cookies
            </button>
            <a
              href="mailto:support@voicetypr.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="footer-link-click"
              data-umami-event-page="support"
            >
              Support
            </a>
            <a
              href="https://voicetypr.affonso.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-umami-event="footer-link-click"
              data-umami-event-page="referral"
            >
              Affiliates
            </a>
          </div>
          <div className="mt-8 text-xs text-muted-foreground">
            © {year} VoiceTypr. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
