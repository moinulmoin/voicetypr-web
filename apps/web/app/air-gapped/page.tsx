import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { FaqSection } from "@/components/marketing/FaqSection";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Air-Gap Ready Dictation — Works Entirely Offline — Voicetypr",
  description:
    "Voicetypr works offline by default. Audio stays on your machine during transcription. Air-gap ready dictation for secure environments. No subscription. macOS and Windows.",
  keywords: [
    "air gapped dictation",
    "offline dictation software",
    "air gap voice typing",
    "offline voice transcription",
    "secure offline dictation",
    "no internet dictation",
    "local dictation only",
  ],
  alternates: {
    canonical: "https://voicetypr.com/air-gapped",
  },
  openGraph: {
    title: "Air-Gap Ready Dictation — Works Entirely Offline — Voicetypr",
    description:
      "Voicetypr works offline by default. Audio stays on your machine during transcription. Air-gap ready dictation for secure environments.",
    url: "https://voicetypr.com/air-gapped",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air-Gap Ready Dictation — Voicetypr",
    description: "Works offline by default. Audio stays on your machine during transcription.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Does Voicetypr work without any internet connection?",
    a: "Yes. The core transcription function works completely offline. Voicetypr uses local AI models (Whisper and Parakeet) that run on your device. No internet connection is required for dictation. The only features that need a network connection are license validation, software updates, and optional support reports.",
  },
  {
    q: "Can I use Voicetypr on an air-gapped network?",
    a: "Yes. Voicetypr is designed to work in isolated environments. The transcription engine does not require network access. For license activation on an air-gapped machine, you can use offline activation methods or contact support for enterprise deployment options.",
  },
  {
    q: "What data does Voicetypr send when I am online?",
    a: "When connected, Voicetypr sends only license validation requests, software update checks, and optional support diagnostics you choose to submit. None of these contain audio recordings or transcripts. The license check verifies your key and device hash; the update check downloads version information; support reports contain technical details only. Optional cloud transcription and optional AI text formatting are opt-in features that require a network — they are simply unavailable in an air-gapped setup, and they are never used unless you explicitly turn them on.",
  },
  {
    q: "How long can I work offline before needing to reconnect?",
    a: "Voicetypr includes a 7-day offline grace period for license validation. Once activated, you can use the software for up to 7 days without any network connection. After that, a brief license check is needed. This is designed for travelers, remote workers, and secure environments with intermittent connectivity.",
  },
  {
    q: "Does the app phone home during transcription?",
    a: "No. During local transcription, the dictation engine is completely isolated from network communication. You can verify this with network monitoring tools. The only network activity occurs during license validation, updates, and optional support reports — all of which are separate from the dictation process. Optional cloud transcription and optional AI text formatting are the exceptions: they require a network and only run when you explicitly enable them, so they play no part in an air-gapped workflow.",
  },
  {
    q: "Can I verify that no data leaves my device during dictation?",
    a: "Yes. With local transcription, run Voicetypr behind a network monitoring tool, firewall, or on a disconnected machine. You will observe that no network traffic is generated during dictation — your audio and transcripts stay on your device. The application does not transmit audio, transcripts, or usage data during local, offline operation. The only ways data leaves your device are the optional cloud transcription and optional AI text formatting features, which are off by default, require a network, and are therefore not used in an air-gapped setup.",
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
    href: "/zero-knowledge",
    eyebrow: "Architecture",
    title: "Zero-Knowledge Voice Typing",
    description: "We never see, touch, or store your transcripts. Audio processing occurs locally.",
    ctaLabel: "Read about zero-knowledge",
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

const SERIF_EM_STYLE = { fontFamily: "var(--font-serif)" } as const;

const problems = [
  {
    title: "Cloud transcription requires internet access",
    body: "Most modern dictation apps depend on cloud APIs for transcription. That means they stop working entirely when the network is down, restricted, or classified. You cannot dictate on a plane, in a secure facility, or on a network with no external access.",
  },
  {
    title: "Background connections leak data",
    body: "Even when not actively transcribing, many apps maintain persistent connections to cloud services for analytics, telemetry, or model updates. On a classified network, these background connections are a security violation and can cause your app to be flagged or blocked.",
  },
  {
    title: "Offline mode is an afterthought",
    body: "Some apps offer offline mode as a limited fallback with reduced accuracy, fewer languages, or no AI features. Voicetypr is designed offline-first. The full transcription capability is available without any network connection, using the same local models as the online mode.",
  },
];

const solutions = [
  {
    marker: "01",
    title: "Fully local AI models",
    body: "Whisper and Parakeet models run entirely on your device. No cloud inference, no API calls, no model downloads during transcription. Everything needed is included in the application.",
    meta: "No network dependency",
  },
  {
    marker: "02",
    title: "7-day offline grace period",
    body: "Once activated, Voicetypr works for up to 7 days without any network connection. For air-gapped environments, we support offline activation and enterprise licensing that does not require periodic check-ins.",
    meta: "Extended offline operation",
  },
  {
    marker: "03",
    title: "No telemetry during dictation",
    body: "With local transcription, Voicetypr does not send analytics, usage data, or diagnostics while you dictate. Any network communication is explicitly for license validation or updates, and you can verify this with network monitoring tools. Optional cloud and AI features require a network and stay off in an air-gapped setup.",
    meta: "Verifiable silence",
  },
];

const environments = [
  {
    title: "Classified and government facilities",
    body: "Work in SCIFs, military installations, or government offices with no external network access. Voicetypr does not attempt to connect during transcription, avoiding security violations and maintaining compliance with facility network policies.",
  },
  {
    title: "Financial and legal secure rooms",
    body: "Dictate sensitive deal notes, client discussions, or legal strategy in environments where network access is prohibited. The transcription stays entirely within the secure room, with no risk of data leakage through cloud services.",
  },
  {
    title: "Remote and field locations",
    body: "Work from research stations, ships, remote construction sites, or disaster zones with intermittent or no connectivity. Voicetypr provides full transcription capability regardless of network availability, with a 7-day grace period for license validation.",
  },
];

export default function AirGappedPage() {
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
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
                Air-gap ready{" "}
                <em className="italic font-normal" style={SERIF_EM_STYLE}>
                  dictation
                </em>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                Works offline by default. Audio stays on your machine during transcription.
                Designed for secure environments, classified networks, and privacy-critical workflows.
                No subscription. macOS and Windows.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>No network required</span>
                <span>7-day offline grace</span>
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
              Why most dictation apps fail in secure environments
            </h2>
            <div className="mt-8 max-w-[760px]">
              {problems.map((problem, i) => (
                <article key={i} className="border-b border-border py-6 last:border-b-0">
                  <div className="mb-2 font-sans text-sm font-semibold text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold leading-snug text-foreground">
                    {problem.title}
                  </h3>
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
                Built for environments where the network is the threat
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {solutions.map((solution, i) => (
                  <article
                    key={i}
                    className="flex min-h-60 flex-col gap-3 rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="font-sans text-4xl font-bold leading-none text-foreground">
                      {solution.marker}
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">
                      {solution.title}
                    </h3>
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
              Three environments where air-gapped matters
            </h2>
            <div className="mt-8 max-w-[820px] rounded-2xl bg-muted p-7 md:p-10">
              <ol className="grid gap-9">
                {environments.map((env, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-6">
                    <span className="font-sans text-3xl font-bold leading-none text-sage">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="mb-1.5 text-xl font-semibold leading-snug text-foreground">
                        {env.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-muted-foreground">{env.body}</p>
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
              <strong className="text-foreground">Important:</strong> Voicetypr is designed to support
              air-gapped and high-security workflows — you remain responsible for validating it within your
              own security and compliance requirements.
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <FaqSection
          faqs={faqs}
          title={
            <>
              The honest{" "}
              <em className="italic font-normal" style={SERIF_EM_STYLE}>
                air-gapped
              </em>{" "}
              FAQ
            </>
          }
          intro="Pulled from real conversations with security officers, system administrators, and field operators."
        />

        {/* Related Guides */}
        <Section>
          <Container>
            <RelatedGuidesSection
              eyebrow="related pages"
              title="If offline operation is your concern, these pages matter too"
              description="Explore our HIPAA compliance, zero-knowledge architecture, and EU data protection positioning."
              links={relatedGuides}
              dataTrackPrefix="air-gapped-related-guides"
              embedded
            />
          </Container>
        </Section>

        {/* Final CTA */}
        <FinalCTA
          headline={
            <>
              Dictate{" "}
              <em className="italic font-normal" style={SERIF_EM_STYLE}>
                offline
              </em>
            </>
          }
          subtitle="3-day free trial. No credit card. Works entirely offline from day one. Pay once, use forever."
        />

        <SiteFooter />
      </main>
    </>
  );
}
