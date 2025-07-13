"use client";

import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled ? 'bg-black/20 backdrop-blur-md' : ''
      }`}>
        <div className="flex items-center justify-between h-16">
          {/* Left: VoiceTypr Brand */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">VoiceTypr</span>
          </div>

          {/* Middle: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
              Reviews
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right: GitHub Star + Download Button */}
          <div className="flex items-center gap-3">
            {/* GitHub Star Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border-white/10"
              onClick={() => window.open('https://github.com/moinulmoin/voicetypr', '_blank')}
            >
              <Github className="w-4 h-4" />
              <span>Star</span>
            </Button>

            {/* Download Button */}
            <Button
              size="sm"
              className="group"
              onClick={() => window.open('#download', '_blank')}
            >
              <Download className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
