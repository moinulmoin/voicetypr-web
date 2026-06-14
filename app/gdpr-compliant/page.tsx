import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "GDPR-Compliant Dictation — EU Data Protection — VoiceTypr",
  description:
    "VoiceTypr is designed for GDPR compliance. Local transcription minimizes data transfer. EU-hosted infrastructure. No subscription. macOS and Windows.",
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
    title: "GDPR-Compliant Dictation — EU Data Protection — VoiceTypr",
    description:
      "VoiceTypr is designed for GDPR compliance. Local transcription minimizes data transfer. EU-hosted infrastructure.",
    url: "https://voicetypr.com/gdpr-compliant",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR-Compliant Dictation — VoiceTypr",
    description: "Designed for GDPR compliance. Local transcription minimizes data transfer. EU-hosted infrastructure.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Is VoiceTypr GDPR compliant?",
    a: "VoiceTypr is designed to support your GDPR compliance posture. By processing audio locally on your device, we minimize the personal data that leaves your control. We provide clear data processing information, honor data subject rights, and use EU-hosted infrastructure for the limited data we do process. You remain responsible for ensuring your use of VoiceTypr meets your specific compliance requirements.",
  },
  {
    q: "Where is my data stored?",
    a: "Your audio recordings and transcripts are stored on your local device — not on our servers. The limited data we do process (license information, device identifiers for validation, and optional support diagnostics) is handled on EU-hosted infrastructure. We do not transfer audio or transcript content to third countries.",
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
    q: "Does VoiceTypr use third-country data transfers?",
    a: "The core transcription function does not involve any data transfer — it happens entirely on your device. For the limited data we do process (license validation, support, etc.), we rely on appropriate safeguards where international transfers are required. We use EU-hosted infrastructure as the primary processing location.",
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
    <main id="main-content" className="landing-editorial relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="ed-section ed-section-hero pb-0 pt-[120px] md:pt-[140px]">
        <div className="ed-container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex justify-center">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                Compliance · EU
              </span>
            </div>

            <h1 className="mb-5 text-balance text-[clamp(42px,5.2vw,68px)] font-bold leading-[1.03] tracking-[-0.02em]">
              GDPR-compliant dictation{" "}
              <em>by design</em>
            </h1>

            <p className="mx-auto max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2 md:text-[19px]">
              VoiceTypr is designed for EU data protection compliance.
              Local transcription minimizes data transfer. German-hosted infrastructure.
              No subscription. macOS and Windows.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
              <span>Local transcription</span>
              <span>EU-hosted data</span>
              <span>Lifetime license</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/download"
                className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
              >
                Start 3-day free trial
              </Link>
              <Link
                href="/privacy"
                className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition hover:bg-editorial-surface-2 active:scale-95"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="ed-section">
        <div className="ed-container">
          <div className="mb-10 max-w-[760px]">
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              The challenge
            </div>
            <h2 className="mt-2 mb-3 text-[clamp(32px,3.6vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
              Why cloud dictation creates GDPR complexity
            </h2>
          </div>
          <div className="max-w-[760px]">
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">01</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                Audio and transcripts are personal data
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Under GDPR, voice recordings and transcripts containing personal information are classified as personal data.
                When you send them to a cloud transcription service, you must establish a legal basis, inform data subjects,
                ensure appropriate safeguards, and manage data retention — all for a service that should be a simple productivity tool.
              </p>
            </article>
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">02</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                Third-country transfers are hard to justify
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Many cloud dictation providers process data in the United States or other third countries.
                GDPR requires additional safeguards for such transfers (SCCs, adequacy decisions, or binding corporate rules).
                Local transcription eliminates this complexity entirely by keeping data within your jurisdiction.
              </p>
            </article>
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">03</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                Data retention is outside your control
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Cloud providers often retain data for model training, quality assurance, or legal compliance.
                Under GDPR, you must ensure data is not kept longer than necessary. With local processing, you control retention
                directly — your audio and transcripts are on your device, subject to your policies.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="ed-section">
        <div className="ed-container">
          <div className="rounded-[24px] bg-editorial-surface-2 p-8 md:p-12">
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">How it works</div>
            <h2 className="mt-2 mb-10 max-w-[760px] text-[clamp(36px,3.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.01em]">
              Local processing reduces your GDPR scope
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">01</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">Data stays under your control</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  Audio and transcripts are produced and stored on your local device. You decide how long to keep them,
                  where to back them up, and who has access. This aligns with GDPR principles of data minimization and
                  storage limitation.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  Data minimization
                </div>
              </article>
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">02</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">EU-hosted infrastructure</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  For the limited data we do process (license management, support, etc.), we use EU-hosted infrastructure.
                  This reduces third-country transfer requirements and supports your data residency preferences.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  Data residency
                </div>
              </article>
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">03</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">Transparent data practices</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  Our Privacy Policy clearly documents what data we collect, why we collect it, how long we keep it,
                  and who we share it with. We honor data subject rights including access, rectification, erasure,
                  and portability.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  Transparency
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="ed-section">
        <div className="ed-container">
          <div className="mb-10 max-w-[760px]">
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              In practice
            </div>
            <h2 className="mt-2 text-[clamp(32px,3.6vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
              Three EU workflows where GDPR matters
            </h2>
          </div>

          <div className="max-w-[820px] rounded-2xl bg-editorial-surface-2 p-7 md:p-10">
            <ol className="space-y-9">
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">01</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">German professional services</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Lawyers, consultants, and accountants in Germany handle sensitive client data subject to strict
                    professional secrecy obligations (Berufsgeheimnis). Local transcription ensures this data never leaves
                    your controlled environment, supporting both GDPR and professional confidentiality requirements.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">02</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">EU corporate documentation</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Enterprise teams across the EU need to document meetings, decisions, and processes without creating
                    additional GDPR obligations. Local transcription keeps this data within the organization&apos;s perimeter,
                    avoiding cloud provider data processing agreements and transfer impact assessments.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">03</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">Public sector and education</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Schools, universities, and public administration bodies in the EU must handle personal data carefully.
                    Local transcription supports compliance with both GDPR and sector-specific regulations by minimizing
                    external data exposure and keeping processing within institutional boundaries.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ed-section">
        <div className="ed-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                questions before you switch
              </div>
              <h2 className="mb-4 mt-2 text-[clamp(32px,3.3vw,44px)] font-semibold leading-[1.1] tracking-[-0.01em]">
                The honest <em>GDPR</em> FAQ
              </h2>
              <p className="text-[16px] leading-[1.65] text-editorial-ink-2">
                Pulled from real conversations with EU companies, German professionals, and compliance officers.
              </p>
            </div>

            <div>
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  open={i === 0}
                  className="group cursor-pointer border-t border-editorial-line/70 py-5 last:border-b last:border-editorial-line/70"
                >
                  <summary className="list-none flex items-start justify-between gap-6 text-[19px] font-semibold leading-[1.32] text-editorial-ink [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-editorial-surface text-base font-light text-editorial-ink-2 [transition:transform_400ms_cubic-bezier(0.32,0.72,0,1)] group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="max-w-[640px] pt-3.5 text-[15px] leading-[1.65] text-editorial-ink-2">
                    {faq.a}
                  </div>
                </details>
              ))}

              <div className="mt-8 text-sm text-editorial-ink-3">
                Not answered here?{" "}
                <a
                  href="mailto:support@voicetypr.com"
                  className="text-editorial-ink underline-offset-4 hover:underline"
                >
                  Email support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="ed-section">
        <div className="ed-container">
          <RelatedGuidesSection
            eyebrow="related pages"
            title="If EU compliance is your concern, these pages matter too"
            description="Explore our HIPAA compliance, zero-knowledge architecture, and offline capabilities."
            links={relatedGuides}
            dataTrackPrefix="gdpr-related-guides"
            embedded
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="ed-section">
        <div className="ed-container">
          <div className="cta-dark-card relative overflow-hidden rounded-[2rem] bg-editorial-ink px-6 py-10 text-center text-white shadow-[0_28px_90px_rgba(24,24,26,0.18)] md:px-10 md:py-12">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#d4965d]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex justify-center">
                <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/55">
                  Secure checkout
                </span>
              </div>
              <h2 className="mx-auto mb-5 max-w-4xl text-[clamp(42px,5.8vw,72px)] font-bold leading-[1.02] tracking-[-0.02em] !text-white">
                Dictate <em>compliantly</em>
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                3-day free trial. No credit card. Local transcription with EU data residency.
                Pay once, use forever.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition duration-300 ease-out hover:bg-editorial-surface active:scale-95"
                >
                  Download VoiceTypr
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-12 items-center rounded-md border border-white/18 bg-white/8 px-5 text-sm font-medium text-white transition hover:bg-white/14 active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
