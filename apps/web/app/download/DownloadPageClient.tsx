"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ReleaseAssets } from "@/app/lib/github";
import { trackTwitterConversion } from "@/lib/twitter-pixel";
import { downloadURL } from "@/lib/utils";
import { Bi } from "@/app/components/landing-v2/brand-icons";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";

export const MS_STORE_URL =
  "https://apps.microsoft.com/store/detail/9P8J3X9B2JG6?cid=DevShareMTwPCS";

// Kept for unit tests + reuse by the landing OS detection.
export function getDownloadOptions(assets: ReleaseAssets) {
  const all = [
    { id: "macos-silicon", url: assets.silicon },
    { id: "macos-intel", url: assets.intel },
    { id: "windows", url: assets.windows },
  ];
  return all.filter((opt) => opt.url);
}

export function getDetectedDownloadOptionId(
  options: ReadonlyArray<{ id: string }>,
  userAgent: string,
): string | null {
  const ua = userAgent.toLowerCase();
  if (ua.includes("windows")) {
    return options.find((opt) => opt.id === "windows")?.id ?? null;
  }
  if (ua.includes("mac")) {
    return options.find((opt) => opt.id === "macos-silicon")?.id ?? null;
  }
  return null;
}

function assetUrl(assets: ReleaseAssets, platform: string): string | undefined {
  if (platform === "macos-intel") return assets.intel || assets.silicon;
  if (platform === "windows") return assets.windows;
  return assets.silicon || assets.intel;
}

/** A small "app tile" — the Voicetypr icon used across the step visuals. */
function AppTile({ className = "" }: { className?: string }) {
  return (
    <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm ${className}`}>
      <Bi name="mic" className="text-xl" />
    </span>
  );
}

function StepVisual({ index, isWindows }: { index: number; isWindows: boolean }) {
  if (index === 0) {
    return (
      <span className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-sm">
        <Bi name={isWindows ? "windows" : "apple"} className="text-base text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">{isWindows ? "Voicetypr-setup.exe" : "Voicetypr.dmg"}</span>
        <Bi name="check" className="ml-1 text-sm text-sage" />
      </span>
    );
  }
  if (index === 1) {
    return (
      <span className="flex items-center gap-3">
        <AppTile />
        <Bi name="arrow" className="text-base text-muted-foreground" />
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-dashed border-border text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          {isWindows ? "Run" : "Apps"}
        </span>
      </span>
    );
  }
  return <AppTile className="ring-4 ring-sage/25" />;
}

const MAC_STEPS = [
  { title: "Open the installer", desc: "Double-click Voicetypr.dmg in your Downloads." },
  { title: "Drag to Applications", desc: "Drag the Voicetypr icon into your Applications folder." },
  { title: "Launch & talk", desc: "Open Voicetypr, set a hotkey, and start dictating." },
];

const WIN_STEPS = [
  { title: "Open the installer", desc: "Run the Voicetypr .exe from your Downloads." },
  { title: "Allow & install", desc: "If Windows shows “Unknown publisher,” click More info → Run anyway." },
  { title: "Launch & talk", desc: "Open Voicetypr, set a hotkey, and start dictating." },
];

export default function DownloadPageClient({
  assets,
  selected,
}: {
  assets: ReleaseAssets;
  selected: string;
}) {
  const platform = selected || "macos-silicon";
  const isWindows = platform === "windows";
  const directUrl = assetUrl(assets, platform);
  const manualUrl = directUrl || process.env.NEXT_PUBLIC_DOWNLOAD_URL || downloadURL;
  const fired = useRef(false);

  const track = () => {
    try {
      trackTwitterConversion("download");
      if (typeof window !== "undefined" && window.openpanel) {
        window.openpanel.track("download-success", { platform, url: manualUrl });
      }
    } catch {
      /* best-effort */
    }
  };

  // Auto-start the download for a real installer asset (served as an attachment,
  // so the browser downloads it without navigating away from this page).
  useEffect(() => {
    if (fired.current || !directUrl) return;
    fired.current = true;
    const t = setTimeout(() => {
      track();
      window.location.href = directUrl;
    }, 800);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const steps = isWindows ? WIN_STEPS : MAC_STEPS;
  const osName = isWindows ? "Windows" : "macOS";

  return (
    <div className="flex min-h-dvh flex-col bg-background font-sans text-foreground">
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="mx-auto max-w-2xl px-6 pt-16 text-center md:pt-24">
          <h1 className="text-balance font-sans text-[clamp(2.25rem,5vw,3.25rem)] font-bold leading-tight tracking-tight">
            You&apos;re almost there.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-muted-foreground">
            Your {osName} download is starting automatically. Didn&apos;t work?{" "}
            <a
              href={manualUrl}
              onClick={track}
              className="font-medium text-sage underline underline-offset-2"
              data-track="download-manual"
            >
              Download manually
            </a>
            .
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-4xl px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-5">
                <div className="mb-5 grid h-28 place-items-center rounded-xl bg-muted">
                  <StepVisual index={i} isWindows={isWindows} />
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-sage-bg text-xs font-bold text-sage">{i + 1}</span>
                  <h2 className="text-base font-semibold text-foreground">{s.title}</h2>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Free 3-day trial, no card to start. Need a different build?{" "}
            <Link href="/download?platform=macos-silicon" className="underline underline-offset-2 hover:text-foreground">macOS</Link>
            {" · "}
            <Link href="/download?platform=windows" className="underline underline-offset-2 hover:text-foreground">Windows</Link>
            {" · "}
            <a href={MS_STORE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">Microsoft Store</a>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
