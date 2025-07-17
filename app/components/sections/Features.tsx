"use client";

import { Card } from "@/components/ui/card";
import {
  Chrome,
  Code,
  Figma,
  FileText,
  Github,
  Mail,
  MessageSquare,
  Shield,
  Slack,
  Twitter,
  Video
} from "lucide-react";

// App icons grid
const appIcons = [
  { icon: Twitter, name: "X" },
  { icon: Slack, name: "Slack" },
  { icon: MessageSquare, name: "Telegram" },
  { icon: Chrome, name: "Chrome" },
  { icon: Github, name: "GitHub" },
  { icon: FileText, name: "Notion" },
  { icon: Figma, name: "Figma" },
  { icon: Video, name: "Zoom" },
  { icon: Code, name: "VS Code" },
  { icon: Mail, name: "Gmail" },
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-min">

          {/* Left Hero: 100+ Languages */}
          <Card className="md:col-span-2 lg:col-span-3 bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none flex flex-col">
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
              <p className="text-base lg:text-lg text-muted-Foreground">Speak in your language.</p>
            </div>
          </Card>

          {/* Use with any app - Wide card */}
          <Card className="md:col-span-2 lg:col-span-3 bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">Use with any app</h3>
              <p className="text-base text-muted-foreground mb-6">Works anywhere you can type or paste text.</p>

              {/* App icons grid */}
              <div className="grid grid-cols-5 gap-3 mt-auto">
                {appIcons.map(({ icon: Icon }, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-3 rounded-lg bg-muted/10 transition-all duration-300 group-hover:bg-muted/20">
                    <Icon className="w-6 h-6 text-muted-foreground/40 group-hover:text-muted-foreground/60" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Bottom row features - 2x2 grid on medium, 4 columns on large */}
          <div className="md:col-span-4 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Accurate Transcription Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
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
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
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
              <h3 className="text-lg lg:text-xl font-bold mb-2">Global Shortcut</h3>
              <p className="text-sm text-muted-foreground">Activate from any app with a hotkey.</p>
            </div>
            </Card>

            {/* Private & Secure Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* Shield visual */}
            <Shield className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" />

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Private & Secure</h3>
              <p className="text-sm text-muted-foreground">Everything stays on your device. No data leaves your computer.</p>
            </div>
            </Card>

            {/* Native Performance Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
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
          </div>

        </div>
      </div>
    </section>
  );
}