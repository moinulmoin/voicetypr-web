import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "HIPAA-Eligible Dictation Software for Healthcare — Voicetypr",
  description:
    "Voicetypr is designed to support HIPAA compliance. Local transcription keeps audio on your device. No cloud audio storage. No subscription. macOS and Windows.",
  keywords: [
    "HIPAA dictation software",
    "HIPAA compliant voice typing",
    "medical dictation HIPAA",
    "healthcare voice transcription",
    "private dictation for therapists",
    "secure dictation software",
    "local transcription healthcare",
  ],
  alternates: {
    canonical: "https://voicetypr.com/hipaa-compliant-dictation",
  },
  openGraph: {
    title: "HIPAA-Eligible Dictation Software for Healthcare — Voicetypr",
    description:
      "Designed to support HIPAA compliance. Local transcription keeps audio on your device. No cloud audio storage. macOS and Windows.",
    url: "https://voicetypr.com/hipaa-compliant-dictation",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIPAA-Eligible Dictation for Healthcare — Voicetypr",
    description: "Designed to support HIPAA compliance. Local transcription keeps audio on your device.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Is Voicetypr HIPAA certified?",
    a: "There is no official HIPAA certification for software. Voicetypr is designed to support your HIPAA compliance posture by processing audio locally on your device, minimizing the data that could be subject to a breach. You remain responsible for implementing appropriate safeguards, access controls, and business associate agreements with any downstream services you use.",
  },
  {
    q: "Does my patient audio ever leave my computer?",
    a: "Not during standard transcription. Voicetypr uses local AI models (Whisper and Parakeet) that run entirely on your Mac or Windows machine. The audio file is processed locally and the transcript is produced on your device. No audio is transmitted to our servers or any cloud transcription service unless you explicitly enable an optional non-local mode.",
  },
  {
    q: "What if I want to use AI formatting for my notes?",
    a: "Optional AI formatting sends only the transcribed text — not the original audio — to the AI provider you configure. You can use any provider you trust, or disable the feature entirely. Even with formatting enabled, the audio recording stays on your machine.",
  },
  {
    q: "Do I need a Business Associate Agreement (BAA) with Voicetypr?",
    a: "For the core dictation function, no BAA is required because Voicetypr does not receive, process, or store your audio or transcripts on our infrastructure. The transcription happens on your device. If you choose to use optional cloud-connected features, you should evaluate whether those providers require a BAA for your use case.",
  },
  {
    q: "Can I use this for therapy notes, medical records, or clinical documentation?",
    a: "Many therapists, counselors, and healthcare professionals use Voicetypr for documentation precisely because the local processing reduces the attack surface for protected health information (PHI). You should conduct your own risk assessment and ensure your device and environment meet your organization's security requirements.",
  },
  {
    q: "How does local transcription help with the Security Rule?",
    a: "The HIPAA Security Rule requires safeguards for electronic PHI. By keeping audio on your local device and producing transcripts locally, you eliminate the network transmission and remote storage of voice recordings that would otherwise need to be encrypted, monitored, and audited. This does not replace your other obligations — it reduces the scope of what you must protect.",
  },
] as const;

