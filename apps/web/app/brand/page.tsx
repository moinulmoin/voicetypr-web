import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { Brandmark } from "@/components/marketing/brandmark";
import { CopyButton } from "@/components/marketing/copy-button";

export const metadata: Metadata = {
  title: "Brand Kit — Voicetypr Logos, Colors & Assets",
  description:
    "Download Voicetypr logos, the app mark, wordmark, brand colors, and a copy-ready description. For press, reviews, listicles, and directories.",
  alternates: { canonical: "https://voicetypr.com/brand" },
  openGraph: {
    title: "Brand Kit — Voicetypr Logos, Colors & Assets",
    description:
      "Logos, mark, wordmark, colors, and a copy-ready description for press, reviews, and listicles.",
    url: "https://voicetypr.com/brand",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Kit — Voicetypr Logos, Colors & Assets",
    description: "Logos, mark, wordmark, colors, and a copy-ready description.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

const colors = [
  { name: "Ink", hex: "#1B1B1D", onDark: false },
  { name: "Sage", hex: "#3F7D5B", onDark: false },
  { name: "Canvas", hex: "#FCFCFC", onDark: true },
  { name: "Tile black", hex: "#0B0B0C", onDark: false },
] as const;

const boilerplate = [
  { label: "Name", value: "Voicetypr" },
  { label: "One-liner", value: "Offline AI voice dictation for Mac & Windows." },
  {
    label: "Short description",
    value:
      "Voicetypr is a private, offline-by-default voice-to-text app for macOS and Windows. Hold a hotkey, speak, and your words land in any app — transcribed locally on your device. Pay once, no subscription.",
  },
] as const;

const moreFiles = [
  { label: "Lockup (mark + wordmark)", svg: "/brand/voicetypr-lockup.svg", png: "/brand/voicetypr-lockup.png" },
  { label: "Mark — ink (dark backgrounds: use white)", svg: "/brand/voicetypr-mark-ink.svg", png: "/brand/voicetypr-mark-ink-512.png" },
  { label: "Mark — white", svg: "/brand/voicetypr-mark-white.svg", png: "/brand/voicetypr-mark-white-512.png" },
  { label: "App icon — 1024px", svg: "/brand/voicetypr-mark-tile.svg", png: "/brand/voicetypr-mark-tile-1024.png" },
] as const;

const dos = [
  "Keep clear space around the mark — at least the height of the dot on every side.",
  "Use the sage mark on light or dark; use the dark app tile for icons and avatars.",
  "Use the one-color ink or white marks when you need a single flat color.",
];

const donts = [
  "Don't recolor, restyle, or redraw the mark — use the files as provided.",
  "Don't stretch, rotate, add shadows, gradients, or outlines to the logo.",
  "Don't place the mark on a busy or low-contrast background.",
];

const dlLink =
  "inline-flex items-center rounded-lg border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted";

export default function BrandPage() {
  return (
    <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
      <SiteHeader />

      {/* Hero */}
      <Section className="pt-20 md:pt-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">
                Voicetypr
              </Link>
              <span aria-hidden>/</span>
              <span>Brand kit</span>
            </div>
            <h1 className="font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight">
              Brand{" "}
              <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                kit
              </em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Logos, the app mark, colors, and a copy-ready description. Grab whatever you need for a
              review, a listicle, a directory, or a press piece. The name is always written{" "}
              <strong className="font-semibold text-foreground">Voicetypr</strong> — one capital V.
            </p>
          </div>
        </Container>
      </Section>

      {/* Logos */}
      <Section>
        <Container>
          <div className="mb-8 max-w-[760px]">
            <p className="mb-2 text-sm font-medium text-sage">Logos</p>
            <h2 className={H2_CLASS}>The mark, the icon, and the wordmark</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* App icon (tile) */}
            <article className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="grid h-40 place-items-center bg-[#0b0b0c]">
                <Image src="/brand/voicetypr-mark-tile-512.png" alt="Voicetypr app icon" width={84} height={84} />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-border p-4">
                <span className="text-sm font-medium text-foreground">App icon</span>
                <span className="flex gap-2">
                  <a href="/brand/voicetypr-mark-tile.svg" download className={dlLink}>SVG</a>
                  <a href="/brand/voicetypr-mark-tile-512.png" download className={dlLink}>PNG</a>
                </span>
              </div>
            </article>

            {/* Sage mark */}
            <article className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="grid h-40 place-items-center bg-[#fcfcfc]">
                <Brandmark className="h-16 w-16 text-sage" title="Voicetypr mark" />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-border p-4">
                <span className="text-sm font-medium text-foreground">Mark (sage)</span>
                <span className="flex gap-2">
                  <a href="/brand/voicetypr-mark-sage.svg" download className={dlLink}>SVG</a>
                  <a href="/brand/voicetypr-mark-sage-512.png" download className={dlLink}>PNG</a>
                </span>
              </div>
            </article>

            {/* Wordmark */}
            <article className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="grid h-40 place-items-center bg-[#fcfcfc] px-6">
                <Image src="/brand/voicetypr-wordmark.png" alt="Voicetypr wordmark" width={200} height={47} />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-border p-4">
                <span className="text-sm font-medium text-foreground">Wordmark</span>
                <span className="flex gap-2">
                  <a href="/brand/voicetypr-wordmark.svg" download className={dlLink}>SVG</a>
                  <a href="/brand/voicetypr-wordmark.png" download className={dlLink}>PNG</a>
                </span>
              </div>
            </article>
          </div>

          {/* More files */}
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {moreFiles.map((f) => (
              <li
                key={f.label}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3"
              >
                <span className="text-sm text-muted-foreground">{f.label}</span>
                <span className="flex gap-2">
                  <a href={f.svg} download className={dlLink}>SVG</a>
                  <a href={f.png} download className={dlLink}>PNG</a>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Colors */}
      <Section>
        <Container>
          <div className="mb-8 max-w-[760px]">
            <p className="mb-2 text-sm font-medium text-sage">Colors</p>
            <h2 className={H2_CLASS}>Brand colors</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map((c) => (
              <div key={c.name} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="h-24" style={{ backgroundColor: c.hex }} />
                <div className="flex items-center justify-between gap-2 border-t border-border p-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{c.hex}</p>
                  </div>
                  <CopyButton
                    value={c.hex}
                    label={c.hex}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Boilerplate */}
      <Section>
        <Container>
          <div className="mb-8 max-w-[760px]">
            <p className="mb-2 text-sm font-medium text-sage">Copy &amp; paste</p>
            <h2 className={H2_CLASS}>Ready-made description</h2>
            <p className="mt-3 max-w-[620px] text-base leading-relaxed text-muted-foreground">
              For a listicle, a review, or a directory entry — copy what you need.
            </p>
          </div>

          <div className="space-y-3">
            {boilerplate.map((b) => (
              <div
                key={b.label}
                className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="min-w-0">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-sage">{b.label}</p>
                  <p className="text-[15px] leading-relaxed text-foreground">{b.value}</p>
                </div>
                <CopyButton
                  value={b.value}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Usage */}
      <Section>
        <Container>
          <div className="mb-8 max-w-[760px]">
            <p className="mb-2 text-sm font-medium text-sage">Usage</p>
            <h2 className={H2_CLASS}>A few simple rules</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Check className="h-4 w-4 text-sage" aria-hidden /> Do
              </h3>
              <ul className="space-y-3">
                {dos.map((d) => (
                  <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-sage" aria-hidden />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <X className="h-4 w-4 text-muted-foreground" aria-hidden /> Don&apos;t
              </h3>
              <ul className="space-y-3">
                {donts.map((d) => (
                  <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                    <X className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Questions or need a specific format?{" "}
            <a href="mailto:support@voicetypr.com" className="font-medium text-sage underline underline-offset-2">
              support@voicetypr.com
            </a>
          </p>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
