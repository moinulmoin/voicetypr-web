"use client";

import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 lg:pt-28">

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div>
          {/* Main Heading with VoiceTypr's gradient style */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              Type with your voice
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground to-foreground">
              in any app
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            VoiceTypr is an AI powered voice to text dictation tool for macOS
            and Windows. Open-source alternative to Wispr Flow, SuperWhisper.
          </p>

          {/* Download CTA Button */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <Button
              size="lg"
              className="group px-8"
              onClick={() => window.open("#download", "_blank")}
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Download Now
            </Button>

            {/* Platform badges */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mt-2">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                macOS (13+)
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg"
                  height="88"
                  width="88"
                >
                  <path
                    d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z"
                    fill="currentColor"
                  />
                </svg>
                Windows (10+)
              </span>
            </div>
          </div>

          {/* Video Demo Placeholder */}
          <div className="mb-12">
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 max-w-3xl mx-auto">
              <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Video placeholder background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />

                {/* Play button overlay */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/30 transition-all cursor-pointer">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-foreground mb-1">
                      See VoiceTypr in Action
                    </p>
                    <p className="text-muted-foreground">
                      Watch how voice-to-text works seamlessly in any app
                    </p>
                  </div>
                </div>

                {/* Video placeholder grid pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
