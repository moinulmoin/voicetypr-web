import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "HIPAA-Eligible Dictation Software for Healthcare — VoiceTypr",
  description:
    "VoiceTypr is designed to support HIPAA compliance. Local transcription keeps audio on your device. No cloud audio storage. No subscription. macOS and Windows.",
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
    title: "HIPAA-Eligible Dictation Software for Healthcare — VoiceTypr",
    description:
      "Designed to support HIPAA compliance. Local transcription keeps audio on your device. No cloud audio storage. macOS and Windows.",
    url: "https://voicetypr.com/hipaa-compliant-dictation",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIPAA-Eligible Dictation for Healthcare — VoiceTypr",
    description: "Designed to support HIPAA compliance. Local transcription keeps audio on your device.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Is VoiceTypr HIPAA certified?",
    a: "There is no official HIPAA certification for software. VoiceTypr is designed to support your HIPAA compliance posture by processing audio locally on your device, minimizing the data that could be subject to a breach. You remain responsible for implementing appropriate safeguards, access controls, and business associate agreements with any downstream services you use.",
  },
  {
    q: "Does my patient audio ever leave my computer?",
    a: "Not during standard transcription. VoiceTypr uses local AI models (Whisper and Parakeet) that run entirely on your Mac or Windows machine. The audio file is processed locally and the transcript is produced on your device. No audio is transmitted to our servers or any cloud transcription service unless you explicitly enable an optional non-local mode.",
  },
  {
    q: "What if I want to use AI formatting for my notes?",
    a: "Optional AI formatting sends only the transcribed text — not the original audio — to the AI provider you configure. You can use any provider you trust, or disable the feature entirely. Even with formatting enabled, the audio recording stays on your machine.",
  },
  {
    q: "Do I need a Business Associate Agreement (BAA) with VoiceTypr?",
    a: "For the core dictation function, no BAA is required because VoiceTypr does not receive, process, or store your audio or transcripts on our infrastructure. The transcription happens on your device. If you choose to use optional cloud-connected features, you should evaluate whether those providers require a BAA for your use case.",
  },
  {
    q: "Can I use this for therapy notes, medical records, or clinical documentation?",
    a: "Many therapists, counselors, and healthcare professionals use VoiceTypr for documentation precisely because the local processing reduces the attack surface for protected health information (PHI). You should conduct your own risk assessment and ensure your device and environment meet your organization's security requirements.",
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
    description: "How VoiceTypr's architecture ensures we never see, touch, or store your transcripts.",
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

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

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
                Compliance · Healthcare
              </span>
            </div>

            <h1 className="mb-5 text-balance text-[clamp(42px,5.2vw,68px)] font-bold leading-[1.03] tracking-[-0.02em]">
              HIPAA-eligible dictation{" "}
              <em>for healthcare providers</em>
            </h1>

            <p className="mx-auto max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2 md:text-[19px]">
              VoiceTypr is designed to support your HIPAA compliance posture.
              Local transcription keeps audio on your device — not on cloud servers.
              No subscription. macOS and Windows.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
              <span>Local transcription</span>
              <span>No cloud audio storage</span>
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
              The risk
            </div>
            <h2 className="mt-2 mb-3 text-[clamp(32px,3.6vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
              Why cloud dictation creates HIPAA exposure
            </h2>
          </div>
          <div className="max-w-[760px]">
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">01</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                Audio is transmitted to remote servers
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Most dictation services send your voice recordings to cloud servers for transcription. That creates a
                Business Associate relationship, requires encryption in transit and at rest, and expands your breach
                notification obligations if the provider is compromised.
              </p>
            </article>
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">02</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                Transcripts are stored outside your control
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Cloud dictation services often retain transcripts for quality assurance, model training, or user convenience.
                Even if you trust the provider, that storage is outside your security perimeter and subject to their policies,
                not yours.
              </p>
            </article>
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">03</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                You may not know where data is processed
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Cloud providers often process data across multiple jurisdictions. For HIPAA, that means you must understand
                where PHI is stored, who has access, and whether the provider&apos;s infrastructure meets your security requirements.
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
              Local transcription shrinks your compliance surface
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">01</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">Audio stays on your device</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  VoiceTypr uses local Whisper and Parakeet models that run entirely on your Mac or Windows machine.
                  The microphone captures audio, the model transcribes it, and the text appears in your app — all locally.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  No network transmission
                </div>
              </article>
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">02</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">No cloud storage of recordings</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  We do not receive, process, or store your audio files or transcripts on our servers.
                  The only data that reaches our infrastructure is license validation and optional support diagnostics.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  Zero-knowledge architecture
                </div>
              </article>
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">03</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">Optional formatting sends text only</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  If you enable AI text formatting, only the transcribed text — never the original audio — is sent to
                  your configured AI provider. You choose the provider, or leave it disabled for a completely offline setup.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  Text-only, opt-in
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
              Three healthcare workflows where it matters
            </h2>
          </div>

          <div className="max-w-[820px] rounded-2xl bg-editorial-surface-2 p-7 md:p-10">
            <ol className="space-y-9">
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">01</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">Therapy and counseling notes</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Dictate session notes directly into your EHR or practice management software. The audio never leaves
                    your office computer, reducing the risk of a breach involving client conversation recordings. You maintain
                    full control over where the transcript is stored.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">02</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">Clinical documentation and charting</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Speak patient histories, assessments, and treatment plans into your documentation system. Local
                    transcription means you are not sending protected health information to a third-party transcription
                    service. You decide whether to use optional AI formatting and which provider handles the text.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">03</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">Telehealth and remote sessions</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Even when working from home or on a laptop, local transcription keeps the audio on your machine.
                    You are not dependent on a cloud service&apos;s availability or security posture during sensitive sessions.
                    The offline capability means you can dictate even without internet access.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="ed-section !py-0">
        <div className="ed-container">
          <div className="max-w-3xl rounded-2xl border border-editorial-line bg-white p-5 text-sm leading-relaxed text-editorial-ink-2">
            <strong className="text-editorial-ink">Important:</strong> VoiceTypr is productivity software, not medical software.
            It is designed to support your HIPAA compliance posture by minimizing data exposure, but it does not guarantee compliance.
            You remain responsible for conducting your own risk assessment, implementing appropriate safeguards, and ensuring your
            use of VoiceTypr meets your organization&apos;s specific requirements. This page is for informational purposes and does not
            constitute legal advice.
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
                The honest <em>HIPAA</em> FAQ
              </h2>
              <p className="text-[16px] leading-[1.65] text-editorial-ink-2">
                Pulled from real conversations with therapists, doctors, and practice managers who need secure dictation.
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
            title="If compliance is your concern, these pages matter too"
            description="Explore our architecture, offline capabilities, and EU data protection positioning."
            links={relatedGuides}
            dataTrackPrefix="hipaa-related-guides"
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
                Start dictating <em>securely</em>
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                3-day free trial. No credit card. Local transcription on your device from day one.
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