const relatedGuides: DiscoveryLink[] = [
  {
    href: "/zero-knowledge",
    eyebrow: "Architecture",
    title: "Zero-Knowledge Voice Typing",
    description: "How Voicetypr's architecture ensures we never see, touch, or store your transcripts.",
    ctaLabel: "Read about zero-knowledge",
  },
  {
    href: "/air-gapped",
    eyebrow: "Offline",
    title: "Air-Gap Ready Dictation",
    description: "Works entirely offline. Zero data ever leaves your device.",
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

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const solutionSteps = [
  {
    marker: "01",
    title: "Audio stays on your device",
    body: "Voicetypr uses local Whisper and Parakeet models that run entirely on your Mac or Windows machine. The microphone captures audio, the model transcribes it, and the text appears in your app — all locally.",
    meta: "No network transmission",
  },
  {
    marker: "02",
    title: "No cloud storage of recordings",
    body: "We do not receive, process, or store your audio files or transcripts on our servers. The only data that reaches our infrastructure is license validation and optional support diagnostics.",
    meta: "Zero-knowledge architecture",
  },
  {
    marker: "03",
    title: "Optional formatting sends text only",
    body: "If you enable AI text formatting, only the transcribed text — never the original audio — is sent to your configured AI provider. You choose the provider, or leave it disabled for a completely offline setup.",
    meta: "Text-only, opt-in",
  },
];

const risks = [
  {
    marker: "01",
    title: "Audio is transmitted to remote servers",
    body: "Most dictation services send your voice recordings to cloud servers for transcription. That creates a Business Associate relationship, requires encryption in transit and at rest, and expands your breach notification obligations if the provider is compromised.",
  },
  {
    marker: "02",
    title: "Transcripts are stored outside your control",
    body: "Cloud dictation services often retain transcripts for quality assurance, model training, or user convenience. Even if you trust the provider, that storage is outside your security perimeter and subject to their policies, not yours.",
  },
  {
    marker: "03",
    title: "You may not know where data is processed",
    body: "Cloud providers often process data across multiple jurisdictions. For HIPAA, that means you must understand where PHI is stored, who has access, and whether the provider’s infrastructure meets your security requirements.",
  },
];

const workflows = [
  {
    title: "Therapy and counseling notes",
    body: "Dictate session notes directly into your EHR or practice management software. The audio never leaves your office computer, reducing the risk of a breach involving client conversation recordings. You maintain full control over where the transcript is stored.",
  },
  {
    title: "Clinical documentation and charting",
    body: "Speak patient histories, assessments, and treatment plans into your documentation system. Local transcription means you are not sending protected health information to a third-party transcription service. You decide whether to use optional AI formatting and which provider handles the text.",
  },
  {
    title: "Telehealth and remote sessions",
    body: "Even when working from home or on a laptop, local transcription keeps the audio on your machine. You are not dependent on a cloud service’s availability or security posture during sensitive sessions. The offline capability means you can dictate even without internet access.",
  },
];

export default function HipaaDictationPage() {
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
                HIPAA-eligible dictation{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  for healthcare providers
                </em>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                Voicetypr is designed to support your HIPAA compliance posture.
                Local transcription keeps audio on your device — not on cloud servers.
                No subscription. macOS and Windows.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Local transcription</span>
                <span>No cloud audio storage</span>
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
            <h2 className={`${H2_CLASS} max-w-[760px]`}>Why cloud dictation creates HIPAA exposure</h2>
            <div className="mt-8 max-w-[760px]">
              {risks.map((risk) => (
                <article key={risk.marker} className="border-b border-border py-6 last:border-b-0">
                  <div className="mb-2 font-sans text-sm font-semibold text-sage">{risk.marker}</div>
                  <h3 className="mb-2 text-xl font-semibold leading-snug text-foreground">{risk.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{risk.body}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* The Solution */}
        <Section>
          <Container>
            <div className="rounded-3xl bg-muted p-8 md:p-12">
              <h2 className={`${H2_CLASS} max-w-[760px]`}>Local transcription shrinks your compliance surface</h2>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {solutionSteps.map((step) => (
                  <article key={step.marker} className="flex min-h-60 flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                    <div className="font-sans text-4xl font-bold leading-none text-foreground">{step.marker}</div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                    <div className="mt-auto pt-3 text-xs font-medium text-sage">{step.meta}</div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Use Cases */}
        <Section>
          <Container>
            <h2 className={`${H2_CLASS} max-w-[760px]`}>Three healthcare workflows where it matters</h2>
            <div className="mt-8 max-w-[820px] rounded-2xl bg-muted p-7 md:p-10">
              <ol className="grid gap-9">
                {workflows.map((workflow, i) => (
                  <li key={workflow.title} className="grid grid-cols-[auto_1fr] gap-6">
                    <span className="font-sans text-3xl font-bold leading-none text-sage">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="mb-1.5 text-xl font-semibold leading-snug text-foreground">{workflow.title}</h3>
                      <p className="text-[15px] leading-relaxed text-muted-foreground">{workflow.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        {/* Important Disclaimer */}
        <Section className="pt-0">
          <Container>
            <div className="max-w-3xl rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Important:</strong> Voicetypr is productivity software, not medical software.
              It is designed to support your HIPAA compliance posture by minimizing data exposure, but it does not guarantee compliance.
              You remain responsible for conducting your own risk assessment, implementing appropriate safeguards, and ensuring your
              use of Voicetypr meets your organization&apos;s specific requirements. This page is for informational purposes and does not
              constitute legal advice.
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
                    HIPAA
                  </em>{" "}
                  FAQ
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Pulled from real conversations with therapists, doctors, and practice managers who need secure dictation.
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
              title="If compliance is your concern, these pages matter too"
              description="Explore our architecture, offline capabilities, and EU data protection positioning."
              links={relatedGuides}
              dataTrackPrefix="hipaa-related-guides"
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
                  Start dictating{" "}
                  <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                    securely
                  </em>
                </h2>
                <p className="mx-auto mt-5 mb-8 max-w-xl text-balance text-base leading-relaxed text-primary-foreground/75">
                  3-day free trial. No credit card. Local transcription on your device from day one.
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
