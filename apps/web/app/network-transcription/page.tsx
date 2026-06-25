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
  title: "Network Transcription — Remote Dictation Over Your LAN | Voicetypr",
  description:
    "Run the big local models on your powerful machine and dictate from your light one. Voicetypr network transcription routes dictation to another device over your own Wi-Fi — audio stays on your LAN, never on our servers or any cloud.",
  keywords: [
    "network transcription",
    "remote dictation",
    "LAN whisper",
    "share transcription across devices",
    "local network voice typing",
  ],
  alternates: {
    canonical: "https://voicetypr.com/network-transcription",
  },
  openGraph: {
    title: "Network Transcription — Remote Dictation Over Your LAN | Voicetypr",
    description:
      "Run the big local models on your powerful machine and dictate from your light one. Audio stays on your own network — never on our servers or any cloud.",
    url: "https://voicetypr.com/network-transcription",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Transcription — Remote Dictation Over Your LAN | Voicetypr",
    description: "Run the big local models on your powerful machine and dictate from your light one. Audio stays on your LAN.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const steps = [
  [
    "Enable sharing on the strong machine",
    "On your powerful desktop, turn on network sharing. Voicetypr exposes its local transcription engine over your LAN through a built-in HTTP API. Add an optional password to lock the endpoint down.",
  ],
  [
    "Scan and select it on the light one",
    "On your laptop, open the Models tab and scan for LAN servers. Add the desktop, select it, and every dictation now routes to that machine over your own Wi-Fi.",
  ],
  [
    "Dictate like nothing changed",
    "Hold your hotkey and speak. Audio travels to the strong machine, the big model transcribes it, and the text lands in your focused field — same flow, more horsepower.",
  ],
] as const;

const audience = [
  [
    "Power users with a desktop and a laptop",
    "Keep the heavy Whisper or Parakeet models on the desktop that can actually run them, and dictate from the laptop you carry around the house.",
  ],
  [
    "Weak or older laptops",
    "If your travel machine can't handle the larger local models, borrow the desktop's engine over the network instead of dropping to a smaller model.",
  ],
  [
    "Privacy-conscious teams on a LAN",
    "Stand up one capable machine and let everyone on the local network route to it — without sending a single second of audio to a cloud service.",
  ],
] as const;

const checklist = [
  "Any Voicetypr instance can expose its local transcription engine over the LAN through a built-in HTTP API.",
  "In the Models tab you scan for, add, and select LAN servers — picking one routes all dictation to that machine.",
  "An optional password protects the sharing endpoint, and you can see the real active-connection count.",
  "Windows firewall detection flags blocked connections and walks you through the fix.",
  "Only local models can be shared — cloud STT sources can't be routed over the network.",
] as const;

const faqs = [
  [
    "Does my audio leave my network?",
    "No. Network transcription stays on your LAN, between your own devices. Audio travels from the light machine to the strong one over your Wi-Fi and is transcribed there. It never touches Voicetypr's servers or any third-party cloud.",
  ],
  [
    "Do I need an internet connection?",
    "No. You only need both devices on the same local network. Once a machine is sharing and another has selected it, dictation works fully offline — no internet required.",
  ],
  [
    "How do I secure the sharing endpoint?",
    "Set an optional password on the machine that's sharing. Other devices have to provide it before they can route dictation to that engine, so a stranger on the same network can't quietly use it.",
  ],
  [
    "Can I share a cloud transcription source over the network?",
    "No. Only local models (Whisper, Parakeet) can be shared. Cloud STT sources can't be routed across devices — network transcription is local-engine to local-engine, by design.",
  ],
  [
    "I'm on Windows and connections won't go through — what now?",
    "Voicetypr detects when the Windows firewall is blocking the sharing endpoint and shows you how to remediate it, so the light machine can reach the strong one.",
  ],
] as const;

