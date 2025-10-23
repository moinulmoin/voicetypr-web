"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useRef, useState } from "react";

export default function Demo() {
  const [shouldShowVideo, setShouldShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setShouldShowVideo(true);
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => undefined);
      }
    });
  };

  return (
    <section id="demo" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Watch the full product demo</h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          A 2-minute walkthrough showing the macOS app, hotkey workflow, formatting modes, and audio
          upload—no fluff.
        </p>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card/60 p-3 backdrop-blur">
          <div className="relative aspect-video overflow-hidden rounded-[18px] bg-gradient-to-br from-primary/10 to-primary/5">
            {shouldShowVideo ? (
              <video
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                poster="/og-image.png"
                className="absolute inset-0 h-full w-full rounded-[18px] object-contain"
                aria-label="VoiceTypr full demo video"
              >
                <source
                  src="https://assets.voicetypr.com/voicetypr-better-voice.mp4"
                  type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"
                />
              </video>
            ) : (
              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
                <p className="text-lg font-semibold text-foreground">See the full workflow</p>
                <p className="max-w-md text-sm text-muted-foreground">
                  We only load the full-resolution demo when you ask for it.
                </p>
                <Button
                  size="lg"
                  className="group"
                  onClick={handlePlay}
                  data-umami-event="demo-play-click"
                >
                  <PlayCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-105" />
                  Watch full demo (2:27)
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
