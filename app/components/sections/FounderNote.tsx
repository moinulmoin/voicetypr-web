"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

export default function FounderNote() {
  return (
    <section className="relative py-24" id="founder">
      <div className="mx-auto max-w-3xl px-4">
        <Card className="rounded-2xl border-border/50 bg-card/50 p-8 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Quote
                className="h-6 w-6 flex-shrink-0 text-primary"
                aria-hidden
              />
              <h3 className="text-lg font-semibold text-foreground">
                Privacy first. VoiceTypr runs locally.
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              "I built VoiceTypr because paying $15/month for basic dictation
              didn’t feel right."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I type for 12+ hours a day. Most tools locked me into a
              subscription or felt like legacy software. VoiceTypr is fast,
              offline, and 100% private—your voice never leaves your computer.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">— Moinul Moin</span>
              <span>•</span>
              <a
                href="https://twitter.com/immoinulmoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @immoinulmoin
              </a>
              <span>•</span>
              <a
                href="https://ideaplexa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                data-umami-event="founder-ideaplexa-click"
              >
                Founder @Ideaplexa
              </a>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            asChild
            className="group"
            data-umami-event="founder-note-cta-click"
          >
            <Link href="/download">
              Start 3-day trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
