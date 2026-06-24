import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Zero-Knowledge Voice Typing — We Never See Your Transcripts — Voicetypr",
  description:
    "Voicetypr uses zero-knowledge architecture. We never see, touch, or store your transcripts. Audio processing occurs locally on your machine. macOS and Windows.",
  keywords: [
    "zero knowledge dictation",
    "zero knowledge voice typing",
    "private transcription",
    "secure voice typing",
    "local transcription architecture",
    "privacy first dictation",
    "no cloud audio storage",
  ],
  alternates: {
    canonical: "https://voicetypr.com/zero-knowledge",
  },
  openGraph: {
    title: "Zero-Knowledge Voice Typing — We Never See Your Transcripts — Voicetypr",
    description:
      "Voicetypr uses zero-knowledge architecture. We never see, touch, or store your transcripts. Audio processing occurs locally on your machine.",
    url: "https://voicetypr.com/zero-knowledge",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero-Knowledge Voice Typing — Voicetypr",
    description: "We never see, touch, or store your transcripts. Audio processing occurs locally on your machine.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What does zero-knowledge mean for Voicetypr?",
    a: "It means we cannot see, access, or store your audio recordings or transcripts. The transcription happens entirely on your local device using on-device AI models. We never receive the audio file, the transcript, or any intermediate representation. The only data we see is license validation and optional support diagnostics you choose to send.",
  },
  {
    q: "Can you access my transcripts if I report a bug?",
    a: "No. Bug reports and crash diagnostics contain technical information about the app and your system, but they do not include your transcripts or audio recordings. If you choose to include a specific example in a support email, that is under your control — we do not extract it automatically.",
  },
  {
    q: "What happens if I enable AI text formatting?",
    a: "Optional AI formatting sends only the transcribed text — never the original audio — to the AI provider you configure. Voicetypr itself still does not see or store this text. You choose the provider, or disable the feature entirely. The audio recording stays on your machine regardless.",
  },
  {
    q: "Is my data encrypted on my device?",
    a: "Voicetypr relies on your operating system's built-in encryption and access controls. On macOS, this includes FileVault and user permissions. On Windows, this includes BitLocker and NTFS permissions. We do not add a separate encryption layer because modern OS-level encryption is robust and well-tested.",
  },
  {
    q: "How do you verify my license without seeing my data?",
    a: "License validation is completely separate from transcription. Your device sends a license key and device identifier to our servers for activation and periodic validation. This happens over HTTPS and does not include any audio, transcripts, or usage content. The two systems are architecturally isolated.",
  },
  {
    q: "Can I verify that no data is being sent during transcription?",
    a: "Yes. You can run Voicetypr on a network monitoring tool or firewall to observe that no traffic is generated during dictation. The only network activity occurs during license checks, updates, and optional support reports — never during the actual transcription of your voice.",
  },
] as const;

const relatedGuides: DiscoveryLink[] = [
  {
    href: "/hipaa-compliant-dictation",
    eyebrow: "Healthcare",
    title: "HIPAA-Eligible Dictation",
    description: "Designed to support healthcare providers in maintaining strict HIPAA compliance.",
    ctaLabel: "Explore HIPAA compliance",
  },
  {
    href: "/air-gapped",
    eyebrow: "Offline",
    title: "Air-Gap Ready Dictation",
    description: "Works offline by default. Audio stays on your machine during transcription.",
    ctaLabel: "Explore air-gap capabilities",
  },
  {
    href: "/gdpr-compliant",
    eyebrow: "Compliance",
    title: "GDPR-Compliant Dictation",
    description: "EU data protection with local processing and German-hosted infrastructure.",
    ctaLabel: "Learn about GDPR compliance",
  },
  {
    href: "/best/offline-dictation",
    eyebrow: "Product",
    title: "Offline Dictation App",
    description: "Private offline AI voice dictation for Mac and Windows. No subscription.",
    ctaLabel: "See the offline dictation page",
  },
];

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

const problems = [
  {
    title: "Your voice is stored on someone else's servers",
    body:
      "Cloud dictation services retain audio recordings for quality assurance, debugging, or model improvement. That means your conversations, dictation, and potentially sensitive content live on infrastructure you do not control, subject to the provider's security practices and data retention policies.",
  },
  {
    title: "Transcripts are readable by provider staff",
    body:
      "Even if the audio is deleted, the transcript often remains. Cloud providers may use transcripts for quality control, content moderation, or model training. That means your notes, ideas, and sensitive content are accessible to employees and systems within the provider's organization.",
  },
  {
    title: "You cannot verify what is collected",
    body:
      "Closed-source cloud services do not let you audit their data collection. You must trust their privacy policy, which can change. With local processing, you can verify with network tools that no data is transmitted during transcription.",
  },
] as const;

const solutions = [
  {
    title: "Audio never reaches us",
    body:
      "Your microphone captures audio, and local AI models (Whisper and Parakeet) process it entirely on your device. The audio file is never transmitted to Voicetypr servers or any cloud transcription service.",
    meta: "Purely local processing",
  },
  {
    title: "Transcripts stay on your machine",
    body:
      "We do not store, log, or have access to your transcripts. The text is produced on your device and pasted into the application you are using. We cannot retrieve it, even if compelled.",
    meta: "No server-side storage",
  },
  {
    title: "License checks are isolated",
    body:
      "The only network communication is for license validation, updates, and optional support reports. These are architecturally separate from the transcription system and contain no audio or transcript data.",
    meta: "Clean separation",
  },
] as const;

