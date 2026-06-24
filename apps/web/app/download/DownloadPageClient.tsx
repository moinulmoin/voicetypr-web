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

/** The Voicetypr app icon — the mark on a clean dark tile (matches the real app icon, no PNG halo). */
function AppTile({ className = "h-12 w-12 rounded-[13px]" }: { className?: string }) {
  return <NeighborApp src="/brand/apps/voicetypr-glyph.svg" alt="Voicetypr" bg="#141416" className={className} />;
}

/** A neighbour app icon — a real logo (svgl) on its brand-coloured tile. */
function NeighborApp({ src, alt, bg, className = "h-12 w-12 rounded-[13px]" }: { src: string; alt: string; bg: string; className?: string }) {
  return (
    <span className={`grid place-items-center shadow-sm ${className}`} style={{ backgroundColor: bg }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-3/5 w-3/5 object-contain" />
    </span>
  );
}

/** A simplified macOS Applications-folder icon. */
function FolderIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 52" className={className} fill="none" aria-hidden>
      <path d="M3 12a5 5 0 0 1 5-5h16l6 6h26a5 5 0 0 1 5 5v3H3v-9z" fill="#2b7cc9" />
      <path d="M1.5 19.5A4.5 4.5 0 0 1 6 15h52a4.5 4.5 0 0 1 4.5 4.5V44a5 5 0 0 1-5 5H6.5a5 5 0 0 1-5-5V19.5z" fill="#54a8f0" />
    </svg>
  );
}

const CURSOR_APP = { src: "/brand/apps/cursor.svg", alt: "Cursor", bg: "#0b0b0c" };
const CLAUDE_APP = { src: "/brand/apps/claude.svg", alt: "Claude", bg: "#d97757" };

function StepVisual({ index, isWindows }: { index: number; isWindows: boolean }) {
  // 1 — the installer in your downloads
  if (index === 0) {
    return (
      <span className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-sm">
        <AppTile className="h-7 w-7 rounded-lg" />
        <span className="text-sm font-medium text-foreground">{isWindows ? "Voicetypr-setup.exe" : "Voicetypr.dmg"}</span>
        <Bi name="check" className="ml-1 text-sm text-sage" />
      </span>
    );
  }

  // 2 — install: a real .dmg Finder window (mac) / install progress (windows)
  if (index === 1) {
    if (isWindows) {
      return (
        <span className="w-[210px] rounded-xl border border-border bg-card p-3 shadow-sm">
          <span className="flex items-center gap-2">
            <AppTile className="h-6 w-6 rounded-md" />
            <span className="text-xs font-medium text-foreground">Installing Voicetypr&hellip;</span>
          </span>
          <span className="mt-2.5 block h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <span className="block h-full w-2/3 rounded-full bg-sage" />
          </span>
        </span>
      );
    }
    return (
      <span className="w-full max-w-[240px] overflow-hidden rounded-xl border border-border bg-card shadow-md">
        <span className="flex items-center gap-1.5 border-b border-border bg-muted px-3 py-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-1.5 text-[11px] font-medium text-muted-foreground">Voicetypr</span>
        </span>
        <span className="flex items-center justify-center gap-3.5 px-4 py-4">
          <span className="flex flex-col items-center gap-1.5">
            <AppTile className="h-12 w-12 rounded-[13px] shadow-sm" />
            <span className="text-[10px] text-muted-foreground">Voicetypr</span>
          </span>
          <Bi name="arrow" className="text-lg text-muted-foreground" />
          <span className="flex flex-col items-center gap-1.5">
            <FolderIcon className="h-12 w-12" />
            <span className="text-[10px] text-muted-foreground">Applications</span>
          </span>
        </span>
      </span>
    );
  }

  // 3 — launched: Voicetypr in your dock (mac) / taskbar (windows), beside your apps
  if (isWindows) {
    return (
      <span className="flex items-center gap-2.5 rounded-xl border border-border bg-card/70 px-3 py-2 shadow-md backdrop-blur-xl">
        <NeighborApp {...CURSOR_APP} className="h-9 w-9 rounded-lg" />
        <span className="relative">
          <AppTile className="h-9 w-9 rounded-lg shadow-sm" />
          <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-sage" />
        </span>
        <NeighborApp {...CLAUDE_APP} className="h-9 w-9 rounded-lg" />
      </span>
    );
  }
  return (
    <span className="flex items-end gap-3 rounded-[20px] border border-white/30 bg-card/65 px-3.5 py-2.5 shadow-xl backdrop-blur-xl">
      <NeighborApp {...CURSOR_APP} className="h-12 w-12 rounded-[13px]" />
      <span className="relative">
        <AppTile className="h-12 w-12 -translate-y-1 rounded-[14px] shadow-lg ring-2 ring-sage/40" />
        <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground/50" />
      </span>
      <NeighborApp {...CLAUDE_APP} className="h-12 w-12 rounded-[13px]" />
    </span>
  );
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

const MAC_FAQS = [
  {
    q: "Is the Mac app notarized?",
    a: "Yes — Voicetypr is notarized by Apple, so it opens normally with no Gatekeeper warnings or right-click workarounds. Just open it and start dictating.",
  },
  {
    q: "Apple Silicon or Intel — which build?",
    a: "Macs from 2020 on are Apple Silicon (M-series) — use the default build. Older Intel Macs can grab the Intel build from the “Need a different build?” links above.",
  },
  {
    q: "Does it work fully offline?",
    a: "Yes — transcription runs on-device with local models, so your voice never leaves your Mac. Optional cloud AI formatting is opt-in and uses your own key.",
  },
  {
    q: "Which macOS versions are supported?",
    a: "macOS 13 (Ventura) and later, on both Apple Silicon and Intel.",
  },
];

const WIN_FAQS = [
  {
    q: "“Windows protected your PC” / Unknown publisher?",
    a: "SmartScreen shows that because the installer isn’t EV-code-signed yet. Click More info → Run anyway — it’s the official build straight from our GitHub releases.",
  },
  {
    q: "My antivirus flagged it — is it safe?",
    a: "New, unsigned installers occasionally trip a false positive. The build comes directly from our public GitHub releases, where you can verify the source.",
  },
  {
    q: "Does it work fully offline?",
    a: "Yes — transcription runs on-device with local models, so your voice never leaves your PC. Optional cloud AI formatting is opt-in and uses your own key.",
  },
  {
    q: "Which Windows versions are supported?",
    a: "Windows 10 and 11 (64-bit). Prefer the store? There’s a Microsoft Store build too.",
  },
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
      // Programmatic <a> click is the reliable cross-browser download trigger —
      // it downloads the attachment without navigating this page away.
      const a = document.createElement("a");
      a.href = directUrl;
      a.download = "";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, 800);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const steps = isWindows ? WIN_STEPS : MAC_STEPS;
  const osName = isWindows ? "Windows" : "macOS";
  const faqs = isWindows ? WIN_FAQS : MAC_FAQS;

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
                <div className="mb-5 grid h-32 place-items-center rounded-xl bg-muted">
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

        <section className="mx-auto mt-16 max-w-[900px] px-6 pb-4">
          <h2 className="text-balance text-center font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
            Common {osName} <span className="text-sage">questions</span>
          </h2>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="mb-2 text-[15.5px] font-semibold tracking-tight text-foreground">{f.q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
