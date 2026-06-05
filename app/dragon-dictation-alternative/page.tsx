import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
  description:
    "Looking for a Dragon Dictation alternative? VoiceTypr is an offline AI voice typing app for Mac and Windows. Local transcription by default, lifetime license, no subscription.",
  keywords: [
    "dragon dictation alternative",
    "nuance dragon alternative",
    "offline dictation app",
    "dragon naturallyspeaking alternative",
    "voice typing app mac windows",
    "private dictation app",
  ],
  alternates: {
    canonical: "https://voicetypr.com/dragon-dictation-alternative",
  },
  openGraph: {
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
    description: "VoiceTypr is an offline AI voice dictation app for Mac and Windows. Pay once, no subscription.",
    url: "https://voicetypr.com/dragon-dictation-alternative",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
    description: "VoiceTypr is an offline AI voice dictation app for Mac and Windows. Pay once.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

export default function DragonDictationAlternativePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Dragon Dictation alternative that runs offline
        </h1>

        <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
          VoiceTypr is a modern offline AI voice typing app for Mac and Windows. 
          Local transcription by default, works in any app, and you pay once — no subscription like Dragon.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">OFFLINE BY DEFAULT</div>
            <h3 className="text-2xl font-semibold mb-3">Your voice stays on your machine</h3>
            <p className="text-zinc-400">
              Uses local Whisper and Parakeet models. No cloud required for transcription. 
              Much more private than traditional Dragon setups.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">MAC + WINDOWS</div>
            <h3 className="text-2xl font-semibold mb-3">True cross-platform support</h3>
            <p className="text-zinc-400">
              One app works on both macOS and Windows with the same features. 
              Dragon has historically been stronger on one platform.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">PAY ONCE</div>
            <h3 className="text-2xl font-semibold mb-3">Lifetime license, no recurring fees</h3>
            <p className="text-zinc-400">
              One-time purchase. All future updates included. 
              No annual maintenance fees like Dragon NaturallySpeaking.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">ANY APP</div>
            <h3 className="text-2xl font-semibold mb-3">Works in Cursor, Claude, ChatGPT, browsers</h3>
            <p className="text-zinc-400">
              Global hotkey works in every text field. 
              No need to switch between different dictation modes per application.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href="/download"
            className="inline-flex items-center justify-center rounded-xl bg-white text-black px-8 py-4 text-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            Try VoiceTypr free
          </Link>
          <Link
            href="/#pricing"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-medium hover:bg-white/5 transition-colors"
          >
            See pricing
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-zinc-500">More guides available on the site.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
