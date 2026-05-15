"use client";

import { ReleaseAssets } from "@/app/lib/github";
import FAQ from "@/app/components/sections/FAQ";
import PricingCards from "@/components/PricingCards";
import { trackTwitterConversion } from "@/lib/twitter-pixel";
import { downloadDiscoveryLinks } from "@/lib/seo-discovery";
import { ArrowRight } from "lucide-react";
import { useMemo, useState, type ReactElement } from "react";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import EmailCaptureModal from "../components/EmailCaptureModal";
import RelatedGuidesSection from "../components/RelatedGuidesSection";

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
  icon: () => ReactElement;
  url?: string;
  platform: "macos" | "windows";
}

const macosInstallationSteps = [
  { step: "1", title: "Download", description: "Get the .dmg for your Mac" },
  { step: "2", title: "Install", description: "Open the .dmg and drag to Applications" },
  { step: "3", title: "Launch", description: "Open VoiceTypr and start dictating" },
];

const windowsInstallationSteps = [
  { step: "1", title: "Download", description: "Get the .exe for Windows" },
  { step: "2", title: "Install", description: "Run the installer and follow the steps" },
  { step: "3", title: "Launch", description: "Open VoiceTypr and start dictating" },
];

function DownloadPricing({ affonsoReferral, referrer }: { affonsoReferral: string; referrer: string }) {
  return (
    <div id="pricing">
      <div className="text-center mb-10">
        <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.04] tracking-[-0.04em] font-semibold mb-3">
          Pay once. Yours forever.
        </h2>
        <p className="text-editorial-ink-2 text-[17px] leading-[1.55] max-w-[560px] mx-auto">
          No subscriptions. No update locks. Real lifetime access.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <PricingCards affonsoReferral={affonsoReferral} referrer={referrer} eventPrefix="download-page" />
      </div>
    </div>
  );
}

const getDownloadOptions = (assets: ReleaseAssets): DownloadOption[] => {
  const all: DownloadOption[] = [
    {
      id: "macos-silicon",
      name: "macOS (Apple Silicon)",
      description: "M1, M2, M3+",
      icon: AppleIcon,
      url: assets.silicon,
      platform: "macos",
    },
    {
      id: "macos-intel",
      name: "macOS (Intel)",
      description: "Intel-based Macs",
      icon: AppleIcon,
      url: assets.intel,
      platform: "macos",
    },
    {
      id: "windows",
      name: "Windows",
      description: "Windows 10+",
      icon: WindowsIcon,
      url: assets.windows,
      platform: "windows",
    },
  ];
  return all.filter(opt => opt.url);
};

