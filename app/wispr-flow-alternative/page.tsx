import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, Suspense } from "react";
import { Check, Minus } from "lucide-react";
import RelatedGuidesSection from "../components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Pricing from "../components/sections/Pricing";
import { SuccessModal } from "../components/SuccessModal";

export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Wispr Flow Alternative",
  description:
    "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Wispr Flow alternative? Lifetime license, cross-platform, offline by default.",
  keywords: [
    "wispr flow alternative",
    "wispr flow alternative mac",
    "wispr flow alternative windows",
    "offline dictation app",
    "offline voice to text",
    "pay once voice typing",
    "lifetime dictation app",
    "private voice dictation",
  ],
  alternates: {
    canonical: "https://voicetypr.com/wispr-flow-alternative",
  },
  openGraph: {
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Wispr Flow Alternative",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Wispr Flow alternative? Lifetime license, cross-platform, offline by default.",
    url: "https://voicetypr.com/wispr-flow-alternative",
    siteName: "VoiceTypr",
    images: [
      {
        url: "/voicetypr-og.png",
        width: 1200,
        height: 630,
        alt: "VoiceTypr — Wispr Flow Alternative",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Wispr Flow Alternative",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Wispr Flow alternative? Lifetime license, cross-platform, offline by default.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

type ComparisonValue =
  | { type: "check"; text: string }
  | { type: "cross"; text: string }
  | { type: "text"; text: string };

const check = (text: string): ComparisonValue => ({ type: "check", text });
const cross = (text: string): ComparisonValue => ({ type: "cross", text });
const neutral = (text: string): ComparisonValue => ({ type: "text", text });

const comparison: Array<{
  category: string;
  rows: Array<{ label: string; voicetypr: ComparisonValue; wispr: ComparisonValue }>;
}> = [
  {
    category: "Pricing",
    rows: [
      {
        label: "Pricing model",
        voicetypr: check("One-time purchase"),
        wispr: cross("Subscription only"),
      },
      {
        label: "Entry price",
        voicetypr: check("$39 once"),
        wispr: neutral("$15/mo or $12/mo annual"),
      },
      {
        label: "2-year cost (VoiceTypr / annual plan)",
        voicetypr: check("$39 once"),
        wispr: neutral("$288 ongoing"),
      },
      {
        label: "Free trial",
        voicetypr: check("3 days, full features"),
        wispr: neutral("14-day Pro trial, then paid"),
      },
    ],
  },
  {
    category: "Privacy & architecture",
    rows: [
      {
        label: "Where audio is processed",
        voicetypr: check("Locally on your device"),
        wispr: cross("Cloud (Wispr's servers)"),
      },
      {
        label: "Internet connection for transcription",
        voicetypr: check("No, after setup"),
        wispr: cross("Yes — real-time cloud dictation"),
      },
      {
        label: "Voice transcribed on device",
        voicetypr: check("Yes, by default"),
        wispr: cross("No — cloud processing"),
      },
    ],
  },
  {
    category: "Platform",
    rows: [
      {
        label: "macOS support",
        voicetypr: check("macOS 13+ (Apple Silicon & Intel)"),
        wispr: check("Yes"),
      },
      {
        label: "Windows support",
        voicetypr: check("Windows 10+"),
        wispr: neutral("Verify current release"),
      },
      {
        label: "One license, both platforms",
        voicetypr: check("Yes (public device-count options cover 1, 2, or 4 machines)"),
        wispr: neutral("Per-user license"),
      },
    ],
  },
  {
    category: "Works with",
    rows: [
      {
        label: "Cursor / Claude / ChatGPT / VS Code",
        voicetypr: check("Any text field, any app"),
        wispr: check("Any text field, any app"),
      },
      {
        label: "Slack, Gmail, Notion, Linear",
        voicetypr: check("Yes"),
        wispr: check("Yes"),
      },
    ],
  },
];

export default function WisprFlowAlternativePage() {
  return (
    <>
      <Header />

      <main className="bg-[#0a0a0a] text-white">
        {/* Hero Section */}
        <section className="border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 pt-16 pb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-sm text-white/60 mb-6">
                Wispr Flow Alternative
              </div>
              <h1 className="text-6xl font-semibold tracking-[-2.5px] leading-none mb-6">
                VoiceTypr — Offline AI Voice Dictation for Mac &amp; Windows
              </h1>
              <p className="text-2xl text-white/70 leading-tight mb-8">
                A private, lifetime-priced alternative to Wispr Flow that works on both Mac and Windows with offline dictation by default.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="inline-flex h-14 items-center rounded-xl bg-white px-8 text-lg font-medium text-black transition hover:bg-white/90 active:scale-[0.985]"
                >
                  Download free trial
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex h-14 items-center rounded-xl border border-white/20 px-8 text-lg font-medium transition hover:bg-white/5 active:scale-[0.985]"
                >
                  See pricing
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/50">3-day free trial • No credit card • Pay once, keep forever</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="border-b border-white/10 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-10 text-center">
              <div className="text-sm font-medium tracking-[3px] text-white/50">HEAD-TO-HEAD</div>
              <h2 className="mt-3 text-5xl font-semibold tracking-[-1.5px]">VoiceTypr vs Wispr Flow</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-5 pr-8 text-lg font-medium text-white/80">Feature</th>
                    <th className="py-5 px-8 text-lg font-medium">VoiceTypr</th>
                    <th className="py-5 pl-8 text-lg font-medium text-white/60">Wispr Flow</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((group, groupIndex) => (
                    <Fragment key={groupIndex}>
                      <tr className="border-t border-white/10 bg-white/[0.015]">
                        <td colSpan={3} className="px-8 py-4 text-sm font-semibold tracking-[1px] text-white/60">
                          {group.category}
                        </td>
                      </tr>
                      {group.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-t border-white/10">
                          <td className="py-5 pr-8 text-[15px] text-white/80">{row.label}</td>
                          <td className="py-5 px-8">
                            <div className="flex items-center gap-3 text-[15px]">
                              {row.voicetypr.type === "check" && <Check className="h-4 w-4 text-emerald-400" />}
                              {row.voicetypr.type === "cross" && <Minus className="h-4 w-4 text-red-400/70" />}
                              <span>{row.voicetypr.text}</span>
                            </div>
                          </td>
                          <td className="py-5 pl-8 text-[15px] text-white/60">
                            <div className="flex items-center gap-3">
                              {row.wispr.type === "check" && <Check className="h-4 w-4 text-emerald-400/70" />}
                              {row.wispr.type === "cross" && <Minus className="h-4 w-4 text-red-400/40" />}
                              <span>{row.wispr.text}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why People Switch */}
        <section className="border-b border-white/10 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-10 text-center">
              <div className="text-sm font-medium tracking-[3px] text-white/50">REAL FEEDBACK</div>
              <h2 className="mt-3 text-5xl font-semibold tracking-[-1.5px]">Why people switch from Wispr Flow</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.015] p-8">
                <p className="text-lg leading-snug text-white/80">
                  “I switched from Wispr Flow because I didn&apos;t want another monthly subscription, and I needed something that works on both Mac and Windows. VoiceTypr ticks both boxes. One payment, no ongoing costs, exactly what I was looking for.”
                </p>
                <div className="mt-6 text-sm text-white/50">— Catherine E.</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.015] p-8">
                <p className="text-lg leading-snug text-white/80">
                  “The app is incredible, I did not expect it to be so fast while fully offline!”
                </p>
                <div className="mt-6 text-sm text-white/50">— Stephen K. L.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="mx-auto mb-5 max-w-[760px] text-[clamp(36px,5vw,56px)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
              Try the Wispr Flow alternative with a 3-day trial
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-[16px] leading-[1.55] text-white/72">
              No credit card. Transcription runs locally by default. Pay once, no subscription.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/download"
                data-track="wispr-alt-final-cta-click"
                className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition duration-300 ease-out hover:bg-editorial-surface active:scale-95"
              >
                Start free trial
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center rounded-md border border-white/18 bg-white/8 px-5 text-sm font-medium text-white transition hover:bg-white/14 active:scale-95"
              >
                Buy lifetime license
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Suspense>
        <SuccessModal />
      </Suspense>
      <Footer />
    </>
  );
}