const professions = [
  {
    title: "Journalists and investigators",
    body:
      "Dictate interview notes, source conversations, and research without risking exposure through a cloud provider. Your sources and story content remain on your device. No third party can subpoena transcripts they do not possess.",
  },
  {
    title: "Lawyers and legal professionals",
    body:
      "Draft client communications, case notes, and briefs without sending privileged information to external servers. Local transcription preserves attorney-client privilege by keeping the content within your controlled environment.",
  },
  {
    title: "Researchers and academics",
    body:
      "Transcribe research notes, field observations, and preliminary findings without exposing unpublished work to cloud providers. You maintain full control over your intellectual property and research data.",
  },
] as const;

export default function ZeroKnowledgePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
        <SiteHeader />

        {/* Hero */}
        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight">
                Zero-knowledge architecture{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  for your voice
                </em>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                We never see, touch, or store your transcripts. Audio processing occurs entirely on your machine.
                No subscription. macOS and Windows.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>No audio on our servers</span>
                <span>No transcript storage</span>
                <span>Lifetime license</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
                >
                  Start 3-day free trial
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted active:scale-95"
                >
                  Read Privacy Policy
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* The Problem */}
        <Section>
          <Container>
            <h2 className={`${H2_CLASS} max-w-[760px]`}>
              Why most dictation services compromise your privacy
            </h2>
            <div className="mt-8 max-w-[760px]">
              {problems.map((problem, i) => (
                <article key={i} className="border-b border-border py-6 last:border-b-0">
                  <div className="mb-2 font-sans text-sm font-semibold text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold leading-snug text-foreground">{problem.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{problem.body}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* The Solution */}
        <Section>
          <Container>
            <div className="rounded-3xl bg-muted p-8 md:p-12">
              <h2 className={`${H2_CLASS} max-w-[760px]`}>
                Our architecture is designed to know nothing
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {solutions.map((solution, i) => (
                  <article key={i} className="flex min-h-60 flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                    <div className="font-sans text-4xl font-bold leading-none text-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">{solution.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{solution.body}</p>
                    <div className="mt-auto pt-3 text-xs font-medium text-sage">{solution.meta}</div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Use Cases */}
        <Section>
          <Container>
            <h2 className={`${H2_CLASS} max-w-[760px]`}>
              Three professions where zero-knowledge matters
            </h2>
            <div className="mt-8 max-w-[820px] rounded-2xl bg-muted p-7 md:p-10">
              <ol className="grid gap-9">
                {professions.map((profession, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-6">
                    <span className="font-sans text-3xl font-bold leading-none text-sage">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="mb-1.5 text-xl font-semibold leading-snug text-foreground">{profession.title}</h3>
                      <p className="text-[15px] leading-relaxed text-muted-foreground">{profession.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div>
                <h2 className={H2_CLASS}>
                  The honest{" "}
                  <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                    zero-knowledge
                  </em>{" "}
                  FAQ
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Pulled from real conversations with security-conscious professionals who need verifiable privacy.
                </p>
              </div>

              <div>
                {faqs.map((faq, i) => (
                  <details
                    key={faq.q}
                    open={i === 0}
                    className="group cursor-pointer border-t border-border py-5 last:border-b last:border-border"
                  >
                    <summary className="flex list-none items-start justify-between gap-6 text-lg font-semibold leading-snug text-foreground [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-muted text-base font-light text-muted-foreground transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="max-w-[640px] pt-3.5 text-[15px] leading-relaxed text-muted-foreground">
                      {faq.a}
                    </div>
                  </details>
                ))}

                <div className="mt-8 text-sm text-muted-foreground">
                  Not answered here?{" "}
                  <a
                    href="mailto:support@voicetypr.com"
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    Email support
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Guides */}
        <Section>
          <Container>
            <RelatedGuidesSection
              eyebrow="related pages"
              title="If privacy is your concern, these pages matter too"
              description="Explore our HIPAA compliance, offline capabilities, and EU data protection positioning."
              links={relatedGuides}
              dataTrackPrefix="zero-knowledge-related-guides"
              embedded
            />
          </Container>
        </Section>

        {/* Final CTA */}
        <Section>
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground md:px-10 md:py-16">
              <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
              <div className="relative">
                <h2 className="mx-auto max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight">
                  Dictate with{" "}
                  <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                    confidence
                  </em>
                </h2>
                <p className="mx-auto mt-5 mb-8 max-w-xl text-balance text-base leading-relaxed text-primary-foreground/75">
                  3-day free trial. No credit card. Your voice stays on your device from day one.
                  Pay once, use forever.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/download"
                    className="inline-flex h-12 items-center rounded-xl bg-background px-5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 active:scale-95"
                  >
                    Download Voicetypr
                  </Link>
                  <Link
                    href="/pricing"
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
    </>
  );
}
