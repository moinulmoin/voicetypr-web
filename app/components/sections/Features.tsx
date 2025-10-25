"use client";

import {
  ClaudeAI,
  Cursor,
  Discord,
  Gemini,
  Gmail,
  Linear,
  Notion,
  OpenAI,
  Slack,
  XformerlyTwitter
} from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Shield,
  Mic,
  Keyboard,
  Zap,
  Sparkles,
  History,
  Layers,
  Key,
  Circle,
  Lock,
  Upload,
  Download,
  Globe,
  Gauge,
  FileText,
  Radio,
  Search,
  Copy,
  Share2,
  TrendingUp,
  Users,
  FileJson,
  Mouse
} from "lucide-react";

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
  { icon: Gmail, name: "Gmail" }
];

export default function Features() {
  return (
    <section className="relative py-24" id="features">
      {/* Simple, focused intro */}
      <div className="text-center mb-16 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Turn your voice into text</h2>
        <p className="text-muted-foreground text-xl">
          Speak naturally. Type anywhere. Stay private.
        </p>
      </div>

      {/* Unified grid - 6 columns with enhanced card styles */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-min">

          {/* Hero Feature 1: Universal Language Support - spans 3 columns */}
          <Card className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-500/10 via-card to-card/60 backdrop-blur-sm border-blue-500/20 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <Globe className="w-14 h-14 text-blue-500 mb-6" />

              {/* Language grid - USA & European languages only */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {["EN", "ES", "FR", "DE", "IT", "PT", "NL", "SV", "NO", "PL"].map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-10 rounded-lg bg-muted/30 text-sm font-medium text-muted-foreground/80 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-500"
                  >
                    {lang}
                  </div>
                ))}
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-3">99+ Languages</h3>
              <p className="text-muted-foreground">Speak in any language. It just works.</p>
            </div>
          </Card>

          {/* Hero Feature 2: Works Everywhere - spans 3 columns */}
          <Card className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-yellow-500/10 via-card to-card/60 backdrop-blur-sm border-yellow-500/20 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02] cursor-pointer group relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <Zap className="w-14 h-14 text-yellow-500 mb-6" />

              <h3 className="text-2xl lg:text-3xl font-bold mb-3">Works Everywhere</h3>
              <p className="text-muted-foreground mb-6">
                Type in any app using your voice. Email, chat, code - anywhere.
              </p>

              {/* App icons */}
              <div className="grid grid-cols-5 gap-3">
                {appIcons.map(({ icon: Icon }, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-3 rounded-lg bg-muted/20 transition-all duration-300 hover:bg-yellow-500/20"
                  >
                    <Icon className="w-6 h-6 text-muted-foreground hover:text-yellow-500 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Core Features - Medium sized cards */}

          {/* AI Enhancement */}
          <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-purple-500/10 via-card to-card/60 backdrop-blur-sm border-purple-500/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-[1.02] cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl gap-0"></div>
            <div className="relative z-10">
              <Sparkles className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Formatting</h3>
              <p className="text-sm text-muted-foreground">
                5 modes to polish your text. From casual chat to formal documents.
              </p>
            </div>
          </Card>

          {/* Accurate Transcription */}
          <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-500/5 via-card to-card/60 backdrop-blur-sm border-blue-500/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] cursor-pointer group gap-0">
            <Mic className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">99% Accurate</h3>
            <p className="text-sm text-muted-foreground">
              Advanced AI that understands what you say.
            </p>
          </Card>

          {/* Private & Secure */}
          <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-500/5 via-card to-card/60 backdrop-blur-sm border-green-500/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:scale-[1.02] cursor-pointer group gap-0">
            <Shield className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">100% Private</h3>
            <p className="text-sm text-muted-foreground">
              Runs locally. Your voice never leaves your computer.
            </p>
          </Card>

          {/* NEW v1.8 Features - Matching existing medium card style */}

          {/* Push-to-Talk & Hotkeys */}
          <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-purple-500/5 via-card to-card/60 backdrop-blur-sm border-purple-500/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-[1.02] cursor-pointer group gap-0">
            <Keyboard className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Toggle or Push-to-Talk</h3>
            <p className="text-sm text-muted-foreground">
              Hold or toggle your hotkey to record and transcribe.
            </p>
          </Card>

          {/* Audio & Video File Upload */}
          <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-500/5 via-card to-card/60 backdrop-blur-sm border-blue-500/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] cursor-pointer group gap-0">
            <Upload className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Upload Audio & Video Files</h3>
            <p className="text-sm text-muted-foreground">
              Transcribe MP3, WAV, M4A, MP4, MOV. Drag, drop, done.
            </p>
          </Card>

          {/* Smart History */}
          <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-500/5 via-card to-card/60 backdrop-blur-sm border-green-500/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:scale-[1.02] cursor-pointer group gap-0">
            <History className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart History</h3>
            <p className="text-sm text-muted-foreground">
              Search, export to JSON, copy anything you've said.
            </p>
          </Card>

          {/* Productivity Stats */}
          <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-500/5 via-card to-card/60 backdrop-blur-sm border-orange-500/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:scale-[1.02] cursor-pointer group gap-0">
            <TrendingUp className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Track Progress</h3>
            <p className="text-sm text-muted-foreground">
              Build streaks, track stats, share your productivity.
            </p>
          </Card>

          {/* Additional Features - Bottom Row */}

          {/* Lightning Fast */}
          <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-yellow-500/5 via-card to-card/60 backdrop-blur-sm border-yellow-500/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 hover:scale-[1.02] cursor-pointer group gap-0">
            <Gauge className="w-10 h-10 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Native app, instant response. No cloud latency.
            </p>
          </Card>

          {/* Multiple Models */}
          <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-500/5 via-card to-card/60 backdrop-blur-sm border-indigo-500/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] cursor-pointer group gap-0">
            <Layers className="w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Multiple Models</h3>
            <p className="text-sm text-muted-foreground">
              Choose speed or accuracy. Download what you need.
            </p>
          </Card>

        </div>
      </div>
    </section>
  );
}