const networkRelatedGuides: DiscoveryLink[] = [
  {
    href: "/voice-for-ai-agents",
    eyebrow: "ai workflows",
    title: "Voice for AI agents",
    description: "Dictate prompts and context into AI tools — a natural fit once your strong machine is doing the transcribing.",
    ctaLabel: "See the AI agents page",
  },
  {
    href: "/best/offline-dictation",
    eyebrow: "offline by default",
    title: "Offline dictation",
    description: "The broader case for local transcription, for buyers who care most about keeping voice on their own hardware.",
    ctaLabel: "See the offline guide",
  },
  {
    href: "/zero-knowledge",
    eyebrow: "privacy",
    title: "Zero-knowledge voice typing",
    description: "How Voicetypr is built so we never see, touch, or store your transcripts.",
    ctaLabel: "Read about zero-knowledge",
  },
];

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

export default function NetworkTranscriptionPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Voicetypr", item: "https://voicetypr.com/" },
      { "@type": "ListItem", position: 2, name: "Network transcription", item: "https://voicetypr.com/network-transcription" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
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
                <span>Network transcription</span>
              </div>

              <h1 className="font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight">
                Run the big models on your powerful machine,{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  dictate
                </em>{" "}
                from your light one
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Network transcription lets a light laptop route dictation to a powerful desktop over your own Wi-Fi. The strong machine runs the big local model, the light one just speaks — and your audio never leaves your network.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Stays on your LAN</span>
                <span>No internet required</span>
                <span>Local models only</span>
                <span>Ships in 2.0</span>
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

        {/* How it works */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">How it works</p>
              <h2 className={H2_CLASS}>Three steps to dictate across your devices</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {steps.map(([title, body], i) => (
                <article key={title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sage-bg text-sm font-semibold text-sage">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* What you get */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-2 text-sm font-medium text-sage">What you get</p>
                <h2 className={H2_CLASS}>Built into the Models tab, no extra setup</h2>
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

        {/* Who it's for */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">Who it&apos;s for</p>
              <h2 className={H2_CLASS}>One strong machine, many places to dictate from</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {audience.map(([title, body]) => (
                <article key={title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Privacy note */}
        <Section>
          <Container>
            <article className="rounded-2xl border border-border bg-muted p-6 md:p-8">
              <p className="text-sm font-medium text-sage">Stays on your network</p>
              <h2 className="mt-3 text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl">
                Your audio stays between your own devices
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                This is the whole point. Network transcription happens on your LAN, between your machines — audio travels from the light device to the strong one and gets transcribed there. It never touches Voicetypr&apos;s servers or any third-party cloud. Only local models can be shared this way; cloud STT sources can&apos;t be routed over the network. If you later turn on optional cloud STT or AI text formatting, those are opt-in and separate, and AI formatting sends text only, using your own provider and key.
              </p>
            </article>
          </Container>
        </Section>

        {/* FAQ */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">FAQ</p>
              <h2 className={H2_CLASS}>Network transcription questions</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map(([question, answer]) => (
                <article key={question} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{question}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{answer}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Related Guides */}
        <Section>
          <Container>
            <RelatedGuidesSection
              eyebrow="Related guides"
              title="More on local, private dictation"
              description="Compare the AI-tool workflow, the broader offline case, and how Voicetypr keeps your voice on your own hardware."
              links={networkRelatedGuides}
              dataTrackPrefix="network-transcription-related-guides"
              embedded
            />
          </Container>
        </Section>

        {/* Final CTA */}
        <FinalCTA
          headline="Big-model dictation, anywhere on your network"
          subtitle="3-day free trial. No credit card. Pay once from $39. Your voice stays on your own devices."
          primaryLabel="Start free trial"
          primaryDataTrack="network-transcription-final-cta-click"
          secondaryHref="/#pricing"
          headlineClassName="mx-auto mb-5 max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight"
          subtitleClassName="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75"
        />

        <SiteFooter />
      </main>
    </>
  );
}
