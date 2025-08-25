"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Github, Cpu, DollarSign } from "lucide-react";

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
            <span className="text-sm font-medium text-muted-foreground">⚡ Launch offer ending soon</span>
          </div>
          
          {/* Main Heading with VoiceTypr's gradient style */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground block">
              Ship 3x faster
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground to-foreground block">
              with your voice
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            AI powered voice to text tool for busy founders & AI super users
          </p>
          <p className="text-lg font-semibold text-primary mb-10 text-balance">
            Pay once. Use forever. No subscription.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button variant="outline" asChild>
              <Link href="/download" data-umami-event="hero-download-click">
                Download Now
              </Link>
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-umami-event="hero-buy-click"
            >
              Buy Now
            </Button>
          </div>
          <div className="flex justify-center items-center mb-8">
            {/* Platform badges with version info */}
            <div className="flex items-center gap-6 text-muted-foreground mt-2">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
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
              </div>
            </div>
          </div>

          {/* Video Demo */}
          <div className="mb-12">
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 max-w-3xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg relative overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                  playsInline
                  preload="none"
                  aria-label="VoiceTypr Demo Video - Shows voice-to-text functionality"
                >
                  <source 
                    src="https://assets.voicetypr.com/voicetypr-better-voice.mp4" 
                    type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                    <div>
                      <p className="text-lg font-semibold mb-2">Video Demo Unavailable</p>
                      <p className="text-muted-foreground mb-4">Your browser doesn't support video playback. VoiceTypr transforms voice input into text for any application.</p>
                      <Button variant="outline" asChild>
                        <Link href="/download">Download VoiceTypr</Link>
                      </Button>
                    </div>
                  </div>
                </video>
              </div>
            </div>
          </div>

          {/* Trust Badges - integrated into Hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-3">
                  {/* Icon container with gradient border */}
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-[1px] group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <badge.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-sm font-semibold mb-1">
                  {badge.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
