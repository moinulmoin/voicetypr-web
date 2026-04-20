import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  DollarSign,
  Lock,
  Minus,
  WifiOff,
} from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import GridBackground from "../components/GridBackground";
import Pricing from "../components/sections/Pricing";
import { SuccessModal } from "../components/SuccessModal";

export const metadata: Metadata = {
  title: "Wispr Flow Alternative — VoiceTypr (Offline, Pay-once)",
  description:
    "Looking for a Wispr Flow alternative? VoiceTypr is offline, lifetime-priced, and cross-platform. $35 one-time vs $144+/yr. Transcription runs locally — your voice never leaves your device.",
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
      "Offline AI voice-to-text that runs locally. Pay once, no subscription. Mac + Windows.",
    url: "https://voicetypr.com/wispr-flow-alternative",
    type: "website",
    images: [
      {
        url: "/voicetypr-og.png",
        width: 1200,
        height: 630,
        alt: "VoiceTypr vs Wispr Flow",
      },
    ],
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
        voicetypr: check("$35 lifetime (Pro)"),
        wispr: neutral("$15/mo or $12/mo annual"),
      },
      {
        label: "2-year cost (Pro / annual plan)",
        voicetypr: check("$35 once"),
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
        label: "Requires internet connection",
        voicetypr: check("Optional (only for AI enhancement)"),
        wispr: cross("Yes — real-time cloud dictation"),
      },
      {
        label: "Audio leaves your machine",
        voicetypr: check("Never"),
        wispr: cross("Yes, to cloud processing"),
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
        wispr: check("Yes"),
      },
      {
        label: "One license, both platforms",
        voicetypr: check("Yes (Plus covers 2, Max covers 4 devices)"),
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

const switchReasons = [
  {
    icon: DollarSign,
    title: "Pay once, not every month",
    body:
      "Wispr Flow is $12–15/mo ongoing. VoiceTypr Pro is $35 once. Max is $98 once for 4 devices. You stop paying the day you buy.",
  },
  {
    icon: Lock,
    title: "Your voice stays on your device",
    body:
      "Wispr runs in the cloud — your audio is sent to their servers for transcription. VoiceTypr runs locally using offline models. No cloud, no logs, nothing to leak.",
  },
  {
    icon: WifiOff,
    title: "Works offline, anywhere",
    body:
      "On a plane. In a co-working space with spotty WiFi. On an airgapped machine. VoiceTypr does not require an internet connection for transcription.",
  },
];

const faqs = [
  {
    q: "Is VoiceTypr really offline?",
    a: "Yes. Transcription runs locally using Whisper (macOS + Windows) or Parakeet (macOS Apple Silicon). Your audio never leaves your device. The only time an internet connection is used is for optional AI enhancement features (polishing transcripts via Groq or Gemini), which are off by default and can be disabled entirely.",
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
    q: "Does VoiceTypr have a team plan?",
    a: "Yes — a dedicated Team plan for multi-seat deployments is in active development and launching soon. For now, Max covers 4 devices on a single license, which handles small teams. If you need more seats today, email support@voicetypr.com and we'll sort it out manually.",
  },
  {
    q: "What if I already paid for a year of Wispr Flow?",
    a: "Use them in parallel. Once your Wispr sub expires, don't renew. The savings compound: year two is $0 with VoiceTypr vs $144–180/yr with Wispr.",
  },
  {
    q: "What's the catch with 'lifetime'?",
    a: "No catch. You get free updates forever for the major version line you bought. If we make a fundamentally different product in the future, existing customers get a substantial discount on the new version. We're not playing the rug-pull game.",
  },
];

function CellIcon({ value }: { value: ComparisonValue }) {
  if (value.type === "check") {
    return (
      <Check
        className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
        aria-hidden
      />
    );
  }
  if (value.type === "cross") {
    return (
      <Minus
        className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground/70"
        aria-hidden
      />
    );
  }
  return (
    <span
      className="mt-0.5 inline-block h-4 w-4 flex-shrink-0"
      aria-hidden
    />
  );
}

export default function WisprFlowAlternativePage() {
  return (
    <>
      <main id="main-content" className="relative min-h-screen">
        <GridBackground />
        <Header />

        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 lg:pt-40">
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <Badge variant="outline" className="mb-6">
              Wispr Flow alternative
            </Badge>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              <span className="block bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Pay once. Run offline.
              </span>
              <span className="block bg-gradient-to-r from-foreground/70 via-foreground to-foreground bg-clip-text text-transparent">
                Keep your voice private.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-balance text-xl text-muted-foreground">
              VoiceTypr is the offline, lifetime-priced alternative to Wispr Flow.
              Transcription runs locally on your device — your voice never touches
              a cloud server.
            </p>
            <p className="mt-3 text-lg font-semibold text-primary">
              $35 once. Not $15 every month.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" data-umami-event="wispr-alt-hero-download-click">
                <Link href="/download">
                  Start 3-day free trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#comparison">See the comparison</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why people switch */}
        <section className="relative py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why people switch from Wispr Flow
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                Three differences that actually matter day-to-day.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {switchReasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <Card
                    key={reason.title}
                    className="rounded-2xl border-border/50 bg-card/50 p-6 backdrop-blur-sm"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" aria-hidden />
                      </div>
                      <h3 className="text-lg font-semibold">{reason.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {reason.body}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="relative py-24" id="comparison">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                VoiceTypr vs Wispr Flow
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                Honest side-by-side. Last verified April 2026.
              </p>
            </div>

            <Card className="overflow-hidden rounded-2xl border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border/50 bg-muted/20">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold w-[35%]"></th>
                      <th className="px-4 py-3 text-left font-semibold text-primary">
                        VoiceTypr
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                        Wispr Flow
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((section, sectionIdx) => (
                      <Fragment key={section.category}>
                        <tr
                          key={`header-${section.category}`}
                          className="border-t border-border/30 bg-muted/10"
                        >
                          <th
                            colSpan={3}
                            className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground"
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
                              className={!isLast ? "border-t border-border/20" : ""}
                            >
                              <td className="px-4 py-3 font-medium align-top">
                                {row.label}
                              </td>
                              <td className="px-4 py-3 align-top">
                                <div className="flex items-start gap-2">
                                  <CellIcon value={row.voicetypr} />
                                  <span
                                    className={
                                      row.voicetypr.type === "check"
                                        ? "text-foreground"
                                        : "text-muted-foreground"
                                    }
                                  >
                                    {row.voicetypr.text}
                                  </span>
                                </div>
                              </td>
                              <td className="px-4 py-3 align-top">
                                <div className="flex items-start gap-2">
                                  <CellIcon value={row.wispr} />
                                  <span
                                    className={
                                      row.wispr.type === "check"
                                        ? "text-foreground"
                                        : "text-muted-foreground"
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
            </Card>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Sources: Wispr Flow pricing page (wisprflow.ai/pricing) and
              engineering post (wisprflow.ai/post/technical-challenges, Sep 2025,
              describes &ldquo;cloud-based speech processing infrastructure&rdquo;).
              Where we&rsquo;re uncertain, we said so rather than guessing.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>

        {/* How to switch */}
        <section className="relative py-24">
          <div className="mx-auto max-w-3xl px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                How to switch in under 5 minutes
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                No data migration. No account transfer. Just install and go.
              </p>
            </div>
            <Card className="rounded-2xl border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold">Download VoiceTypr</h3>
                    <p className="text-sm text-muted-foreground">
                      Mac .dmg or Windows .exe from{" "}
                      <Link
                        href="/download"
                        className="underline underline-offset-2 hover:text-foreground"
                      >
                        /download
                      </Link>
                      . No signup required.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold">Pick your hotkey and model</h3>
                    <p className="text-sm text-muted-foreground">
                      Default is Cmd+Shift+Space (macOS) or Ctrl+Shift+Space (Windows). There&rsquo;s also a push-to-talk option on Option/Alt+Space.
                      Pick a Whisper model size based on your hardware — most users
                      run the medium model for the best speed/accuracy balance.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold">Run both side-by-side for a week</h3>
                    <p className="text-sm text-muted-foreground">
                      3-day trial covers a working week. Keep using Wispr in
                      parallel to compare real output. When your Wispr sub is up for
                      renewal, decide with data instead of a gut feel.
                    </p>
                  </div>
                </li>
              </ol>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-24">
          <div className="mx-auto max-w-3xl px-4">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Questions people ask before switching
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${idx}`}
                  className="border-border/50"
                >
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <Card className="rounded-2xl border-border/50 bg-card/50 p-10 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Try VoiceTypr for 3 days. Keep your voice private.
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground sm:text-lg">
                No credit card. No cloud. No subscription. Just speak and paste.
              </p>
              <Button asChild size="lg" data-umami-event="wispr-alt-final-cta-click">
                <Link href="/download">
                  Download VoiceTypr
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
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
