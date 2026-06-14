import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Air-Gap Ready Dictation — Works Entirely Offline — VoiceTypr",
  description:
    "VoiceTypr works offline by default. Audio stays on your machine during transcription. Air-gap ready dictation for secure environments. No subscription. macOS and Windows.",
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
    title: "Air-Gap Ready Dictation — Works Entirely Offline — VoiceTypr",
    description:
      "VoiceTypr works offline by default. Audio stays on your machine during transcription. Air-gap ready dictation for secure environments.",
    url: "https://voicetypr.com/air-gapped",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air-Gap Ready Dictation — VoiceTypr",
    description: "Works offline by default. Audio stays on your machine during transcription.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Does VoiceTypr work without any internet connection?",
    a: "Yes. The core transcription function works completely offline. VoiceTypr uses local AI models (Whisper and Parakeet) that run on your device. No internet connection is required for dictation. The only features that need a network connection are license validation, software updates, and optional support reports.",
  },
  {
    q: "Can I use VoiceTypr on an air-gapped network?",
    a: "Yes. VoiceTypr is designed to work in isolated environments. The transcription engine does not require network access. For license activation on an air-gapped machine, you can use offline activation methods or contact support for enterprise deployment options.",
  },
  {
    q: "What data does VoiceTypr send when I am online?",
    a: "When connected, VoiceTypr sends only license validation requests, software update checks, and optional support diagnostics you choose to submit. None of these contain audio recordings or transcripts. The license check verifies your key and device hash; the update check downloads version information; support reports contain technical details only.",
  },
  {
    q: "How long can I work offline before needing to reconnect?",
    a: "VoiceTypr includes a 7-day offline grace period for license validation. Once activated, you can use the software for up to 7 days without any network connection. After that, a brief license check is needed. This is designed for travelers, remote workers, and secure environments with intermittent connectivity.",
  },
  {
    q: "Does the app phone home during transcription?",
    a: "No. The transcription system is completely isolated from network communication. You can verify this with network monitoring tools. The only network activity occurs during license validation, updates, and optional support reports — all of which are separate from the dictation process.",
  },
  {
    q: "Can I verify that no data leaves my device during dictation?",
    a: "Yes. Run VoiceTypr on a network monitoring tool, firewall, or disconnected machine. You will observe that no network traffic is generated during dictation. The application does not transmit audio, transcripts, or usage data during normal operation.",
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
                Offline · Security
              </span>
            </div>

            <h1 className="mb-5 text-balance text-[clamp(42px,5.2vw,68px)] font-bold leading-[1.03] tracking-[-0.02em]">
              Air-gap ready{" "}
              <em>dictation</em>
            </h1>

            <p className="mx-auto max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2 md:text-[19px]">
              Works offline by default. Audio stays on your machine during transcription.
              Designed for secure environments, classified networks, and privacy-critical workflows.
              No subscription. macOS and Windows.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
              <span>No network required</span>
              <span>7-day offline grace</span>
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
              The constraint
            </div>
            <h2 className="mt-2 mb-3 text-[clamp(32px,3.6vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
              Why most dictation apps fail in secure environments
            </h2>
          </div>
          <div className="max-w-[760px]">
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">01</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                Cloud transcription requires internet access
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Most modern dictation apps depend on cloud APIs for transcription. That means they stop working entirely
                when the network is down, restricted, or classified. You cannot dictate on a plane, in a secure facility,
                or on a network with no external access.
              </p>
            </article>
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">02</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                Background connections leak data
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Even when not actively transcribing, many apps maintain persistent connections to cloud services for
                analytics, telemetry, or model updates. On a classified network, these background connections are a security
                violation and can cause your app to be flagged or blocked.
              </p>
            </article>
            <article className="border-b border-editorial-line/70 py-6 last:border-b-0">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">03</div>
              <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                Offline mode is an afterthought
              </h3>
              <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                Some apps offer offline mode as a limited fallback with reduced accuracy, fewer languages, or no AI features.
                VoiceTypr is designed offline-first. The full transcription capability is available without any network connection,
                using the same local models as the online mode.
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
              Built for environments where the network is the threat
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">01</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">Fully local AI models</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  Whisper and Parakeet models run entirely on your device. No cloud inference, no API calls, no model
                  downloads during transcription. Everything needed is included in the application.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  No network dependency
                </div>
              </article>
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">02</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">7-day offline grace period</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  Once activated, VoiceTypr works for up to 7 days without any network connection. For air-gapped environments,
                  we support offline activation and enterprise licensing that does not require periodic check-ins.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  Extended offline operation
                </div>
              </article>
              <article className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6">
                <div className="text-[38px] font-semibold leading-none text-editorial-ink">03</div>
                <h3 className="text-[21px] font-semibold leading-[1.2]">No telemetry during dictation</h3>
                <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                  The transcription system does not send analytics, usage data, or diagnostics while you dictate.
                  Any network communication is explicitly for license validation or updates, and you can verify this
                  with network monitoring tools.
                </p>
                <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                  Verifiable silence
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
              Three environments where air-gapped matters
            </h2>
          </div>

          <div className="max-w-[820px] rounded-2xl bg-editorial-surface-2 p-7 md:p-10">
            <ol className="space-y-9">
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">01</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">Classified and government facilities</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Work in SCIFs, military installations, or government offices with no external network access.
                    VoiceTypr does not attempt to connect during transcription, avoiding security violations and
                    maintaining compliance with facility network policies.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">02</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">Financial and legal secure rooms</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Dictate sensitive deal notes, client discussions, or legal strategy in environments where
                    network access is prohibited. The transcription stays entirely within the secure room,
                    with no risk of data leakage through cloud services.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">03</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">Remote and field locations</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    Work from research stations, ships, remote construction sites, or disaster zones with intermittent
                    or no connectivity. VoiceTypr provides full transcription capability regardless of network availability,
                    with a 7-day grace period for license validation.
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
                The honest <em>air-gapped</em> FAQ
              </h2>
              <p className="text-[16px] leading-[1.65] text-editorial-ink-2">
                Pulled from real conversations with security officers, system administrators, and field operators.
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
            title="If offline operation is your concern, these pages matter too"
            description="Explore our HIPAA compliance, zero-knowledge architecture, and EU data protection positioning."
            links={relatedGuides}
            dataTrackPrefix="air-gapped-related-guides"
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
                Dictate <em>offline</em>
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                3-day free trial. No credit card. Works entirely offline from day one.
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
