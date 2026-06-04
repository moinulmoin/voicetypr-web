import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RelatedGuidesSection from "../components/RelatedGuidesSection";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Superwhisper Alternative",
  description:
    "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Superwhisper alternative? Local transcription by default, lifetime license, no subscription.",
  keywords: [
    "superwhisper alternative",
    "superwhisper alternative windows",
    "offline dictation app",
    "pay once voice typing",
    "lifetime dictation app",
    "private voice dictation",
  ],
  alternates: {
    canonical: "https://voicetypr.com/superwhisper-alternative",
  },
  openGraph: {
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Superwhisper Alternative",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Superwhisper alternative? Local transcription by default, lifetime license, no subscription.",
    url: "https://voicetypr.com/superwhisper-alternative",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Superwhisper Alternative",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Superwhisper alternative? Local transcription by default, lifetime license, no subscription.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

export default function SuperwhisperAlternativePage() {
  return (
    <>
      <Header />

      <main className="bg-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-sm text-white/60 mb-6">
              Superwhisper Alternative
            </div>
            <h1 className="text-6xl font-semibold tracking-[-2.5px] leading-none mb-6">
              VoiceTypr — Offline AI Voice Dictation for Mac &amp; Windows
            </h1>
            <p className="text-2xl text-white/70 leading-tight mb-8">
              A private, lifetime-priced Superwhisper alternative that works on both Mac and Windows with offline dictation by default.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/download"
                className="inline-flex h-14 items-center rounded-xl bg-white px-8 text-lg font-medium text-black transition hover:bg-white/90 active:scale-[0.985]"
              >
                Download free trial
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-14 items-center rounded-xl border border-white/20 px-8 text-lg font-medium transition hover:bg-white/5 active:scale-[0.985]"
              >
                See pricing
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/50">3-day free trial • No credit card • Pay once, keep forever</p>
          </div>
        </div>

        <div className="border-t border-white/10 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-10">
              <div className="text-sm font-medium tracking-[3px] text-white/50">WHY PEOPLE SWITCH</div>
              <h2 className="mt-3 text-5xl font-semibold tracking-[-1.5px]">VoiceTypr vs Superwhisper</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.015] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <div className="font-medium">Offline by default</div>
                </div>
                <p className="text-white/70">Transcription runs locally on your machine. No cloud required for core dictation.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.015] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <div className="font-medium">Mac + Windows</div>
                </div>
                <p className="text-white/70">One app. Same features on both platforms. Superwhisper is Mac-only.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.015] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <div className="font-medium">Pay once</div>
                </div>
                <p className="text-white/70">Lifetime license. No recurring subscription. All future updates included.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.015] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <div className="font-medium">Works in any app</div>
                </div>
                <p className="text-white/70">Global hotkey works in Cursor, Claude, ChatGPT, Gmail, Slack, Notion — everywhere.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-semibold tracking-[-1.5px] mb-6">Ready to switch?</h2>
            <p className="text-xl text-white/70 mb-8">3-day free trial. No credit card. Pay once.</p>
            <Link
              href="/download"
              className="inline-flex h-14 items-center rounded-xl bg-white px-8 text-lg font-medium text-black transition hover:bg-white/90 active:scale-[0.985]"
            >
              Download VoiceTypr
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
