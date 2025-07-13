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
  Video,
  WifiOff
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
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
          Everything you need to type faster
        </h2>
      </div>

      {/* Bento Grid Features */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-min">

          {/* Left Hero: 100+ Languages */}
          <Card className="md:col-span-2 lg:col-span-2 md:row-span-3 bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none flex flex-col">
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
              <div className="grid grid-cols-5 gap-2">
                {["PT", "RU", "JA", "NL", "PL"].map((lang, index) => (
                  <div key={index} className="flex items-center justify-center h-10 rounded-lg bg-muted/20 text-sm font-medium text-muted-foreground/60 transition-all duration-300 group-hover:bg-muted/30 group-hover:text-muted-foreground/80">
                    {lang}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {["SV", "NO", "DA", "FI", "TR"].map((lang, index) => (
                  <div key={index} className="flex items-center justify-center h-10 rounded-lg bg-muted/20 text-sm font-medium text-muted-foreground/60 transition-all duration-300 group-hover:bg-muted/30 group-hover:text-muted-foreground/80">
                    {lang}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {["CS", "HU", "RO", "BG", "HR"].map((lang, index) => (
                  <div key={index} className="flex items-center justify-center h-10 rounded-lg bg-muted/20 text-sm font-medium text-muted-foreground/60 transition-all duration-300 group-hover:bg-muted/30 group-hover:text-muted-foreground/80">
                    {lang}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {["SK", "SL", "ET", "LV", "LT"].map((lang, index) => (
                  <div key={index} className="flex items-center justify-center h-10 rounded-lg bg-muted/20 text-sm font-medium text-muted-foreground/60 transition-all duration-300 group-hover:bg-muted/30 group-hover:text-muted-foreground/80">
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            {/* Text content */}
            <div className="mt-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-2">100+ Languages</h3>
              <p className="text-base lg:text-lg text-muted-foreground">It can translate them all to English, too.</p>
            </div>
          </Card>

          {/* Use with any app - Wide card */}
          <Card className="md:col-span-2 lg:col-span-4 bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
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

          {/* Bottom row features */}
          <div className="md:col-span-2 lg:col-span-4 grid grid-cols-2 gap-4">
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
              <p className="text-sm text-muted-foreground">AI-powered speech recognition with 99%+ accuracy.</p>
            </div>
            </Card>

            {/* Offline First Feature */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group shadow-none">
            {/* WiFi off visual */}
            <WifiOff className="w-12 h-12 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110 mb-4" />

            {/* Text content */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Offline First</h3>
              <p className="text-sm text-muted-foreground">Everything happens on your device, no WiFi needed.</p>
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
          </div>

        </div>
      </div>
    </section>
  );
}