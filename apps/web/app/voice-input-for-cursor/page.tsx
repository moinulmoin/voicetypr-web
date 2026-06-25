import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Voice Input for Cursor — Offline Dictation for Developers | Voicetypr",
  description:
    "Voicetypr is a private offline AI voice dictation app for Mac and Windows. Voice input for Cursor that works offline by default. Dictate prompts, PR notes, and comments into Cursor, Claude, ChatGPT and any text field.",
  keywords: [
    "voice input for cursor",
    "cursor voice typing",
    "cursor dictation",
    "voice to text cursor",
    "offline voice input",
    "ai voice cursor",
  ],
  alternates: {
    canonical: "https://voicetypr.com/voice-input-for-cursor",
  },
  openGraph: {
    title: "Voice Input for Cursor — Offline Dictation for Developers | Voicetypr",
    description:
      "Voicetypr is a private offline AI voice dictation app for Mac and Windows. Voice input for Cursor that works offline by default.",
    url: "https://voicetypr.com/voice-input-for-cursor",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Input for Cursor — Offline Dictation for Developers | Voicetypr",
    description: "Voicetypr is a private offline AI voice dictation app for Mac and Windows. Voice input for Cursor.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const useCases = [
  ["Prompt the agent", "Describe the full change — what should happen, what must not break, and how you'll know it's done — before it shrinks into a too-short prompt."],
  ["Explain a bug", "Dictate reproduction steps and expected behavior directly into the issue, chat, or Cursor composer."],
  ["Write PR notes", "Summarize what changed while the context is still in your head."],
  ["Leave useful comments", "Capture why the code exists, not just what it does, without breaking flow."],
] as const;

const checklist = [
  "Works in Cursor because it pastes text into the focused input, not a special integration.",
  "Dictation runs locally by default; your spoken prompts aren't sent to a cloud transcription service.",
  "Uses the same hotkey pattern across Claude, ChatGPT, VS Code, Slack, and docs.",
  "Starts at $39 once; the 2-device option is $69 for laptop + desktop.",
] as const;

const cursorRelatedGuides: DiscoveryLink[] = [
  {
    href: "/voice-typing",
    eyebrow: "broader workflow",
    title: "Voice typing in every app",
    description:
      "For developers who want the general pay-once dictation story before narrowing to Cursor-specific workflows.",
    ctaLabel: "See the general guide",
  },
  {
    href: "/best/windows-voice-typing",
    eyebrow: "windows developers",
    title: "Windows voice typing",
    description: "A better fit when the stack is Windows-heavy and the comparison starts with built-in tools.",
    ctaLabel: "See the Windows guide",
  },
  {
    href: "/use-cases/developers",
    eyebrow: "why builders switch",
    title: "Developers use case",
    description: "Prompts, PR notes, and issue context—the English around the code, not just Cursor paste-ins.",
    ctaLabel: "See the use case",
  },
];

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

export default function VoiceInputForCursorPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Voicetypr", item: "https://voicetypr.com/" },
      { "@type": "ListItem", position: 2, name: "Voice input for Cursor", item: "https://voicetypr.com/voice-input-for-cursor" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
        <SiteHeader />

        {/* Hero */}
        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-foreground">
                  Voicetypr
                </Link>
                <span aria-hidden>/</span>
                <span>Voice input for Cursor</span>
              </div>

              <h1 className="font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight">
                Voice input for{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  Cursor
                </em>
                , offline by default
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Private voice input that runs offline by default on Mac and Windows with a global hotkey. Hold a key, speak, and the text lands in the Cursor composer — or any other text field on your screen.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Offline by default</span>
                <span>Mac + Windows</span>
                <span>Pay once</span>
              </div>

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
                  See pricing
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Developer workflows */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">Developer workflows</p>
              <h2 className={H2_CLASS}>Write Cursor prompts with your voice</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {useCases.map(([title, body]) => (
                <article key={title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Why it works */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-2 text-sm font-medium text-sage">Why it works</p>
                <h2 className={H2_CLASS}>Cursor rewards context. Voice makes context cheap.</h2>
              </div>
              <ul className="space-y-4">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        {/* Offline + works everywhere */}
        <Section>
          <Container>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-muted p-6">
                <p className="text-sm font-medium text-sage">Offline by default</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                  Your voice never leaves your machine
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  Transcription runs locally using Whisper and Parakeet models. No cloud required for core dictation in Cursor.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-muted p-6">
                <p className="text-sm font-medium text-sage">Works everywhere</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                  One hotkey for Cursor + everything else
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  Global shortcut works in Cursor, Claude, ChatGPT, Gmail, Slack, Notion, VS Code — any text field on your screen.
                </p>
              </article>
            </div>
          </Container>
        </Section>

        {/* Related Guides */}
        <Section>
          <Container>
            <RelatedGuidesSection
              eyebrow="Related guides"
              title="More guides for Cursor and developer dictation"
              description="Compare broader typing guides, Windows-specific options, and developer workflows beyond Cursor paste-ins."
              links={cursorRelatedGuides}
              dataTrackPrefix="voice-input-for-cursor-related-guides"
              embedded
            />
          </Container>
        </Section>

        {/* Final CTA */}
        <FinalCTA
          headline="Voice input for Cursor that actually works offline"
          subtitle="3-day free trial. No credit card. Works in Cursor, Claude, VS Code, and every text field."
          primaryLabel="Start free trial"
          primaryDataTrack="voice-input-cursor-final-cta-click"
          secondaryHref="/#pricing"
          headlineClassName="mx-auto mb-5 max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight"
          subtitleClassName="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75"
        />

        <SiteFooter />
      </main>
    </>
  );
}
