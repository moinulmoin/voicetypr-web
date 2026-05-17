import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, Suspense } from "react";
import { Check, Minus } from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Pricing from "../components/sections/Pricing";
import { SuccessModal } from "../components/SuccessModal";

export const metadata: Metadata = {
  title: "Wispr Flow Alternative — VoiceTypr (Offline, Pay-once)",
  description:
    "Looking for a Wispr Flow alternative? VoiceTypr is lifetime-priced and cross-platform. $39 one-time vs $144+/yr. Local transcription runs on your machine by default.",
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
    title: "Wispr Flow Alternative — VoiceTypr (Offline, Pay-once)",
    description:
      "Offline AI voice-to-text that runs locally. Pay once, no subscription.",
    url: "https://voicetypr.com/wispr-flow-alternative",
    siteName: "VoiceTypr",
    images: [
      {
        url: "/voicetypr-og.png",
        width: 1200,
        height: 630,
        alt: "VoiceTypr — Wispr Flow alternative",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wispr Flow Alternative — VoiceTypr (Offline, Pay-once)",
    description:
      "Offline AI voice-to-text that runs locally. Pay once, no subscription.",
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

const switchReasons: Array<{
  marker: string;
  title: string;
  body: string;
  meta: string;
}> = [
  {
    marker: "$39",
    title: "Pay once, not every month",
    body:
      "Wispr Flow runs $12–15/mo, ongoing. VoiceTypr Pro is $39 once. Plus is $59 once for 2 devices. Max is $99 once for 4 devices. The day you buy is the day you stop paying.",
    meta: "Outcome · cost",
  },
  {
    marker: "0",
    title: "Your voice is transcribed on your device by default",
    body:
      "Wispr sends audio to its cloud for transcription. VoiceTypr transcribes on your device by default; optional AI enhancement sends text only when you enable it.",
    meta: "Outcome · privacy",
  },
  {
    marker: "∞",
    title: "Works offline, anywhere",
    body:
      "On a plane. In a co-working space with bad WiFi. On a locked-down machine after setup. Local transcription does not require an internet connection.",
    meta: "Outcome · reach",
  },
];

const faqs = [
  {
    q: "What does local transcription mean in VoiceTypr?",
    a: "VoiceTypr transcribes your voice on your machine using Whisper (macOS + Windows) or Parakeet (macOS Apple Silicon) after setup. Optional AI enhancement can send text, never audio, to your configured provider when enabled. It is off by default and can be disabled entirely.",
  },
  {
    q: "How does transcription accuracy compare?",
    a: "VoiceTypr ships multiple Whisper model sizes (tiny to large). Larger models are more accurate but slower. On Apple Silicon, the optimized Parakeet model offers a solid speed/accuracy tradeoff. Wispr uses proprietary cloud models with their own accuracy profile — some users find theirs slightly better on edge cases like accent handling, but at the cost of privacy and a subscription. Try both 3-day trials and see which fits your workflow.",
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

const steps: Array<{ n: string; title: string; body: React.ReactNode }> = [
  {
    n: "01",
    title: "Download VoiceTypr",
    body: (
      <>
        Mac .dmg or Windows .exe from{" "}
        <Link
          href="/download"
          className="text-editorial-ink underline-offset-2 hover:underline"
        >
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
        Default is <span className="ed-kbd">⌘⇧Space</span> on macOS or{" "}
        <span className="ed-kbd">Ctrl+Shift+Space</span> on Windows. Push-to-talk lives on Option/Alt+Space. Most people run the medium Whisper model for the best speed–accuracy tradeoff.
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

function CellIcon({ value }: { value: ComparisonValue }) {
  if (value.type === "check") {
    return (
      <Check
        className="mt-0.5 h-4 w-4 flex-shrink-0 text-editorial-ink"
        aria-hidden
      />
    );
  }
  if (value.type === "cross") {
    return (
      <Minus
        className="mt-0.5 h-4 w-4 flex-shrink-0 text-editorial-ink-3"
        aria-hidden
      />
    );
  }
  return <span className="mt-0.5 inline-block h-4 w-4 flex-shrink-0" aria-hidden />;
}

export default function WisprFlowAlternativePage() {
  return (
    <>
      <main
        id="main-content"
        className="landing-editorial relative min-h-screen"
      >
        <Header />

        {/* Hero */}
        <section className="ed-section pt-[120px] md:pt-[140px] pb-0">
          <div className="ed-container">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex justify-center">
                <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">wispr flow alternative</span>
              </div>

              <h1 className="mb-6 text-balance text-[clamp(42px,6vw,72px)] font-extrabold leading-[1.02] tracking-tight">
                Pay once. Run offline. Keep your voice <em>yours.</em>
              </h1>

              <p className="mx-auto max-w-2xl text-[18px] md:text-[19px] leading-[1.55] text-editorial-ink-2">
                VoiceTypr is the lifetime-priced alternative to Wispr Flow. Your voice is transcribed on your device by default, with optional text-only AI enhancement when enabled.
              </p>

              <p className="mt-4 font-sans font-medium uppercase tracking-[0.12em] text-[12.5px] text-editorial-ink-3">
                $39 once · not $15 every month
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  data-track="wispr-alt-hero-download-click"
                  className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
                >
                  Download for free
                </Link>
                <Link
                  href="#comparison"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-[15px] text-editorial-ink-2 hover:text-editorial-ink underline underline-offset-4 decoration-editorial-line hover:decoration-editorial-ink-2"
                >
                  See the comparison
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why people switch — 3 reasons in surface-2 box */}
        <section className="ed-section">
          <div className="ed-container">
            <div className="rounded-xl bg-editorial-surface-2/80 p-8 md:p-10">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">three differences that matter day to day</div>
              <h2 className="mt-2 mb-9 max-w-[760px] text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-tight">
                Why people switch from Wispr
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {switchReasons.map((reason) => (
                  <article
                    key={reason.title}
                    className="flex min-h-[220px] flex-col gap-3 rounded-xl bg-white p-6"
                  >
                    <div className="text-[34px] font-semibold leading-none text-editorial-ink">
                      {reason.marker}
                    </div>
                    <h3 className="text-[20px] font-semibold leading-[1.2] tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
                      {reason.body}
                    </p>
                    <div className="mt-auto pt-4 font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3">
                      {reason.meta}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="ed-section" id="comparison">
          <div className="ed-container">
            <div className="mb-10 max-w-[760px]">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">the side by side</div>
              <h2 className="mt-2 mb-3 text-[clamp(32px,4.2vw,50px)] font-semibold leading-[1.08] tracking-tight">
                VoiceTypr vs Wispr Flow, plainly
              </h2>
              <p className="text-editorial-ink-2 text-[16px] leading-[1.6]">
                Last verified April 2026. Where we&rsquo;re uncertain we said so rather than guessing.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl bg-editorial-surface-2 p-1.5">
              <div className="overflow-x-auto">
                <table className="w-full text-[14.5px]">
                  <thead className="border-b border-editorial-line/60 bg-white">
                    <tr>
                      <th className="px-5 py-4 text-left font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3 w-[35%]">
                        Criterion
                      </th>
                      <th className="px-5 py-4 text-left font-sans text-[18px] text-editorial-ink">
                        VoiceTypr
                      </th>
                      <th className="px-5 py-4 text-left font-sans text-[18px] text-editorial-ink-2">
                        Wispr Flow
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((section, sectionIdx) => (
                      <Fragment key={section.category}>
                        <tr
                          key={`header-${section.category}`}
                          className="border-t border-editorial-line/60 bg-editorial-surface-2/60"
                        >
                          <th
                            colSpan={3}
                            className="px-5 py-2.5 text-left font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3"
                          >
                            {section.category}
                          </th>
                        </tr>
                        {section.rows.map((row, rowIdx) => {
                          const isLast =
                            sectionIdx === comparison.length - 1 &&
                            rowIdx === section.rows.length - 1;
                          return (
                            <tr
                              key={`${section.category}-${row.label}`}
                              className={
                                !isLast
                                  ? "border-t border-editorial-line/60"
                                  : ""
                              }
                            >
                              <td className="px-5 py-3.5 font-medium align-top text-editorial-ink">
                                {row.label}
                              </td>
                              <td className="px-5 py-3.5 align-top">
                                <div className="flex items-start gap-2">
                                  <CellIcon value={row.voicetypr} />
                                  <span
                                    className={
                                      row.voicetypr.type === "check"
                                        ? "text-editorial-ink"
                                        : "text-editorial-ink-2"
                                    }
                                  >
                                    {row.voicetypr.text}
                                  </span>
                                </div>
                              </td>
                              <td className="px-5 py-3.5 align-top">
                                <div className="flex items-start gap-2">
                                  <CellIcon value={row.wispr} />
                                  <span
                                    className={
                                      row.wispr.type === "check"
                                        ? "text-editorial-ink"
                                        : "text-editorial-ink-2"
                                    }
                                  >
                                    {row.wispr.text}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4 font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3">
              Sources · wisprflow.ai/pricing · wisprflow.ai/post/technical-challenges (Sep 2025)
            </p>
          </div>
        </section>

        {/* Pricing — shared editorial component */}
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>

        {/* How to switch */}
        <section className="ed-section">
          <div className="ed-container">
            <div className="mb-10 max-w-[760px]">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">no migration · no account transfer</div>
              <h2 className="mt-2 text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-tight">
                How to switch in under five minutes
              </h2>
            </div>

            <div className="max-w-[820px] rounded-xl bg-editorial-surface-2 p-8 md:p-10">
              <ol className="space-y-9">
                {steps.map((step) => (
                  <li key={step.n} className="grid grid-cols-[auto_1fr] gap-6">
                    <span className="pt-0.5 text-[30px] font-semibold leading-none text-editorial-ink">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="mb-1.5 text-[20px] font-semibold leading-[1.25] tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-editorial-ink-2 text-[15px] leading-[1.6]">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="ed-section" id="faq">
          <div className="ed-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
              <div>
                <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">questions people ask before switching</div>
                <h2 className="mb-4 mt-2 text-[clamp(32px,3.6vw,44px)] font-semibold leading-[1.08] tracking-tight">
                  The honest switch FAQ
                </h2>
                <p className="text-editorial-ink-2 text-[16px] leading-[1.6]">
                  Pulled from real conversations with people who actually made the move.
                </p>
              </div>

              <div>
                {faqs.map((faq, i) => (
                  <details
                    key={faq.q}
                    open={i === 0}
                    className="group border-t border-editorial-line last:border-b last:border-editorial-line py-5 cursor-pointer"
                  >
                    <summary className="list-none flex justify-between items-start gap-6 font-sans font-semibold text-[19px] leading-[1.3] text-editorial-ink [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span className="w-7 h-7 rounded-full bg-editorial-surface-2 grid place-items-center text-base font-light text-editorial-ink-2 flex-shrink-0 [transition:transform_400ms_cubic-bezier(0.32,0.72,0,1)] group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="text-editorial-ink-2 text-[15px] leading-[1.6] pt-3.5 max-w-[640px]">
                      {faq.a}
                    </div>
                  </details>
                ))}

                <div className="mt-8 text-sm text-editorial-ink-3">
                  Not answered here?{" "}
                  <a
                    href="mailto:support@voicetypr.com"
                    className="text-editorial-ink hover:underline"
                    data-track="wispr-alt-faq-contact-click"
                  >
                    Email support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="ed-section">
          <div className="ed-container">
            <div className="overflow-hidden rounded-xl bg-editorial-surface-2 px-8 py-16 text-center md:py-20">
              <div className="mb-6 flex justify-center">
                <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">try it for three days</span>
              </div>
              <h2 className="mx-auto mb-5 max-w-[760px] text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.02] tracking-tight">
                Speak. Paste. <em>Keep your voice yours.</em>
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-editorial-ink-2 text-[16px] leading-[1.55]">
                No credit card. Local transcription by default. No subscription.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  data-track="wispr-alt-final-cta-click"
                  className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
                >
                  Download for free
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink shadow-sm transition duration-300 ease-out hover:bg-editorial-bg active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <Suspense>
        <SuccessModal />
      </Suspense>
    </>
  );
}
