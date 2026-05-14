import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import {
  getAllUseCaseSlugs,
  getUseCase,
  type UseCase,
} from "@/lib/use-cases";

type RouteParams = { slug: string };

type PageProps = {
  params: Promise<RouteParams>;
};

export async function generateStaticParams(): Promise<RouteParams[]> {
  return getAllUseCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};

  const url = `https://voicetypr.com/use-cases/${useCase.slug}`;
  return {
    title: useCase.title,
    description: useCase.description,
    keywords: useCase.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: useCase.ogTitle,
      description: useCase.description,
      url,
      siteName: "VoiceTypr",
      type: "article",
      images: [
        {
          url: "/voicetypr-og.png",
          width: 1200,
          height: 630,
          alt: useCase.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: useCase.ogTitle,
      description: useCase.description,
      images: ["/voicetypr-og.png"],
      creator: "@moinulmoin",
    },
    robots: { index: true, follow: true },
  };
}

/**
 * Render a headline/eyebrow string that contains <em>...</em> markers.
 * Splits on the marker and wraps the contents in a real <em>.
 */
function HeadlineWithAccent({ text }: { text: string }) {
  const parts = text.split(/(<em>.*?<\/em>)/);
  return (
    <>
      {parts.map((part, i) => {
        const match = /^<em>(.*?)<\/em>$/.exec(part);
        if (match) {
          return <em key={i}>{match[1]}</em>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  return <UseCaseView useCase={useCase} />;
}

function UseCaseView({ useCase }: { useCase: UseCase }) {
  return (
    <>
      <main
        id="main-content"
        className="landing-editorial relative min-h-screen"
      >
        <Header />

        {/* Hero */}
        <section className="ed-section ed-section-hero pb-0 pt-[120px] md:pt-[140px]">
          <div className="ed-container">
            <div className="mx-auto max-w-4xl text-center">
              <Link
                href="/use-cases"
                className="mb-7 inline-flex items-center gap-1.5 text-[13px] font-medium text-editorial-ink-2 [transition:color_200ms] hover:text-editorial-ink"
              >
                <span aria-hidden>←</span>
                All use cases
              </Link>

              <div className="mb-5 flex justify-center">
                <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">{useCase.hero.eyebrow}</span>
              </div>

              <h1 className="mb-5 text-balance text-[clamp(42px,5.2vw,68px)] font-bold leading-[1.03] tracking-[-0.02em]">
                <HeadlineWithAccent text={useCase.hero.headline} />
              </h1>

              <p className="mx-auto max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2 md:text-[19px]">
                {useCase.hero.lede}
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                {useCase.hero.metaStrip.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  data-track="use-case-hero-download-click"
                  data-track-slug={useCase.slug}
                  className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
                >
                  Start 3-day free trial
                </Link>
                <Link
                  href="/wispr-flow-alternative"
                  className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition hover:bg-editorial-surface-2 active:scale-95"
                >
                  How it compares
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pains — what sucks today */}
        <section className="ed-section">
          <div className="ed-container">
            <div className="mb-10 max-w-[760px]">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">what hurts today</div>
              <h2 className="mt-2 mb-3 text-[clamp(32px,3.6vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
                The friction is real, and specific
              </h2>
            </div>
            <div className="max-w-[760px]">
              {useCase.pains.map((pain, i) => (
                <article
                  key={i}
                  className="border-b border-editorial-line/70 py-6 last:border-b-0"
                >
                  <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 text-[20px] font-semibold leading-[1.25]">
                    {pain.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                    {pain.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes — what changes day-one (mirrors home Outcomes section) */}
        <section className="ed-section">
          <div className="ed-container">
            <div className="rounded-[24px] bg-editorial-surface-2 p-8 md:p-12">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">what changes day one</div>
              <h2 className="mt-2 mb-10 max-w-[760px] text-[clamp(36px,3.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.01em]">
                The shape of the day, different
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {useCase.outcomes.map((outcome, i) => (
                  <article
                    key={i}
                    className="flex min-h-[240px] flex-col gap-3 rounded-xl bg-white p-6"
                  >
                    <div className="text-[38px] font-semibold leading-none text-editorial-ink">
                      {outcome.marker}
                    </div>
                    <h3 className="text-[21px] font-semibold leading-[1.2]">
                      {outcome.title}
                    </h3>
                    <p className="text-[14.5px] leading-[1.6] text-editorial-ink-2">
                      {outcome.body}
                    </p>
                    <div className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                      {outcome.meta}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workflows — concrete examples */}
        <section className="ed-section">
          <div className="ed-container">
            <div className="mb-10 max-w-[760px]">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">in your day, concretely</div>
              <h2 className="mt-2 text-[clamp(32px,3.6vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
                Three workflows where it shows up
              </h2>
            </div>

            <div className="max-w-[820px] rounded-2xl bg-editorial-surface-2 p-7 md:p-10">
              <ol className="space-y-9">
                {useCase.workflows.map((workflow, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-6">
                    <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25]">
                        {workflow.title}
                      </h3>
                      <p className="text-[15px] leading-[1.65] text-editorial-ink-2">
                        {workflow.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="ed-section">
          <div className="ed-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
              <div>
                <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">questions before you switch</div>
                <h2 className="mb-4 mt-2 text-[clamp(32px,3.3vw,44px)] font-semibold leading-[1.1] tracking-[-0.01em]">
                  The honest <em>{useCase.navLabel}</em> FAQ
                </h2>
                <p className="text-[16px] leading-[1.65] text-editorial-ink-2">
                  Pulled from real conversations with people who use VoiceTypr for this exact reason.
                </p>
              </div>

              <div>
                {useCase.faqs.map((faq, i) => (
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
                    data-track="use-case-faq-contact-click"
                    data-track-slug={useCase.slug}
                  >
                    Email support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="ed-section">
          <div className="ed-container">
            <div className="bg-editorial-surface-2 px-6 py-10 text-center md:px-10 md:py-12">
              <div className="mb-4 flex justify-center">
                <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">{useCase.finalCta.eyebrow}</span>
              </div>
              <h2 className="mx-auto mb-5 max-w-4xl text-[clamp(42px,5.8vw,72px)] font-bold leading-[1.02] tracking-[-0.02em]">
                <HeadlineWithAccent text={useCase.finalCta.headline} />
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-editorial-ink-2">
                {useCase.finalCta.body}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  data-track="use-case-final-cta-click"
                  data-track-slug={useCase.slug}
                  className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
                >
                  Download VoiceTypr
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition hover:bg-editorial-surface active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
