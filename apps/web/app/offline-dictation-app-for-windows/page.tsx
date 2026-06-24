import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import { offlineWindowsRelatedGuides } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Offline Dictation App for Windows in 2026 — Voicetypr",
  description:
    "Voicetypr is an offline dictation app for Windows. Speak into Cursor, ChatGPT, email, docs, and any text field with local transcription from $39 once.",
  keywords: [
    "offline dictation app for windows",
    "windows offline voice typing",
    "windows dictation app",
    "voice to text windows offline",
    "private dictation windows",
  ],
  alternates: {
    canonical: "https://voicetypr.com/offline-dictation-app-for-windows",
  },
  openGraph: {
    title: "Offline Dictation App for Windows in 2026 — Voicetypr",
    description:
      "Offline voice-to-text for Windows. Speak into Cursor, ChatGPT, email, docs, and any app.",
    url: "https://voicetypr.com/offline-dictation-app-for-windows",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline Dictation App for Windows in 2026 — Voicetypr",
    description:
      "Offline voice-to-text for Windows. Speak into Cursor, ChatGPT, email, docs, and any app.",
    images: ["/voicetypr-og.png"],
  },
};

const benefits = [
  "Transcribes your voice on your Windows machine after setup/model download instead of depending on a browser tab or cloud transcription service.",
  "Works in Word, Outlook, Edge, Chrome, Gmail, Google Docs, Cursor, VS Code, Claude, ChatGPT, Slack, Notion, and normal text fields.",
  "Pay once from $39; public device-count options cover 1, 2, or 4 machines, with more devices available by contacting support.",
  "Designed for Windows users who need a real desktop workflow, not a Mac-first tool with Windows as an afterthought.",
] as const;

const workflows = [
  ["Word, Outlook, and browser forms", "Dictate long replies, reports, forms, and everyday office writing without moving everything into a separate dictation editor."],
  ["Cursor and VS Code", "Dictate prompts, bug notes, PR descriptions, commit context, and code comments without leaving the editor."],
  ["Docs and support replies", "Talk through the answer, paste clean text, then edit the final 10%."],
] as const;

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

export default function OfflineDictationForWindowsPage() {
  return (
    <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
      <SiteHeader />

      {/* Hero */}
      <Section className="pt-20 md:pt-24">
        <Container className="max-w-4xl">
          <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight">
            Offline dictation app for Windows —{" "}
            <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              private voice typing
            </em>{" "}
            in every app you already use.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Voicetypr gives Windows users private on-device dictation — hold a shortcut, speak, release, and text appears where you&apos;re typing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/download"
              className="inline-flex h-12 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
            >
              Start 3-day free trial
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted active:scale-95"
            >
              Buy lifetime license
            </Link>
          </div>
        </Container>
      </Section>

      {/* Why it matters */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={`${H2_CLASS} max-w-[760px]`}>
              Windows dictation is still{" "}
              <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                underserved
              </em>
              .
            </h2>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-sage" aria-hidden />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Common workflows */}
      <Section>
        <Container className="max-w-5xl">
          <h2 className={`${H2_CLASS} max-w-[760px]`}>Common workflows</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {workflows.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold leading-snug text-foreground">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <RelatedGuidesSection
        eyebrow="related guides"
        title="More Windows dictation guides"
        description="Compare built-in replacements, broader Windows options, and workflows where typing load matters."
        links={offlineWindowsRelatedGuides}
        dataTrackPrefix="offline-windows-related-guides"
      />

      {/* Final CTA */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground md:px-10 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto mb-5 max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight">
                Try offline Windows dictation with a 3-day trial.
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-balance text-base leading-relaxed text-primary-foreground/75">
                3-day free trial. No credit card. Local transcription in Word, Outlook, Cursor, and every text field.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center rounded-xl bg-background px-5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 active:scale-95"
                >
                  Start 3-day free trial
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-xl border border-primary-foreground/20 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
