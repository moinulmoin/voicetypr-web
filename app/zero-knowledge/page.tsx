import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Zero-Knowledge Voice Typing — We Never See Your Transcripts — VoiceTypr",
  description:
    "VoiceTypr uses zero-knowledge architecture. We never see, touch, or store your transcripts. Audio processing occurs locally on your machine. macOS and Windows.",
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
    title: "Zero-Knowledge Voice Typing — We Never See Your Transcripts — VoiceTypr",
    description:
      "VoiceTypr uses zero-knowledge architecture. We never see, touch, or store your transcripts. Audio processing occurs locally on your machine.",
    url: "https://voicetypr.com/zero-knowledge",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero-Knowledge Voice Typing — VoiceTypr",
    description: "We never see, touch, or store your transcripts. Audio processing occurs locally on your machine.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What does zero-knowledge mean for VoiceTypr?",
    a: "It means we cannot see, access, or store your audio recordings or transcripts. The transcription happens entirely on your local device using on-device AI models. We never receive the audio file, the transcript, or any intermediate representation. The only data we see is license validation and optional support diagnostics you choose to send.",
  },
  {
    q: "Can you access my transcripts if I report a bug?",
    a: "No. Bug reports and crash diagnostics contain technical information about the app and your system, but they do not include your transcripts or audio recordings. If you choose to include a specific example in a support email, that is under your control — we do not extract it automatically.",
  },
  {
    q: "What happens if I enable AI text formatting?",
    a: "Optional AI formatting sends only the transcribed text — never the original audio — to the AI provider you configure. VoiceTypr itself still does not see or store this text. You choose the provider, or disable the feature entirely. The audio recording stays on your machine regardless.",
  },
  {
    q: "Is my data encrypted on my device?",
    a: "VoiceTypr relies on your operating system's built-in encryption and access controls. On macOS, this includes FileVault and user permissions. On Windows, this includes BitLocker and NTFS permissions. We do not add a separate encryption layer because modern OS-level encryption is robust and well-tested.",
  },
  {
    q: "How do you verify my license without seeing my data?",
    a: "License validation is completely separate from transcription. Your device sends a license key and device identifier to our servers for activation and periodic validation. This happens over HTTPS and does not include any audio, transcripts, or usage content. The two systems are architecturally isolated.",
  },
  {
    q: "Can I verify that no data is being sent during transcription?",
    a: "Yes. You can run VoiceTypr on a network monitoring tool or firewall to observe that no traffic is generated during dictation. The only network activity occurs during license checks, updates, and optional support reports — never during the actual transcription of your voice.",
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
                Architecture · Privacy
              </span>
            </div>

            <h1 className="mb-5 text-balance text-[clamp(42px,5.2vw,68px)] font-bold leading-[1.03] tracking-[-0.02em]">
              Zero-knowledge architecture{" "}
              <em>for your voice</em>
            </h1>

            <p className="mx-auto max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2 md:text-[19px]">
              We never see, touch, or store your transcripts. Audio processing occurs entirely on your machine.
              No subscription. macOS and Windows.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
              <span>No audio on our servers</span>
              <span>No transcript storage</span>
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
              The exposure
            </div>
            <h2 className="mt-2 mb-3 text-[clamp(32px,3.6vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
              Why most dictation services compromise your privacy
            </h2>
          </div>
          <div className="max-w-[760px]">
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">01</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                Your voice is stored on someone else&apos;s servers
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Cloud dictation services retain audio recordings for quality assurance, debugging, or model improvement.
                That means your conversations, dictation, and potentially sensitive content live on infrastructure you do not control,
                subject to the provider&apos;s security practices and data retention policies.
              </p>
            </article>
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">02</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                Transcripts are readable by provider staff
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Even if the audio is deleted, the transcript often remains. Cloud providers may use transcripts for quality control,
                content moderation, or model training. That means your notes, ideas, and sensitive content are accessible to employees
                and systems within the provider&apos;s organization.
              </p>
            </article>
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">03</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                You cannot verify what is collected
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Closed-source cloud services do not let you audit their data collection. You must trust their privacy policy,
                which can change. With local processing, you can verify with network tools that no data is transmitted during transcription.
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
              Our architecture is designed to know nothing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">01</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">Audio never reaches us</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  Your microphone captures audio, and local AI models (Whisper and Parakeet) process it entirely on your device.
                  The audio file is never transmitted to VoiceTypr servers or any cloud transcription service.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  Purely local processing
                </div>
              </article>
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">02</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">Transcripts stay on your machine</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  We do not store, log, or have access to your transcripts. The text is produced on your device and pasted
                  into the application you are using. We cannot retrieve it, even if compelled.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  No server-side storage
                </div>
              </article>
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">03</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">License checks are isolated</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  The only network communication is for license validation, updates, and optional support reports.
                  These are architecturally separate from the transcription system and contain no audio or transcript data.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  Clean separation
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
              Three professions where zero-knowledge matters
            </h2>
          </div>

          <div className="max-w-[820px] rounded-2xl bg-editorial-surface-2 p-7 md:p-10">
            <ol className="space-y-9">
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">01</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">Journalists and investigators</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Dictate interview notes, source conversations, and research without risking exposure through a cloud provider.
                    Your sources and story content remain on your device. No third party can subpoena transcripts they do not possess.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">02</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">Lawyers and legal professionals</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Draft client communications, case notes, and briefs without sending privileged information to external servers.
                    Local transcription preserves attorney-client privilege by keeping the content within your controlled environment.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">03</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">Researchers and academics</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Transcribe research notes, field observations, and preliminary findings without exposing unpublished work
                    to cloud providers. You maintain full control over your intellectual property and research data.
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
                The honest <em>zero-knowledge</em> FAQ
              </h2>
              <p className="text-[16px] leading-[1.65] text-editorial-ink-2">
                Pulled from real conversations with security-conscious professionals who need verifiable privacy.
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
            title="If privacy is your concern, these pages matter too"
            description="Explore our HIPAA compliance, offline capabilities, and EU data protection positioning."
            links={relatedGuides}
            dataTrackPrefix="zero-knowledge-related-guides"
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
                Dictate with <em>confidence</em>
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                3-day free trial. No credit card. Your voice stays on your device from day one.
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
