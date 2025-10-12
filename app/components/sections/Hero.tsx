"use client";

import { Button } from "@/components/ui/button";
import { Cpu, DollarSign, Github, Shield } from "lucide-react";
import Link from "next/link";
import SocialProof from "./SocialProof";

const badges = [
  {
    icon: Github,
    label: "Open Source",
    description: "Transparent code"
  },
  {
    icon: Shield,
    label: "100% Private",
    description: "Your device only"
  },
  {
    icon: Cpu,
    label: "Native & Fast",
    description: "Built with Tauri"
  },
  {
    icon: DollarSign,
    label: "One-time Purchase",
    description: "No subscriptions"
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div>
          {/* Launch offer announcement */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-600/20">
            <span className="text-sm font-medium text-muted-foreground">
              ⚡ Early Bird offer ending soon
            </span>
          </div>
          {/* Main Heading with VoiceTypr's gradient style */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/70 block">
              Write 3x faster
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/70 via-foreground to-foreground block">
              with your voice
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto text-balance">
            AI powered offline voice to text tool for busy founders.
          </p>
          <p className="text-lg font-semibold text-primary text-balance">
            Pay once. Use forever. No subscription.
          </p>

          {/* Social Proof */}
          {/* <SocialProof /> */}
          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-2 mt-6">
            <Button asChild>
              <Link href="/download" data-umami-event="hero-download-click">
                Download Free
              </Link>
            </Button>
            <Button
              onClick={() =>
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              }
              data-umami-event="hero-upgrade-click"
              variant="outline"
            >
              Get lifetime license
            </Button>
          </div>
          {/* Video Demo */}
          <div className="mb-12">
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-2 max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 border border-red-500 rounded-lg relative overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="VoiceTypr Demo Video - Shows voice-to-text functionality"
                >
                  <source
                    src="https://assets.voicetypr.com/voicetypr-better-voice.mp4"
                    type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                    <div>
                      <p className="text-lg font-semibold mb-2">Video Demo Unavailable</p>
                      <p className="text-muted-foreground mb-4">
                        Your browser doesn't support video playback. VoiceTypr transforms voice
                        input into text for any application.
                      </p>
                    </div>
                  </div>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
