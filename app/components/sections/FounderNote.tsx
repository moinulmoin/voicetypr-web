"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { downloadURL } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function FounderNote() {
  return (
    <section className="relative py-16" id="founder">
      <div className="max-w-3xl mx-auto px-4">
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">A note from the founder</h3>

            <p className="text-muted-foreground leading-relaxed">
              Hey, I'm Moinul. I built VoiceTypr because I was tired of paying $XX/month for basic
              voice typing. As a solo founder and engineer, I type 12+ hours a day - prompts to ChatGPT, Claude, Cursor, Perplexity, and more. My wrists hurt, and every voice typing tool was either an expensive subscription or ancient software.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We just launched. You're one of the first users, which means you get the lowest price
              it'll ever be and your feedback shapes how I build next.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Try the 3-day free trial. If it saves you time, get it for $19 and own it forever. No
              subscriptions, no upsells.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div>
                <span className="mr-1">—</span>
                <a
                  href="https://twitter.com/immoinulmoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  <span className="font-medium">Moinul</span>
                  (@immoinulmoin)
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA after founder note */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Join the first 100 users shaping the future of voice typing
          </p>
          <Button size="lg" onClick={() => (window.location.href = downloadURL)} className="group">
            Get started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
