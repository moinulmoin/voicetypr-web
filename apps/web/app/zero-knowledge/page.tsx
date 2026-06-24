import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Zero Data Collection Voice Typing — Beyond Zero Data Retention — Voicetypr",
  description:
    "Most private AI promises zero data retention. Voicetypr goes further with zero data collection — in local mode your voice is transcribed on your device and never sent to us. macOS and Windows.",
  keywords: [
    "zero knowledge dictation",
    "zero data collection",
    "zero data retention",
    "zero knowledge voice typing",
    "private transcription",
    "secure voice typing",
    "local transcription architecture",
    "privacy first dictation",
    "no cloud audio storage",
    "compliance dictation",
  ],
  alternates: {
    canonical: "https://voicetypr.com/zero-knowledge",
  },
  openGraph: {
    title: "Zero Data Collection Voice Typing — Beyond Zero Data Retention — Voicetypr",
    description:
      "Most private AI promises zero data retention. Voicetypr goes further with zero data collection — in local mode your voice is transcribed on your device and never sent to us.",
    url: "https://voicetypr.com/zero-knowledge",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Data Collection Voice Typing — Voicetypr",
    description: "Beyond zero data retention. In local mode your voice is transcribed on your device and never sent to us.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What is the difference between zero data retention and zero data collection?",
    a: "Zero data retention means a provider receives your data but promises to delete it on a schedule. Zero data collection means there is nothing to retain because the data never leaves your device. In Voicetypr's local mode, transcription happens entirely on your device using on-device AI models — we do not receive the audio file, the transcript, or any intermediate representation. The only data we see is license validation and optional support diagnostics you choose to send.",
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
    a: "Yes. In local mode you can run a network monitoring tool or firewall to observe that no traffic is generated during dictation. The only network activity occurs during license checks, updates, and optional support reports — never during the actual local transcription of your voice. (Optional cloud transcription and AI text formatting are opt-in and do send data when you enable them.)",
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
    title: "Audio stays on your device",
    body:
      "In local mode, your microphone captures audio and local AI models (Whisper and Parakeet) process it on your device. The audio file is not transmitted to Voicetypr servers or any cloud transcription service.",
    meta: "Local processing",
  },
  {
    title: "Transcripts stay on your machine",
    body:
      "We do not store, log, or have access to transcripts produced in local mode. The text is generated on your device and pasted into the application you are using — there is nothing on our side to retrieve.",
    meta: "No server-side storage",
  },
  {
    title: "License checks are isolated",
    body:
      "The only network communication for core dictation is license validation, updates, and optional support reports. These are architecturally separate from the transcription system and contain no audio or transcript data.",
    meta: "Clean separation",
  },
] as const;

const retentionTiers = [
  {
    label: "Most cloud AI",
    title: "We delete it after",
    body:
      "Audio and transcripts are sent to a provider's servers, then deleted on a schedule. You are trusting a policy and a process you cannot see — and the data still left your device.",
  },
  {
    label: "Privacy-leaning AI",
    title: "Zero data retention",
    body:
      "A stronger promise: the provider says it does not keep your data. But the data was still transmitted, processed off-device, and is governed by that promise rather than by where it physically lives.",
  },
  {
    label: "Voicetypr, local mode",
    title: "Zero data collection",
    body:
      "There is nothing to retain because nothing is collected. Your voice is transcribed on your device by local models and never sent to us. Going further than retention promises by removing the transfer entirely.",
  },
] as const;

const frameworks = [
  {
    name: "GDPR / EU",
    summary: "Data minimization and no transfer",
    body:
      "Local processing means little to no personal data leaves the device, which supports data-minimization principles and avoids cross-border transfer concerns for core dictation. Helps reduce the scope of what you have to account for.",
  },
  {
    name: "HIPAA",
    summary: "Audio processed on-device",
    body:
      "Audio processed locally is not received or stored on our servers, so no BAA is needed for core local dictation. Evaluate any optional cloud or AI features yourself before using them with PHI.",
  },
  {
    name: "CCPA / CPRA",
    summary: "No sale of personal information",
    body:
      "We do not sell personal information, and local processing means there is little to collect or share in the first place. A smaller data footprint supports your consumer-privacy posture.",
  },
  {
    name: "PCI DSS",
    summary: "Reduced data footprint",
    body:
      "Voicetypr is not a payment application, but its reduced data footprint helps keep dictation out of scope. Payments for the license are handled by Polar, not by the dictation app.",
  },
  {
    name: "GLBA",
    summary: "On-device sensitive dictation",
    body:
      "Relevant to financial workflows: local processing keeps sensitive dictation on the device, helping you safeguard nonpublic personal information rather than routing it through a third party.",
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
                Beyond zero data retention.{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  Zero data collection.
                </em>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                Most &ldquo;private&rdquo; AI promises it won&rsquo;t keep your data. In local mode, Voicetypr never
                collects it in the first place — your voice is transcribed on your device and never sent to us.
                No subscription. macOS and Windows.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Local mode: voice stays on device</span>
                <span>Nothing collected to retain</span>
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

        {/* Beyond zero data retention */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">Retention vs. collection</p>
              <h2 className={H2_CLASS}>Don&rsquo;t settle for &ldquo;we&rsquo;ll delete it later&rdquo;</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                There is a real difference between a promise not to keep your data and never receiving it at all.
                Here is where each approach lands.
              </p>
            </div>

            <ol className="grid gap-4 md:grid-cols-3">
              {retentionTiers.map((tier, i) => {
                const isLast = i === retentionTiers.length - 1;
                return (
                  <li
                    key={tier.title}
                    className={`flex flex-col gap-3 rounded-2xl border p-6 ${
                      isLast ? "border-sage/40 bg-sage-bg" : "border-border bg-card"
                    }`}
                  >
                    <span className={`text-xs font-medium ${isLast ? "text-sage" : "text-muted-foreground"}`}>
                      {tier.label}
                    </span>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">{tier.title}</h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{tier.body}</p>
                  </li>
                );
              })}
            </ol>
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

        {/* Compliance framework mapping */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">Compliance frameworks</p>
              <h2 className={H2_CLASS}>How local-first architecture maps to your obligations</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Zero data collection is not just a privacy story — it shrinks the surface that most frameworks
                care about. Here is how the architecture lines up, framework by framework.
              </p>
            </div>

            <ul className="grid gap-4 md:grid-cols-2">
              {frameworks.map((framework) => (
                <li
                  key={framework.name}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{framework.name}</h3>
                    <span className="text-xs font-medium text-sage">{framework.summary}</span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{framework.body}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[760px] text-sm leading-relaxed text-muted-foreground">
              Voicetypr is designed to support your compliance posture; it is not a certification, and you remain
              responsible for your own compliance obligations. Optional cloud transcription and AI text formatting
              are opt-in — AI formatting sends transcribed text only, using your own provider and key — so evaluate
              those features against your requirements before enabling them.
            </p>
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
                  3-day free trial. No credit card. In local mode your voice stays on your device from day one.
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
