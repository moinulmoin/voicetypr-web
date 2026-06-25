import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "GDPR-Compliant Dictation — EU Data Protection — Voicetypr",
  description:
    "Voicetypr is designed for GDPR compliance. Local transcription minimizes data transfer. EU-hosted infrastructure. No subscription. macOS and Windows.",
  keywords: [
    "GDPR dictation software",
    "GDPR compliant voice typing",
    "EU data protection dictation",
    "privacy compliant dictation",
    "local transcription GDPR",
    "German data protection dictation",
    "DSGVO diktier software",
  ],
  alternates: {
    canonical: "https://voicetypr.com/gdpr-compliant",
  },
  openGraph: {
    title: "GDPR-Compliant Dictation — EU Data Protection — Voicetypr",
    description:
      "Voicetypr is designed for GDPR compliance. Local transcription minimizes data transfer. EU-hosted infrastructure.",
    url: "https://voicetypr.com/gdpr-compliant",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR-Compliant Dictation — Voicetypr",
    description: "Designed for GDPR compliance. Local transcription minimizes data transfer. EU-hosted infrastructure.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Is Voicetypr GDPR compliant?",
    a: "Voicetypr is designed to support your GDPR compliance — it is not a certification or legal advice, and you remain responsible for your own compliance obligations. In local mode, audio is processed on your device, minimizing the personal data that leaves your control. We provide clear data processing information, honor data subject rights, and use EU-hosted infrastructure for the limited account data we do process. Optional cloud transcription and AI formatting are opt-in, so you decide whether any content leaves your device.",
  },
  {
    q: "Where is my data stored?",
    a: "In local mode, your audio recordings and transcripts are stored on your device — not on our servers — and we transfer no audio or transcript content to third countries. The limited account data we do process (license information, device identifiers for validation, and optional support diagnostics) is handled on EU-hosted infrastructure. Optional cloud transcription and optional AI formatting are opt-in: only when you enable them does content leave your device, and you should review your chosen provider's terms.",
  },
  {
    q: "What is the legal basis for processing my data?",
    a: "For license and trial management: performance of contract. For fraud prevention and security: legitimate interests. For customer support: performance of contract or legitimate interests. For website analytics: legitimate interests. For marketing and attribution: consent (only loaded with your explicit consent). You can find full details in our Privacy Policy.",
  },
  {
    q: "How can I exercise my data subject rights?",
    a: "You can request access, rectification, erasure, restriction, or portability of your personal data by contacting support@voicetypr.com. Because audio and transcripts are stored locally on your device, you maintain direct control over this data. For data we hold (license records, support history), we will respond to requests within the statutory timeframe.",
  },
  {
    q: "Does Voicetypr use third-country data transfers?",
    a: "In local mode, transcription involves no data transfer — it happens entirely on your device. For the limited account data we do process (license validation, support, etc.), we rely on appropriate safeguards where international transfers are required, and we use EU-hosted infrastructure as the primary processing location. Optional cloud transcription and optional AI formatting are opt-in features that route content to the provider you configure, so any transfers they create are under your control and your provider's terms.",
  },
  {
    q: "What happens if I use optional AI formatting?",
    a: "Optional AI formatting sends only transcribed text — not audio — to the AI provider you configure. You should review your chosen provider's GDPR compliance and data processing terms. You can disable this feature entirely for a completely offline setup that involves no external data transfer.",
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
    href: "/air-gapped",
    eyebrow: "Offline",
    title: "Air-Gap Ready Dictation",
    description: "Works entirely offline. Zero data ever leaves your device.",
    ctaLabel: "Explore air-gap capabilities",
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

export default function GdprCompliantPage() {
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
                GDPR-compliant dictation{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  by design
                </em>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                Voicetypr is designed to support EU data protection.
                In local mode, transcription runs on your device and minimizes data transfer. German-hosted infrastructure.
                No subscription. macOS and Windows.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Local transcription</span>
                <span>EU-hosted data</span>
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
            <div className="max-w-[760px]">
              <h2 className={H2_CLASS}>Why cloud dictation creates GDPR complexity</h2>
            </div>
            <div className="mt-8 max-w-[760px]">
              <article className="border-b border-border py-6 last:border-b-0">
                <div className="mb-2 font-sans text-sm font-semibold text-sage">01</div>
                <h3 className="mb-2 text-xl font-semibold leading-snug text-foreground">
                  Audio and transcripts are personal data
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Under GDPR, voice recordings and transcripts containing personal information are classified as personal data.
                  When you send them to a cloud transcription service, you must establish a legal basis, inform data subjects,
                  ensure appropriate safeguards, and manage data retention — all for a service that should be a simple productivity tool.
                </p>
              </article>
              <article className="border-b border-border py-6 last:border-b-0">
                <div className="mb-2 font-sans text-sm font-semibold text-sage">02</div>
                <h3 className="mb-2 text-xl font-semibold leading-snug text-foreground">
                  Third-country transfers are hard to justify
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Many cloud dictation providers process data in the United States or other third countries.
                  GDPR requires additional safeguards for such transfers (SCCs, adequacy decisions, or binding corporate rules).
                  Local transcription eliminates this complexity entirely by keeping data within your jurisdiction.
                </p>
              </article>
              <article className="border-b border-border py-6 last:border-b-0">
                <div className="mb-2 font-sans text-sm font-semibold text-sage">03</div>
                <h3 className="mb-2 text-xl font-semibold leading-snug text-foreground">
                  Data retention is outside your control
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Cloud providers often retain data for model training, quality assurance, or legal compliance.
                  Under GDPR, you must ensure data is not kept longer than necessary. With local processing, you control retention
                  directly — your audio and transcripts are on your device, subject to your policies.
                </p>
              </article>
            </div>
          </Container>
        </Section>

        {/* The Solution */}
        <Section>
          <Container>
            <div className="rounded-3xl bg-muted p-8 md:p-12">
              <h2 className={`${H2_CLASS} max-w-[760px]`}>
                Local processing reduces your GDPR scope
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <article className="flex min-h-60 flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <div className="font-sans text-4xl font-bold leading-none text-foreground">01</div>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">Data stays under your control</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    In local mode, audio and transcripts are produced and stored on your device. You decide how long to keep them,
                    where to back them up, and who has access. This aligns with GDPR principles of data minimization and
                    storage limitation. Optional cloud and AI features stay opt-in.
                  </p>
                  <div className="mt-auto pt-3 text-xs font-medium text-sage">Data minimization</div>
                </article>
                <article className="flex min-h-60 flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <div className="font-sans text-4xl font-bold leading-none text-foreground">02</div>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">EU-hosted infrastructure</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    For the limited data we do process (license management, support, etc.), we use EU-hosted infrastructure.
                    This reduces third-country transfer requirements and supports your data residency preferences.
                  </p>
                  <div className="mt-auto pt-3 text-xs font-medium text-sage">Data residency</div>
                </article>
                <article className="flex min-h-60 flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <div className="font-sans text-4xl font-bold leading-none text-foreground">03</div>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">Transparent data practices</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Our Privacy Policy clearly documents what data we collect, why we collect it, how long we keep it,
                    and who we share it with. We honor data subject rights including access, rectification, erasure,
                    and portability.
                  </p>
                  <div className="mt-auto pt-3 text-xs font-medium text-sage">Transparency</div>
                </article>
              </div>
            </div>
          </Container>
        </Section>

        {/* Use Cases */}
        <Section>
          <Container>
            <div className="max-w-[760px]">
              <h2 className={H2_CLASS}>Three EU workflows where GDPR matters</h2>
            </div>

            <div className="mt-8 max-w-[820px] rounded-2xl bg-muted p-7 md:p-10">
              <ol className="grid gap-9">
                <li className="grid grid-cols-[auto_1fr] gap-6">
                  <span className="font-sans text-3xl font-bold leading-none text-sage">01</span>
                  <div>
                    <h3 className="mb-1.5 text-xl font-semibold leading-snug text-foreground">German professional services</h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      Lawyers, consultants, and accountants in Germany handle sensitive client data subject to strict
                      professional secrecy obligations (Berufsgeheimnis). In local mode, transcription runs on your device, so this
                      data stays in your controlled environment, supporting both GDPR and professional confidentiality requirements.
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-6">
                  <span className="font-sans text-3xl font-bold leading-none text-sage">02</span>
                  <div>
                    <h3 className="mb-1.5 text-xl font-semibold leading-snug text-foreground">EU corporate documentation</h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      Enterprise teams across the EU need to document meetings, decisions, and processes without creating
                      additional GDPR obligations. In local mode, transcription keeps this data within the organization&apos;s perimeter,
                      avoiding cloud provider data processing agreements and transfer impact assessments.
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-6">
                  <span className="font-sans text-3xl font-bold leading-none text-sage">03</span>
                  <div>
                    <h3 className="mb-1.5 text-xl font-semibold leading-snug text-foreground">Public sector and education</h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      Schools, universities, and public administration bodies in the EU must handle personal data carefully.
                      In local mode, transcription supports compliance with both GDPR and sector-specific regulations by minimizing
                      external data exposure and keeping processing within institutional boundaries.
                    </p>
                  </div>
                </li>
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
                    GDPR
                  </em>{" "}
                  FAQ
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Pulled from real conversations with EU companies, German professionals, and compliance officers.
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

                <p className="mt-6 rounded-2xl border border-border bg-muted p-5 text-xs leading-relaxed text-muted-foreground">
                  Voicetypr is designed to support your GDPR compliance — it is not a certification or
                  legal advice, and you remain responsible for your own compliance obligations.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Guides */}
        <Section>
          <Container>
            <RelatedGuidesSection
              eyebrow="related pages"
              title="If EU compliance is your concern, these pages matter too"
              description="Explore our HIPAA compliance, zero-knowledge architecture, and offline capabilities."
              links={relatedGuides}
              dataTrackPrefix="gdpr-related-guides"
              embedded
            />
          </Container>
        </Section>

        {/* Final CTA */}
        <FinalCTA
          headline={
            <>
              Dictate{" "}
              <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                compliantly
              </em>
            </>
          }
          subtitle="3-day free trial. No credit card. Local transcription with EU data residency. Pay once, use forever."
        />

        <SiteFooter />
      </main>
    </>
  );
}