export default function DownloadPageClient({ assets, defaultSelected, affonsoReferral, referrer }: {
  assets: ReleaseAssets;
  defaultSelected?: string | null;
  affonsoReferral: string;
  referrer: string;
}) {
  const options = useMemo(() => getDownloadOptions(assets), [assets]);

  const validatedDefault = defaultSelected && options.some(opt => opt.id === defaultSelected)
    ? defaultSelected
    : null;

  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(validatedDefault);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.id === selectedPlatform);

  const handleDownloadClick = () => {
    if (typeof window !== 'undefined' && window.openpanel) {
      window.openpanel.track('email-modal-open', {
        platform: selectedOption?.platform
      });
    }
    setIsModalOpen(true);
  };

  const handleActualDownload = () => {
    const downloadUrl =
      selectedOption?.url ||
      assets.silicon ||
      assets.intel ||
      assets.windows ||
      process.env.NEXT_PUBLIC_DOWNLOAD_URL;

    if (downloadUrl) {
      trackTwitterConversion("download");
      if (typeof window !== 'undefined' && window.openpanel) {
        window.openpanel.track('download-success', {
          platform: selectedOption?.platform,
          url: downloadUrl
        });
      }
      window.open(downloadUrl, "_blank");
    }
  };

  const installationSteps =
    selectedOption?.platform === "windows"
      ? windowsInstallationSteps
      : macosInstallationSteps;

  return (
    <main className="landing-editorial relative min-h-screen">
      <Header />

      {/* Hero */}
      <section className="ed-section ed-section-hero !pt-[120px] pb-0 md:!pt-[140px]">
        <div className="ed-container text-center">
          <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
            Download
          </div>
          <h1 className="text-[clamp(44px,8vw,84px)] font-semibold leading-[0.95] tracking-[-0.05em]">
            Download VoiceTypr
          </h1>
          <p className="mx-auto mt-7 max-w-[640px] text-[19px] leading-[1.55] text-editorial-ink-2">
            <strong className="font-medium text-editorial-ink">
              Choose your platform.
            </strong>{" "}
            Three-day trial, no credit card.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-editorial-ink-3">
            <span>macOS 13+</span>
            <span>Windows 10+</span>
            <span>Local transcription by default</span>
          </div>
        </div>
      </section>

      {/* Platform Selection */}
      <section className="ed-section">
        <div className="ed-container max-w-[860px]">
          <div className={`grid gap-4 ${options.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {options.map((option) => {
              const isSelected = selectedPlatform === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedPlatform(option.id)}
                  className={`relative rounded-2xl border p-6 text-left [transition:border-color_180ms,background-color_180ms,transform_180ms] ${
                    isSelected
                      ? 'border-editorial-ink bg-white/90 shadow-sm backdrop-blur'
                      : 'border-editorial-line bg-white/72 backdrop-blur hover:-translate-y-0.5 hover:border-editorial-ink-3'
                  }`}
                  data-track="download-platform-select"
                  data-track-platform={option.platform}
                >
                  <div className="flex flex-col gap-5">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-editorial-surface-2 text-editorial-ink">
                      <option.icon />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-editorial-ink">
                        {option.name}
                      </h3>
                      <p className="mt-1 text-[13px] text-editorial-ink-3">
                        {option.description}
                      </p>
                    </div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-editorial-ink-3">
                      {isSelected ? 'selected' : 'available'}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedPlatform && (
            <div className="mt-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <button
                onClick={handleDownloadClick}
                className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
                data-track="download-click"
                data-track-platform={selectedOption?.platform}
              >
                Download for {selectedOption?.name ?? "macOS"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Installation Steps */}
      {selectedPlatform && (
        <section className="ed-section pt-0">
          <div className="ed-container max-w-[900px]">
            <div className="rounded-[28px] border border-editorial-line bg-white/80 px-6 py-8 shadow-sm backdrop-blur sm:px-8 sm:py-10">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-[clamp(28px,3vw,38px)] leading-[1.06] tracking-[-0.03em]">
                  Install in three steps
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6] text-editorial-ink-2">
                  Pick the build, run the installer, and start dictating in the app you already use.
                </p>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {installationSteps.map((step, index) => (
                  <div key={step.step} className="relative rounded-2xl bg-editorial-surface-2 p-5">
                    <div className="text-center">
                      <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-editorial-ink text-sm font-semibold text-white">
                        {step.step}
                      </div>
                      <h3 className="mb-1 text-[15px] font-semibold text-editorial-ink">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-editorial-ink-2">
                        {step.description}
                      </p>
                    </div>

                    {index < installationSteps.length - 1 && (
                      <ArrowRight className="hidden md:block absolute top-5 -right-3 h-4 w-4 text-editorial-ink-3" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <RelatedGuidesSection
        eyebrow="not all downloads start from the same problem"
        title="If you are still deciding, use the sharper page"
        description="Windows buyers, privacy buyers, and accessibility buyers usually want different proof before they install. These pages meet them where they already are."
        links={downloadDiscoveryLinks}
        dataTrackPrefix="download-related-guides"
      />

      {/* Pricing */}
      <section className="ed-section">
        <div className="ed-container">
          <DownloadPricing affonsoReferral={affonsoReferral} referrer={referrer} />
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      <Footer />

      <EmailCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownload={handleActualDownload}
      />
    </main>
  );
}
