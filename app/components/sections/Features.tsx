"use client";

import { ClaudeAI, Cursor, Discord, Gemini, Gmail, Linear, Notion, OpenAI, Slack, XformerlyTwitter } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

// App icons grid
const appIcons = [
  { icon: XformerlyTwitter, name: "X" },
  { icon: Slack, name: "Slack" },
  { icon: Linear, name: "Linear" },
  { icon: Notion, name: "Notion" },
  { icon: Cursor, name: "Cursor" },
  { icon: Discord, name: "Discord" },
  { icon: Gemini, name: "Gemini" },
  { icon: OpenAI, name: "Open AI" },
  { icon: ClaudeAI, name: "Claude AI" },
  { icon: Gmail, name: "Gmail" },
];

export default function Features() {
  return (
    <section className="relative py-24" id="features">
      {/* Section intro */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-3">
          All you need for Effortless Typing
        </h2>
        <p className="text-muted-foreground text-lg">
          Transform your workflow with voice powered productivity.
        </p>
      </div>

      {/* Bento Grid Features */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-min">

          {/* Left Hero: 100+ Languages */}
          <Card className="md:col-span-2 lg:col-span-3 bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none flex flex-col">
            {/* Language grid at top */}
            <div className="space-y-2 mb-8">
              <div className="grid grid-cols-5 gap-2">
                {["EN", "ES", "FR", "DE", "IT"].map((lang, index) => (
                  <div key={index} className="flex items-center justify-center h-10 rounded-lg bg-muted/20 text-sm font-medium text-muted-foreground/60 transition-all duration-300 group-hover:bg-muted/30 group-hover:text-muted-foreground/80">
                    {lang}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {["中文", "日本", "한국", "عربي", "हिंदी"].map((lang, index) => (
                  <div key={index} className="flex items-center justify-center h-10 rounded-lg bg-muted/20 text-sm font-medium text-muted-foreground/60 transition-all duration-300 group-hover:bg-muted/30 group-hover:text-muted-foreground/80">
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            {/* Text content */}
            <div className="mt-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-2">100+ Languages</h3>
              <p className="text-base lg:text-lg text-muted-foreground">Speak in your language.</p>
            </div>
          </Card>

          {/* Use with any app - Wide card */}
          <Card className="md:col-span-2 lg:col-span-3 bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">Works with any app</h3>
              <p className="text-base text-muted-foreground mb-6">Including ChatGPT, Claude, Cursor & anywhere you can type.</p>

              {/* App icons grid */}
              <div className="grid grid-cols-5 gap-3 mt-auto">
                {appIcons.map(({ icon: Icon }, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-3 rounded-lg bg-muted/10 transition-all duration-300 group-hover:bg-muted/20">
                    <Icon className="w-6 h-6 group-hover:text-muted-foreground/60" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Bottom row features - 2x2 grid on medium, 4 columns on large */}
          <div className="md:col-span-4 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Accurate Transcription Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* Microphone visual */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Accurate Transcription</h3>
              <p className="text-sm text-muted-foreground">AI powered speech recognition with solid accuracy.</p>
            </div>
            </Card>

            {/* Global Shortcut Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* Keyboard visual */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="M6 8h.01" />
              <path d="M10 8h.01" />
              <path d="M14 8h.01" />
              <path d="M18 8h.01" />
              <path d="M8 12h.01" />
              <path d="M12 12h.01" />
              <path d="M16 12h.01" />
              <path d="M7 16h10" />
            </svg>

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Global Hotkey</h3>
              <p className="text-sm text-muted-foreground">Activate from any app with a hotkey.</p>
            </div>
            </Card>

            {/* Private & Secure Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* Shield visual */}
            <Shield className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" />

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Private & Secure</h3>
              <p className="text-sm text-muted-foreground">Everything stays on your device. No data leaves your computer.</p>
            </div>
            </Card>

            {/* Native Performance Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* Lightning bolt visual */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Native Performance</h3>
              <p className="text-sm text-muted-foreground">Lightweight app. Fast and reliable.</p>
            </div>
            </Card>

            {/* AI Enhancement Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* AI icon */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">AI Enhancement</h3>
              <p className="text-sm text-muted-foreground">Transform speech to polished text. 5 smart writing modes.</p>
            </div>
            </Card>

            {/* Transcription History Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* History icon */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v5h5" />
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M21 21v-5h-5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M12 8v4l2 2" />
            </svg>

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Transcription History</h3>
              <p className="text-sm text-muted-foreground">Search & manage all recordings. Never lose your ideas.</p>
            </div>
            </Card>

            {/* Multiple Models Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* Layers icon for models */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
              <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
              <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
            </svg>

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Multiple Models</h3>
              <p className="text-sm text-muted-foreground">Choose from small to large. Balance speed & accuracy.</p>
            </div>
            </Card>

            {/* BYOK Cloud Models Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* Key icon */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="7.5" cy="15.5" r="5.5" />
              <path d="m21 2-9.6 9.6" />
              <path d="m15.5 7.5 3 3L22 7l-3-3" />
            </svg>

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">BYOK Cloud Models</h3>
              <p className="text-sm text-muted-foreground">Use your own API keys. Free tier with rate limits.</p>
            </div>
            </Card>

            {/* Clean Recording Status Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* Recording status icon */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Clean Recording UI</h3>
              <p className="text-sm text-muted-foreground">Minimal recording status with clear error feedback.</p>
            </div>
            </Card>

            {/* Easy License Management Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* License icon */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Easy License Management</h3>
              <p className="text-sm text-muted-foreground">Simple activation & deactivation. Switch devices anytime.</p>
            </div>
            </Card>

            {/* Upload Audio Feature - Coming Soon */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none relative overflow-hidden">
            {/* Coming Soon Badge */}
            <div className="absolute top-2 right-2 z-10">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">Coming Soon</span>
            </div>
            
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-[5]" />
            
            {/* Upload icon */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4 relative" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>

            {/* Text content */}
            <div className="relative">
              <h3 className="text-lg lg:text-xl font-bold mb-2">Upload Audio Files</h3>
              <p className="text-sm text-muted-foreground">Transcribe existing audio files. Support for all formats.</p>
            </div>
            </Card>

            {/* Export Formats Feature - Coming Soon */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none relative overflow-hidden">
            {/* Coming Soon Badge */}
            <div className="absolute top-2 right-2 z-10">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">Coming Soon</span>
            </div>
            
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-[5]" />
            
            {/* Export icon */}
            <svg className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4 relative" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>

            {/* Text content */}
            <div className="relative">
              <h3 className="text-lg lg:text-xl font-bold mb-2">Export Formats</h3>
              <p className="text-sm text-muted-foreground">Export as TXT, DOCX, PDF, SRT & more.</p>
            </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}