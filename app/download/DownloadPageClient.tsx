"use client";

import { useEffect, useState } from "react";
import GridBackground from "../components/GridBackground";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import { Button } from "@/components/ui/button";
import { getLatestReleaseAssets, ReleaseAssets } from "@/app/lib/github";
import { trackTwitterConversion } from "@/lib/twitter-pixel";
import { Download, Apple, Monitor, Shield, Github, CheckCircle, ArrowRight, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Apple icon component
const AppleIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// Windows icon component
const WindowsIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 88 88"
    fill="currentColor"
  >
    <path d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z" />
  </svg>
);

interface DownloadOption {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  url?: string;
  platform: 'macos' | 'windows';
}

const macosInstallationSteps = [
  {
    step: "1",
    title: "Download VoiceTypr",
    description: "Download the .dmg file for your Mac"
  },
  {
    step: "2", 
    title: "Open the Installer",
    description: "Double-click the .dmg file and drag VoiceTypr to Applications"
  },
  {
    step: "3",
    title: "Launch & Use",
    description: "Open VoiceTypr from Applications and enter your license key"
  }
];

const windowsInstallationSteps = [
  {
    step: "1",
    title: "Download VoiceTypr",
    description: "Download the .exe installer for Windows"
  },
  {
    step: "2", 
    title: "Run the Installer",
    description: "Double-click the .exe file and follow the installation wizard"
  },
  {
    step: "3",
    title: "Launch & Use",
    description: "Open VoiceTypr from Start Menu and enter your license key"
  }
];

