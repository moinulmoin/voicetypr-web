import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, Suspense, type ReactNode } from "react";
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

const relatedGuides: DiscoveryLink[] = [
  {
    href: "/superwhisper-alternative",
    eyebrow: "mac-native option",
    title: "Comparing Superwhisper instead?",
    description:
      "See how VoiceTypr compares if you want a polished Mac workflow but also need Windows and a single lifetime license.",
    ctaLabel: "Read the Superwhisper comparison",
  },
  {
    href: "/aqua-voice-alternative",
    eyebrow: "subscription fatigue",
    title: "Coming from Aqua Voice?",
    description:
      "Same pay-once and local-transcription story, written for buyers who started with Aqua Voice.",
    ctaLabel: "Read the Aqua Voice comparison",
  },
  {
    href: "/offline-dictation-app-for-windows",
    eyebrow: "windows-first",
    title: "Need offline dictation on Windows?",
    description:
      "A focused guide for Windows buyers who want local models, lifetime pricing, and dictation in every text field.",
    ctaLabel: "See the Windows guide",
  },
];

const faqs = [
  {
    q: "What does local transcription mean in VoiceTypr?",
    a: "After setup, your voice is transcribed on your device by default. Optional text cleanup can use a cloud provider you choose — never your audio — and only when you turn it on.",
  },
  {
    q: "How does transcription accuracy compare?",
    a: "Pick a faster or more accurate on-device option in settings. Wispr runs in the cloud — some prefer its accent handling, but you trade privacy and a subscription. Try the 3-day trial in your real apps and compare.",
  },
  {
    q: "Will it work with my Cursor / Claude / ChatGPT workflow?",
    a: "Yes. VoiceTypr pastes text into any application that accepts keyboard input — Cursor, Claude desktop, ChatGPT, VS Code, Slack, Gmail, Notion, Linear, anything. Hold a hotkey, speak, release. Text appears wherever your cursor is.",
  },
  {
    q: "Can I switch without losing my Wispr settings?",
    a: "Dictation apps store settings locally per app, so there's nothing to migrate. Most users are up and running in under 5 minutes: install VoiceTypr, pick a hotkey, download a model, start talking. Your Wispr install keeps working in parallel while you evaluate.",
  },
  {
    q: "What if I need more than 4 devices?",
    a: "Contact support@voicetypr.com and we'll help you get set up.",
  },
  {
    q: "What if I already paid for a year of Wispr Flow?",
    a: "Use them in parallel. Once your Wispr sub expires, don't renew. The savings compound: year two is $0 with VoiceTypr vs $144–180/yr with Wispr.",
  },
  {
    q: "What's the catch with 'lifetime'?",
    a: "No catch. Updates stay included. If we ever ship a fundamentally different product, existing customers get a substantial discount on the new version. We're not playing the rug-pull game.",
  },
];

const steps: Array<{ n: string; title: string; body: ReactNode }> = [
  {
    n: "01",
    title: "Download VoiceTypr",
    body: (
      <>
        Mac .dmg or Windows .exe from{" "}
        <Link href="/download" className="text-white underline-offset-2 hover:underline">
          /download
        </Link>
        . No account required.
      </>
    ),
  },
  {
    n: "02",
    title: "Pick a hotkey and a model",
    body: (
      <>
        Default is <span className="rounded border border-white/20 px-1.5 py-0.5 font-mono text-sm">⌘⇧Space</span> on macOS or{" "}
        <span className="rounded border border-white/20 px-1.5 py-0.5 font-mono text-sm">Ctrl+Shift+Space</span> on Windows.
        Push-to-talk lives on Option/Alt+Space.
      </>
    ),
  },
  {
    n: "03",
    title: "Run both side-by-side for a week",
    body:
      "Use the 3-day trial to test your real daily workflow before buying. Keep using Wispr in parallel so you can compare real output. When your Wispr sub is up for renewal, decide with data instead of a gut feel.",
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
                  “The app is incredible, I did not expect it to be so fast with offline dictation!”
                </p>
                <div className="mt-6 text-sm text-white/50">— Stephen K. L.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-10 max-w-[760px]">
              <div className="text-sm font-medium tracking-[3px] text-white/50">NO MIGRATION · NO ACCOUNT TRANSFER</div>
              <h2 className="mt-3 text-5xl font-semibold tracking-[-1.5px]">How to switch in under five minutes</h2>
            </div>
            <ol className="space-y-9 max-w-[820px]">
              {steps.map((step) => (
                <li key={step.n} className="grid grid-cols-[auto_1fr] gap-6">
                  <span className="pt-0.5 text-[30px] font-semibold leading-none text-white/40">{step.n}</span>
                  <div>
                    <h3 className="mb-1.5 text-[20px] font-semibold leading-[1.25]">{step.title}</h3>
                    <p className="text-[15px] leading-[1.6] text-white/70">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-white/10 py-16" id="faq">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div>
                <div className="text-sm font-medium tracking-[3px] text-white/50">QUESTIONS BEFORE SWITCHING</div>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-1px]">The honest switch FAQ</h2>
                <p className="mt-4 text-[16px] leading-[1.6] text-white/70">
                  Pulled from real conversations with people who actually made the move.
                </p>
              </div>
              <div>
                {faqs.map((faq, i) => (
                  <details
                    key={faq.q}
                    open={i === 0}
                    className="group cursor-pointer border-t border-white/10 py-5 last:border-b last:border-white/10"
                  >
                    <summary className="flex list-none items-start justify-between gap-6 text-[18px] font-semibold leading-[1.3] text-white [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-white/10 text-base font-light text-white/70 transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="max-w-[640px] pt-3.5 text-[15px] leading-[1.6] text-white/70">{faq.a}</div>
                  </details>
                ))}
                <div className="mt-8 text-sm text-white/50">
                  Not answered here?{" "}
                  <a
                    href="mailto:support@voicetypr.com"
                    className="text-white hover:underline"
                    data-track="wispr-alt-faq-contact-click"
                  >
                    Email support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="landing-editorial bg-editorial-bg">
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>
        <RelatedGuidesSection
          eyebrow="still comparing"
          title="Other alternatives worth reading"
          description="If Wispr Flow is not the only tool on your list, these pages lay out the same pay-once and local-transcription case for other popular options."
          links={relatedGuides}
          dataTrackPrefix="wispr-alt-related-guides"
        />
      </div>

      <section className="bg-[#0a0a0a] py-20 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="mx-auto mb-5 max-w-[760px] text-[clamp(36px,5vw,56px)] font-semibold leading-[1.06] tracking-[-0.03em]">
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
              href="#pricing"
              className="inline-flex h-12 items-center rounded-md border border-white/18 bg-white/8 px-5 text-sm font-medium text-white transition hover:bg-white/14 active:scale-95"
            >
              Buy lifetime license
            </Link>
          </div>
        </div>
      </section>

      <Suspense>
        <SuccessModal />
      </Suspense>
      <Footer />
    </>
  );
}
