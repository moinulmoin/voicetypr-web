"use client";

import { ReleaseAssets } from "@/app/lib/github";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PricingCards from "@/components/PricingCards";
import { trackTwitterConversion } from "@/lib/twitter-pixel";
import { ArrowRight, CheckCircle, Download } from "lucide-react";
import { useEffect, useState } from "react";
import GridBackground from "../components/GridBackground";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import EmailCaptureModal from "../components/EmailCaptureModal";

// Apple icon component
const AppleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// Windows icon component
const WindowsIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 88 88" fill="currentColor">
    <path d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z" />
  </svg>
);

interface DownloadOption {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  url?: string;
  platform: "macos" | "windows";
}

const macosInstallationSteps = [
  {
    step: "1",
    title: "Download VoiceTypr",
    description: "Download the .dmg file for your Mac",
  },
  {
    step: "2",
    title: "Open the Installer",
    description:
      "Double-click the .dmg file and drag VoiceTypr to Applications",
  },
  {
    step: "3",
    title: "Launch & Use",
    description: "Open Voicetypr from Applications",
  },
];

const windowsInstallationSteps = [
  {
    step: "1",
    title: "Download VoiceTypr",
    description: "Download the .exe installer for Windows",
  },
  {
    step: "2",
    title: "Run the Installer",
    description:
      "Double-click the .exe file and follow the installation wizard",
  },
  {
    step: "3",
    title: "Launch & Use",
    description: "Open VoiceTypr from Start Menu/Desktop",
  },
];

const getDownloadOptions = (assets: ReleaseAssets) => [
  {
    id: "macos-silicon",
    name: "macOS (Apple Silicon)",
    description: "For M1, M2, M3+ Macs",
    icon: AppleIcon,
    url: assets.silicon,
    platform: "macos",
  },
  {
    id: "windows",
    name: "Windows",
    description: "Windows 10 or later",
    icon: WindowsIcon,
    url: assets.windows,
    platform: "windows",
  },
];

export default function DownloadPageClient({ assets, defaultSelected, affonsoReferral, referrer }: {
  assets: ReleaseAssets;
  defaultSelected?: string | null;
  affonsoReferral: string;
  referrer: string;
}) {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(defaultSelected ?? null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    // Track modal open
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('email-modal-open', {
        platform: selectedOption?.platform
      });
    }
    setIsModalOpen(true);
  };

  const handleActualDownload = () => {
    const option = getDownloadOptions(assets).find(
      (opt) => opt.id === selectedPlatform,
    );
    // Use the URL if available, or fallback to any available URL
    const downloadUrl =
      option?.url ||
      assets.silicon ||
      assets.intel ||
      assets.windows ||
      process.env.NEXT_PUBLIC_DOWNLOAD_URL;

    if (downloadUrl) {
      trackTwitterConversion("download");
      // Track successful download with Umami
      if (typeof window !== 'undefined' && window.umami) {
        window.umami.track('download-success', {
          platform: selectedOption?.platform,
          url: downloadUrl
        });
      }
      window.open(downloadUrl, "_blank");
    }
  };

  const selectedOption = getDownloadOptions(assets).find(
    (opt) => opt.id === selectedPlatform,
  );
  const installationSteps =
    selectedOption?.platform === "windows"
      ? windowsInstallationSteps
      : macosInstallationSteps;

  return (
    <>
      <div className="relative">
        <GridBackground />
        <Header />

        {/* Main Download Section */}
        <section className="relative pt-32">
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
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {getDownloadOptions(assets).map((option) => (
                <Card
                  key={option.id}
                  onClick={() => setSelectedPlatform(option.id)}
                  className={`relative group p-6 cursor-pointer transition-all duration-300 ${"${"}
                    selectedPlatform === option.id
                      ? 'bg-card/80 border-primary shadow-lg scale-105'
                      : 'bg-card/50 border-border/50 hover:bg-card/70 hover:border-border/70'
                  ${"}"}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-4 p-3 rounded-xl transition-all ${"${"}
                      selectedPlatform === option.id
                        ? 'bg-primary/20 text-primary scale-110'
                        : 'bg-primary/10 text-primary group-hover:scale-110'
                    ${"}"}`}
                    >
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
                  onClick={handleDownloadClick}
                  className="group/btn"
                  size="lg"
                  data-umami-event="download-click"
                  data-umami-event-platform={selectedOption?.platform}
                >
                  <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                  Download for{" "}
                  {selectedOption?.platform === "windows"
                    ? "Windows"
                    : "macOS"}
                </Button>
              </div>
            )}

            {/* Dynamic Installation Steps */}
            {selectedPlatform && (
              <div className="my-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-semibold mb-8">
                  Installation Guide
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {installationSteps.map((step, index) => (
                    <div key={step.step} className="relative">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                          {step.step}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
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

            {/* Pricing Section */}
            <div className="">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Ready to Write 3x Faster?
              </h2>
              <div className="mb-8 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                  <span>🎉 New Year Special - Limited Time</span>
                </div>
              </div>
              <PricingCards affonsoReferral={affonsoReferral} referrer={referrer} eventPrefix="download-page" />
            </div>
          </div>
        </section>

        <Footer />

        {/* Email Capture Modal */}
        <EmailCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onDownload={handleActualDownload}
        />
      </div>
    </>
  );
}