export default function DownloadPageClient() {
  const [assets, setAssets] = useState<ReleaseAssets>({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  useEffect(() => {
    // Detect OS and auto-select platform
    const detectOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const platform = window.navigator.platform?.toLowerCase() || '';
      
      // Check for Windows
      if (platform.includes('win') || userAgent.includes('windows')) {
        setSelectedPlatform('windows');
      }
      // Check for Mac
      else if (platform.includes('mac') || userAgent.includes('mac')) {
        // For Macs, default to Apple Silicon since most new Macs are M1/M2/M3
        // Users can manually switch if they have Intel
        // We could also check screen resolution or other hints but it's not reliable
        setSelectedPlatform('macos-silicon');
      }
      // Linux or other - don't pre-select
    };

    detectOS();
    
    getLatestReleaseAssets().then((assets) => {
      setAssets(assets);
      setIsLoading(false);
    });
  }, []);

  const handleDownload = () => {
    const option = downloadOptions.find(opt => opt.id === selectedPlatform);
    // Use the URL if available, or fallback to any available URL
    const downloadUrl = option?.url || assets.silicon || assets.intel || assets.windows || process.env.NEXT_PUBLIC_DOWNLOAD_URL;
    
    if (downloadUrl) {
      trackTwitterConversion('download');
      window.open(downloadUrl, "_blank");
    }
  };

  const downloadOptions: DownloadOption[] = [
    {
      id: 'macos-silicon',
      name: 'macOS (Apple Silicon)',
      description: 'For M1, M2, M3 Macs',
      icon: AppleIcon,
      url: assets.silicon,
      platform: 'macos'
    },
    {
      id: 'macos-intel',
      name: 'macOS (Intel)',
      description: 'For Intel-based Macs',
      icon: AppleIcon,
      url: assets.intel,
      platform: 'macos'
    },
    {
      id: 'windows',
      name: 'Windows',
      description: 'Windows 10 or later',
      icon: WindowsIcon,
      url: assets.windows,
      platform: 'windows'
    }
  ];

  const selectedOption = downloadOptions.find(opt => opt.id === selectedPlatform);
  const installationSteps = selectedOption?.platform === 'windows' ? windowsInstallationSteps : macosInstallationSteps;

  return (
    <>
      <div className="relative min-h-screen">
        <GridBackground />
        <Header />
        
        {/* Main Download Section */}
        <section className="relative pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
                  Download VoiceTypr
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Choose your platform and get started.
              </p>
            </div>

            {/* Platform Selection */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {downloadOptions.map((option) => (
                <Card
                  key={option.id}
                  onClick={() => setSelectedPlatform(option.id)}
                  className={`relative group p-8 cursor-pointer transition-all duration-300 ${"${"}
                    selectedPlatform === option.id 
                      ? 'bg-card/80 border-primary shadow-lg scale-105' 
                      : 'bg-card/50 border-border/50 hover:bg-card/70 hover:border-border/70'
                  ${"}"}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-4 p-3 rounded-xl transition-all ${"${"}
                      selectedPlatform === option.id 
                        ? 'bg-primary/20 text-primary scale-110' 
                        : 'bg-primary/10 text-primary group-hover:scale-110'
                    ${"}"}`}>
                      <option.icon />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">
                      {option.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>

                    {selectedPlatform === option.id && (
                      <CheckCircle className="absolute top-4 right-4 w-5 h-5 text-primary" />
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Download Button - Only shows when platform is selected */}
            {selectedPlatform && (
              <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Button
                  onClick={handleDownload}
                  disabled={isLoading}
                  className="group/btn"
                  size="lg"
                  data-umami-event="download-click"
                  data-umami-event-platform={selectedOption?.platform}
                >
                  {isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2 group-hover/btn:translate-y-0.5 transition-transform" />
                      Download for {selectedOption?.platform === 'windows' ? 'Windows' : 'macOS'}
                    </>
                  )}
                </Button>
              </div>
            )}

            {/* Dynamic System Requirements */}
            {selectedPlatform && (
              <div className="mb-16 p-6 rounded-2xl bg-card/30 border border-border/30 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-semibold mb-6">System Requirements</h2>
                <div className="max-w-md mx-auto text-left">
                  {selectedOption?.platform === 'windows' ? (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <WindowsIcon />
                        <h3 className="text-lg font-medium">Windows</h3>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          Windows 10 or later
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          64-bit processor
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          4 GB RAM minimum (8 GB recommended)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          Latest graphics driver for GPU acceleration (if available)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          Good quality microphone device
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AppleIcon />
                        <h3 className="text-lg font-medium">macOS</h3>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          macOS 13.0 (Ventura) or later
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {selectedPlatform === 'macos-silicon' ? 'Apple Silicon (M1/M2/M3)' : 'Intel processor'}
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          4 GB RAM minimum
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          Good quality microphone device
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          Microphone & Accessibility permissions required
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Dynamic Installation Steps */}
            {selectedPlatform && (
              <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-semibold mb-8">Installation Guide</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {installationSteps.map((step, index) => (
                    <div key={step.step} className="relative">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                          {step.step}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      
                      {/* Arrow for desktop */}
                      {index < installationSteps.length - 1 && (
                        <ArrowRight className="hidden md:block absolute top-6 -right-3 w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Minimal Pricing Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">Ready to Write 5x Faster?</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* Pro Plan */}
                <Card className="bg-card/50 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-none relative border-border/50 hover:border-border/70">
                  {/* Discount badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-white">EARLY61 applied</span>
                    </div>
                  </div>

                  <CardHeader className="text-center pb-1 px-6 pt-6">
                    <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                    <div className="mt-3">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-xl text-muted-foreground line-through">$49</span>
                        <span className="text-4xl font-bold">$19</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">For individuals</p>
                      <p className="text-xs mt-1 font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          Save $30
                        </span>
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 py-3">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">1 device activation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Lifetime access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">All future updates</span>
                      </li>
                    </ul>
                  </CardContent>

                  <CardFooter className="px-6 pb-5 pt-2">
                    <Button 
                      className="w-full group bg-card hover:bg-muted"
                      variant="outline"
                      onClick={() => {
                        window.location.href =
                          "/api/v1/checkout?products=" +
                          process.env.NEXT_PUBLIC_PRO_PRODUCT_ID +
                          "&discountId=" +
                          process.env.NEXT_PUBLIC_PRO_COUPON_CODE;
                      }}
                      data-umami-event="download-page-pro-click"
                      data-umami-event-plan="pro"
                    >
                      Get Pro
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Plus Plan */}
                <Card className="bg-card/50 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-none relative border-primary/50 scale-[1.03] ring-2 ring-primary/20">
                  {/* Discount badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-white">LAUNCH71 applied</span>
                    </div>
                  </div>

                  <CardHeader className="text-center pb-1 px-6 pt-6">
                    <CardTitle className="text-2xl font-bold">Plus</CardTitle>
                    <div className="mt-3">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-xl text-muted-foreground line-through">$99</span>
                        <span className="text-4xl font-bold">$29</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">For power users</p>
                      <p className="text-xs mt-1 font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          Save $70
                        </span>
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 py-3">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">2 device activations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Lifetime access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">All future updates</span>
                      </li>
                    </ul>
                  </CardContent>

                  <CardFooter className="px-6 pb-5 pt-2">
                    <Button 
                      className="w-full group bg-primary hover:bg-primary/90"
                      onClick={() => {
                        window.location.href =
                          "/api/v1/checkout?products=" +
                          process.env.NEXT_PUBLIC_PLUS_PRODUCT_ID +
                          "&discountId=" +
                          process.env.NEXT_PUBLIC_PLUS_COUPON_CODE;
                      }}
                      data-umami-event="download-page-plus-click"
                      data-umami-event-plan="plus"
                    >
                      Get Plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                Secure payment • 7 day money back guarantee
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground mb-12">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No Subscriptions</span>
              </div>
            </div>

            {/* Support */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Need help? We're here to support you.
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:support@voicetypr.com">
                  Contact Support
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}