"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Shield, 
  WifiOff, 
  Grid3x3,
  Chrome,
  FileText,
  Github,
  MessageSquare,
  Mail,
  Video,
  Code,
  Figma,
  Slack,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  Trello
} from "lucide-react";

// Scrolling content for language demonstration
const languageContent = [
  "Python", "JavaScript", "TypeScript", "Go", "Rust", "Swift", "Kotlin", "C++",
  "你好世界", "مرحبا بالعالم", "Привет мир", "Hola mundo", "Bonjour le monde",
  "Hallo Welt", "Ciao mondo", "こんにちは世界", "안녕하세요 세계", "Olá mundo",
  "https://my.zoom.us/j/1234567890", "https://cal.com/example-15m",
  "PostgreSQL", "Docker", "Kubernetes", "GPT-4", "Claude", "Whisper",
  "123 Sesame Street, Unit 14A, New York, NY 10001", "@yourhandle",
  "SAFE Agreement", "https://github.com/yourname", "npm install",
];

// App icons grid
const appIcons = [
  { icon: Twitter, name: "X" },
  { icon: Slack, name: "Slack" },
  { icon: Grid3x3, name: "Slack" },
  { icon: MessageSquare, name: "Telegram" },
  { icon: Chrome, name: "Chrome" },
  { icon: Github, name: "GitHub" },
  { icon: FileText, name: "Obsidian" },
  { icon: Grid3x3, name: "JIRA" },
  { icon: Figma, name: "Figma" },
  { icon: FileText, name: "Notion" },
  { icon: Video, name: "Zoom" },
  { icon: FileText, name: "WordPress" },
  { icon: Code, name: "IntelliJ" },
  { icon: Code, name: "VIM" },
  { icon: Code, name: "Sublime" },
  { icon: MessageSquare, name: "Discord" },
  { icon: FileText, name: "Google Docs" },
  { icon: FileText, name: "Google Slides" },
  { icon: Mail, name: "Gmail" },
  { icon: Trello, name: "Asana" },
  { icon: Trello, name: "Trello" },
];

export default function Features() {
  return (
    <section className="relative py-24 bg-background" id="features">
      {/* Section intro */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
          Everything you need to type faster
        </h2>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 100+ Languages Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 overflow-hidden min-h-[280px] flex flex-col transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
          >
            {/* Language grid at top */}
            <div className="space-y-2 mb-6">
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
            <div className="relative z-10 flex-1">
              <h3 className="text-3xl font-bold mb-2">100+ Languages</h3>
              <p className="text-muted-foreground">It can translate them all to English, too.</p>
            </div>
          </motion.div>

          {/* Use with any app Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 overflow-hidden min-h-[280px] flex flex-col transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
          >
            {/* App icons grid preview at top */}
            <div className="grid grid-cols-5 gap-2 opacity-60 mb-6">
              {appIcons.slice(0, 10).map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted/20 transition-all duration-300 group-hover:bg-muted/30"
                >
                  <app.icon className="w-5 h-5 text-muted-foreground/60 transition-colors duration-300 group-hover:text-muted-foreground/80" />
                </motion.div>
              ))}
            </div>
            
            {/* Text content */}
            <div className="relative z-10 flex-1">
              <h3 className="text-3xl font-bold mb-2">Use with any app</h3>
              <p className="text-muted-foreground">Works anywhere you can type or paste text.</p>
            </div>
          </motion.div>

          {/* Private & Secure Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 overflow-hidden min-h-[280px] transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
          >
            {/* Shield visual on left */}
            <div className="absolute left-8 top-8">
              <Shield className="w-20 h-20 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110" />
            </div>
            
            {/* Text content pushed down */}
            <div className="relative z-10 mt-32">
              <h3 className="text-3xl font-bold mb-2">Private & Secure</h3>
              <p className="text-muted-foreground">Everything stays on your device.</p>
            </div>
          </motion.div>

          {/* Offline First Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 overflow-hidden min-h-[280px] transition-all duration-300 hover:bg-card/70 hover:border-border/70 hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
          >
            {/* WiFi off visual on left */}
            <div className="absolute left-8 top-8">
              <WifiOff className="w-20 h-20 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/30 group-hover:scale-110" />
            </div>
            
            {/* Text content pushed down */}
            <div className="relative z-10 mt-32">
              <h3 className="text-3xl font-bold mb-2">Offline First</h3>
              <p className="text-muted-foreground">Everything happens on your device, no WiFi needed.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}