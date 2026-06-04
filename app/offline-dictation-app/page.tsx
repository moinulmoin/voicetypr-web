import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
  description:
    "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Dictate into any app with local AI models. No subscription. Pay once.",
  keywords: [
    "offline dictation app",
    "offline voice typing",
    "offline dictation mac",
    "offline dictation windows",
    "local dictation app",
    "private dictation app",
    "offline voice to text",
  ],
  alternates: {
    canonical: "https://voicetypr.com/offline-dictation-app",
  },
  openGraph: {
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Dictate into any app. Pay once, no subscription.",
    url: "https://voicetypr.com/offline-dictation-app",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
    description: "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Pay once.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

export default function OfflineDictationAppPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Offline dictation app for Mac &amp; Windows
        </h1>

        <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
          VoiceTypr is a private offline dictation app that runs entirely on your machine. 
          Dictate into Cursor, Claude, ChatGPT, Gmail, Slack, Notion, and any text field — with no internet required after setup.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">FULLY LOCAL</div>
            <h3 className="text-2xl font-semibold mb-3">Your audio never leaves your device</h3>
            <p className="text-zinc-400">
              Uses Whisper and Parakeet models running locally. No cloud transcription by default. 
              Your voice stays private.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">ANY APP</div>
            <h3 className="text-2xl font-semibold mb-3">Works where your cursor is</h3>
            <p className="text-zinc-400">
              Global hotkey. Works in every text field on macOS and Windows. 
              No per-app installation needed.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">MAC + WINDOWS</div>
            <h3 className="text-2xl font-semibold mb-3">True cross-platform support</h3>
            <p className="text-zinc-400">
              One app. Same features on both operating systems. 
              Apple Silicon, Intel Macs, and Windows 10+ supported.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">PAY ONCE</div>
            <h3 className="text-2xl font-semibold mb-3">Lifetime license, no subscription</h3>
            <p className="text-zinc-400">
              One-time payment. All future updates included. 
              No recurring costs, ever.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href="/download"
            className="inline-flex items-center justify-center rounded-xl bg-white text-black px-8 py-4 text-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            Download VoiceTypr
          </Link>
          <Link
            href="/pricing"
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
