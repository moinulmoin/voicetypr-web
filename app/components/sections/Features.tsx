"use client";

import { ClaudeAI, Cursor, Discord, Gemini, Gmail, Linear, Notion, OpenAI, Slack, XformerlyTwitter } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Mic, Keyboard, Zap, Sparkles, History, Layers, Key, Circle, Lock, Upload, Download, Globe, Gauge, FileText } from "lucide-react";

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
      {/* Simple, focused intro */}
      <div className="text-center mb-16 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Turn your voice into text
        </h2>
        <p className="text-muted-foreground text-xl">
          Speak naturally. Type anywhere. Stay private.
        </p>
      </div>

      {/* Single unified grid - no separate sections */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-min">

          {/* Hero Feature 1: Universal Language Support - spans 3 columns */}
          <Card className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-card to-card/60 backdrop-blur-sm border-border/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <Globe className="w-14 h-14 text-blue-500 mb-6" />
              
              {/* Language grid */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {["EN", "中文", "ES", "عربي", "हिंदी", "FR", "日本", "DE", "한국", "IT"].map((lang, index) => (
                  <div key={index} className="flex items-center justify-center h-10 rounded-lg bg-muted/30 text-sm font-medium text-muted-foreground/80 transition-all duration-300 hover:bg-primary/20 hover:text-primary">
                    {lang}
                  </div>
                ))}
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-3">100+ Languages</h3>
              <p className="text-muted-foreground">
                Speak in any language. It just works.
              </p>
            </div>
          </Card>

          {/* Hero Feature 2: Works Everywhere - spans 3 columns */}
          <Card className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-card to-card/60 backdrop-blur-sm border-border/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer group relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <Zap className="w-14 h-14 text-yellow-500 mb-6" />
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">Works Everywhere</h3>
              <p className="text-muted-foreground mb-6">
                Type in any app using your voice. Email, chat, code - anywhere.
              </p>

              {/* App icons */}
              <div className="grid grid-cols-5 gap-3">
                {appIcons.map(({ icon: Icon }, index) => (
                  <div key={index} className="flex items-center justify-center p-3 rounded-lg bg-muted/20 transition-all duration-300 hover:bg-primary/20">
                    <Icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Core Features - Medium sized cards */}
          
          {/* AI Enhancement */}
          <Card className="md:col-span-2 lg:col-span-2 bg-card/80 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
            <Sparkles className="w-10 h-10 text-purple-500 mb-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Smart Formatting</h3>
              <p className="text-sm text-muted-foreground">
                5 modes to polish your text. From casual chat to formal documents.
              </p>
            </div>
          </Card>

          {/* Accurate Transcription */}
          <Card className="md:col-span-2 lg:col-span-2 bg-card/80 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
            <Mic className="w-10 h-10 text-blue-500 mb-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">99% Accurate</h3>
              <p className="text-sm text-muted-foreground">
                Advanced AI that understands what you say.
              </p>
            </div>
          </Card>

          {/* Private & Secure */}
          <Card className="md:col-span-2 lg:col-span-2 bg-card/80 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
            <Shield className="w-10 h-10 text-green-500 mb-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">100% Private</h3>
              <p className="text-sm text-muted-foreground">
                Runs locally. Your voice never leaves your computer.
              </p>
            </div>
          </Card>

          {/* Smaller feature cards */}
          
          {/* Global Hotkey */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer group">
            <Keyboard className="w-8 h-8 text-cyan-500 mb-3" />
            <div>
              <h4 className="text-base font-semibold mb-2">Global Hotkey</h4>
              <p className="text-xs text-muted-foreground">
                Press. Speak. Done.
              </p>
            </div>
          </Card>

          {/* Native Performance */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer group">
            <Gauge className="w-8 h-8 text-yellow-500 mb-3" />
            <div>
              <h4 className="text-base font-semibold mb-2">Lightning Fast</h4>
              <p className="text-xs text-muted-foreground">
                Native app, instant response
              </p>
            </div>
          </Card>

          {/* History */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer group">
            <History className="w-8 h-8 text-blue-500 mb-3" />
            <div>
              <h4 className="text-base font-semibold mb-2">Smart History</h4>
              <p className="text-xs text-muted-foreground">
                Find anything you said
              </p>
            </div>
          </Card>

          {/* Multiple Models */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer group">
            <Layers className="w-8 h-8 text-indigo-500 mb-3" />
            <div>
              <h4 className="text-base font-semibold mb-2">Multiple Models</h4>
              <p className="text-xs text-muted-foreground">
                Fast or accurate. You pick.
              </p>
            </div>
          </Card>

          {/* BYOK */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer group">
            <Key className="w-8 h-8 text-orange-500 mb-3" />
            <div>
              <h4 className="text-base font-semibold mb-2">BYOK Cloud</h4>
              <p className="text-xs text-muted-foreground">
                Use your own API keys
              </p>
            </div>
          </Card>

          {/* Clean UI */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer group">
            <Circle className="w-8 h-8 text-teal-500 mb-3" />
            <div>
              <h4 className="text-base font-semibold mb-2">Clean UI</h4>
              <p className="text-xs text-muted-foreground">
                Minimal, stays out of way
              </p>
            </div>
          </Card>

          {/* Coming Soon Features - subtle integration */}
          
          {/* Upload Audio - Coming Soon */}
          <Card className="md:col-span-2 bg-card/60 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group relative">
            <div className="flex items-start justify-between mb-4">
              <Upload className="w-10 h-10 text-slate-500" />
              <Badge variant="outline" className="text-xs border-muted-foreground/20 text-muted-foreground/60">
                Soon
              </Badge>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground/80">Upload Audio</h3>
              <p className="text-sm text-muted-foreground/80">
                Transcribe any audio file.
              </p>
            </div>
          </Card>

          {/* Export Formats - Coming Soon */}
          <Card className="md:col-span-2 bg-card/60 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group relative">
            <div className="flex items-start justify-between mb-4">
              <FileText className="w-10 h-10 text-slate-500" />
              <Badge variant="outline" className="text-xs border-muted-foreground/20 text-muted-foreground/60">
                Soon
              </Badge>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground/80">Export Options</h3>
              <p className="text-sm text-muted-foreground/80">
                Save as TXT, PDF, DOCX.
              </p>
            </div>
          </Card>
          
          {/* License Management - moved here to balance the grid */}
          <Card className="md:col-span-2 bg-card/80 backdrop-blur-sm border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
            <Lock className="w-10 h-10 text-pink-500 mb-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Easy Licensing</h3>
              <p className="text-sm text-muted-foreground">
                Use on multiple devices. Switch anytime.
              </p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}