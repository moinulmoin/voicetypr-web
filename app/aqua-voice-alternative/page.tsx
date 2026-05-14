import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export const metadata: Metadata = {
  title: "Aqua Voice Alternative — VoiceTypr (Offline, Cross-platform, Pay-once)",
  description:
    "Looking for an Aqua Voice alternative? VoiceTypr works on Mac and Windows, runs locally, and starts at $39 once. No cloud dictation dependency.",
  keywords: [
    "aqua voice alternative",
    "aqua dictation alternative",
    "offline dictation app",
    "offline voice to text",
    "pay once voice typing",
    "private dictation app",
  ],
  alternates: {
    canonical: "https://voicetypr.com/aqua-voice-alternative",
  },
  openGraph: {
    title: "Aqua Voice Alternative — VoiceTypr",
    description:
      "Offline voice-to-text for Mac and Windows. One payment, lifetime access.",
    url: "https://voicetypr.com/aqua-voice-alternative",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Voice Alternative — VoiceTypr",
    description:
      "Offline voice-to-text for Mac and Windows. One payment, lifetime access.",
    images: ["/voicetypr-og.png"],
  },
};

const rows = [
  ["Pricing model", "Pay once", "Subscription"],
  ["Entry price", "$39 lifetime", "Monthly subscription"],
  ["Windows support", "Yes", "Mac-focused"],
  ["Offline processing", "Local models on your machine", "Cloud-first workflow"],
  ["Where it works", "Any app with a text field", "Any app with a text field"],
] as const;

const reasons = [
  "You want dictation that still works when the connection is poor.",
  "You write sensitive customer, legal, financial, health, or product notes.",
  "You need one tool across a Mac laptop and Windows workstation.",
  "You want a lifetime license instead of another monthly utility bill.",
] as const;

export default function AquaVoiceAlternativePage() {
  return (
    <main id="main-content" className="landing-editorial min-h-screen">
      <Header />
      <section className="ed-section ed-section-hero pt-32 lg:pt-40">
        <div className="ed-container max-w-4xl">
          <p className="ed-eyebrow">aqua voice alternative</p>
          <h1 className="text-[clamp(40px,6vw,70px)] font-extrabold leading-[1.02] tracking-tight">
            Voice typing without sending every thought to the cloud.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            VoiceTypr runs transcription locally, works on Mac and Windows, and starts at $39 once. It is built for prompts, docs, messages, and notes you would rather keep private.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/download"
              className="group inline-flex h-12 items-center gap-2 rounded-md bg-editorial-ink py-2 pl-5 pr-2 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
            >
              Download for free
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink shadow-sm transition duration-300 ease-out hover:bg-editorial-surface-2 active:scale-95"
            >
              Buy lifetime license
            </Link>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <p className="ed-eyebrow">plain comparison</p>
          <div className="mt-6 overflow-hidden rounded-xl bg-editorial-surface-2 p-1.5">
            <table className="w-full text-left text-sm">
              <tbody className="bg-white">
                {rows.map(([label, voicetypr, aqua]) => (
                  <tr key={label} className="border-b border-editorial-line/50 last:border-b-0">
                    <td className="px-5 py-4 font-medium text-editorial-ink">{label}</td>
                    <td className="px-5 py-4 text-editorial-accent-ink">VoiceTypr: {voicetypr}</td>
                    <td className="px-5 py-4 text-editorial-ink-2">Aqua Voice: {aqua}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-3xl">
          <p className="ed-eyebrow">why people search this</p>
          <h2 className="mt-2 text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-tight">
            The quick win is privacy plus price clarity.
          </h2>
          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3 text-[16px] leading-[1.6] text-editorial-ink-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-editorial-accent-ink" aria-hidden />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
