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
              offline, and processes your voice fully locally.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Try it free for 3 days and see if it actually saves you time.
              Spoiler: it does!
            </p>
            <div className="mt-2 flex items-center gap-3 text-left">
              <img
                src="https://github.com/moinulmoin.png"
                alt="Moinul Moin"
                className="h-10 w-10 rounded-full border border-border/50"
                loading="lazy"
                decoding="async"
              />
              <div className="leading-tight">
                <a
                  href="https://twitter.com/immoinulmoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:underline"
                >
                  Moinul Moin
                </a>
                <div className="text-xs text-muted-foreground">
                  Founder of VoiceTypr •{" "}
                  <a
                    href="https://ideaplexa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    data-umami-event="founder-ideaplexa-click"
                  >
                    @Ideaplexa
                  </a>
                </div>
              </div>
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
