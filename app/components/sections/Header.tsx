"use client";

import logo from "@/app/assets/transparent-logo.png";
import { GitHub } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
        <div className="flex items-center justify-between py-4">
          {/* Left: VoiceTypr Brand */}
          <div className="">
            <Image src={logo} alt="VoiceTypr" width={50} height={50} />
          </div>

          {/* Middle: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            {/* <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
              Reviews
            </a> */}
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
              <GitHub className="w-4 h-4" />
              <span>Star</span>
            </Button>

            {/* Buy Now Button */}
            <Button
              size="sm"
              className="group"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* <DollarSign className="w-4 h-4 mr-1 transition-transform group-hover:scale-110" /> */}
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
