"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = videoContainerRef.current;
    if (!node || shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 lg:pt-28">
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-600/20 bg-gradient-to-r from-purple-600/10 to-pink-600/10 px-4 py-2">
            <span className="text-sm font-medium text-muted-foreground">
              ⚡ We are on ProductHunt
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Write thoughts
            </span>
            <span className="block bg-gradient-to-r from-foreground/70 via-foreground to-foreground bg-clip-text text-transparent">
              faster and private
            </span>
          </h1>
          <p className="text-balance text-xl text-muted-foreground">
            VoiceTypr is the offline AI voice to text tool for founders and
            builders who live inside ChatGPT, Claude, Cursor, and every writing
            surface.
          </p>
          <p className="mt-4 text-lg font-semibold text-primary">
            Pay once. Use forever. No subscription.
          </p>

          {/* Badges row removed per request */}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" data-umami-event="hero-start-trial-click">
              <Link href="/download">Start free 3-day trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-umami-event="hero-buy-click"
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Buy lifetime license
            </Button>
          </div>

          <div className="mt-12" ref={videoContainerRef}>
            <div className="relative mx-auto max-w-4xl rounded-2xl border border-border/50 bg-card/50 p-2 backdrop-blur-sm">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                {shouldLoadVideo ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="VoiceTypr demo clip"
                  >
                    <source
                      src="https://assets.voicetypr.com/voicetypr-ph-2.mp4#t=0,20"
                      type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"
                    />
                  </video>
                ) : (
                  <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                    <p className="text-base font-semibold text-foreground">
                      See VoiceTypr in action
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Preview loads on scroll to keep the page fast.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Want the full walkthrough?{" "}
              <a
                href="https://youtu.be/L_yU879QbE4"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                watch the full demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
