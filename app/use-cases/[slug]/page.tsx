import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
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
        <section className="ed-section pt-[120px] md:pt-[140px] pb-0">
          <div className="ed-container">
            <div className="mx-auto max-w-4xl text-center">
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-1.5 mb-7 font-mono uppercase tracking-[0.14em] text-[11px] text-editorial-ink-3 hover:text-editorial-ink-2 [transition:color_200ms]"
              >
                <span aria-hidden>←</span>
                All use cases
              </Link>

              <div className="mb-6 flex justify-center">
                <span className="ed-eyebrow">{useCase.hero.eyebrow}</span>
              </div>

              <h1 className="font-serif text-[clamp(48px,6vw,86px)] leading-[0.98] tracking-[-0.025em] mb-6 text-balance">
                <HeadlineWithAccent text={useCase.hero.headline} />
              </h1>

              <p className="mx-auto max-w-2xl text-[18px] md:text-[19px] leading-[1.55] text-editorial-ink-2">
                {useCase.hero.lede}
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-2 font-mono uppercase tracking-[0.12em] text-[10.5px] text-editorial-ink-3">
                {useCase.hero.metaStrip.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  data-track="use-case-hero-download-click"
                  data-track-slug={useCase.slug}
                  className="group inline-flex items-center gap-2 rounded-full bg-editorial-ink text-white pl-6 pr-1.5 py-1.5 text-[15px] font-medium [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  Start 3-day free trial
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  href="/wispr-flow-alternative"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-[15px] text-editorial-ink-2 hover:text-editorial-ink underline underline-offset-4 decoration-editorial-line hover:decoration-editorial-ink-2"
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
              <div className="ed-eyebrow">what hurts today</div>
              <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] mt-2 mb-3">
                The friction is real, and specific.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {useCase.pains.map((pain, i) => (
                <article
                  key={i}
                  className="bg-editorial-surface border border-editorial-line rounded-2xl p-7 flex flex-col gap-3 min-h-[200px]"
                >
                  <div className="font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3">
                    {String(i + 1).padStart(2, "0")} · the bottleneck
                  </div>
                  <h3 className="font-sans text-[20px] leading-[1.2]">
                    {pain.title}
                  </h3>
                  <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
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
            <div className="bg-editorial-surface-2 rounded-[28px] p-10 md:p-14">
              <div className="ed-eyebrow">what changes day-one</div>
              <h2 className="font-serif text-[clamp(40px,4vw,60px)] leading-[1] max-w-[760px] mt-2 mb-10">
                The shape of the day, different.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {useCase.outcomes.map((outcome, i) => (
                  <article
                    key={i}
                    className="bg-editorial-surface rounded-2xl border border-editorial-line p-7 flex flex-col gap-3.5 min-h-[260px]"
                  >
                    <div className="font-serif text-[44px] leading-none text-editorial-accent">
                      {outcome.marker}
                    </div>
                    <h3 className="font-sans text-[22px] leading-[1.15]">
                      {outcome.title}
                    </h3>
                    <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
                      {outcome.body}
                    </p>
                    <div className="mt-auto pt-4 font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3">
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
              <div className="ed-eyebrow">in your day, concretely</div>
              <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] mt-2">
                Three workflows where it shows up.
              </h2>
            </div>

            <div className="bg-editorial-surface border border-editorial-line rounded-2xl p-8 md:p-11 max-w-[820px]">
              <ol className="space-y-9">
                {useCase.workflows.map((workflow, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-6">
                    <span className="font-serif text-[40px] leading-none text-editorial-accent pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-sans text-[22px] leading-[1.2] mb-1.5">
                        {workflow.title}
                      </h3>
                      <p className="text-editorial-ink-2 text-[15px] leading-[1.6]">
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
                <div className="ed-eyebrow">questions before you switch</div>
                <h2 className="font-serif text-[clamp(36px,3.6vw,54px)] leading-[1] mb-4 tracking-[-0.01em]">
                  The honest <em>{useCase.navLabel}</em> FAQ.
                </h2>
                <p className="text-editorial-ink-2 text-[16px] leading-[1.6]">
                  Pulled from real conversations with people who use VoiceTypr for this exact reason.
                </p>
              </div>

              <div>
                {useCase.faqs.map((faq, i) => (
                  <details
                    key={faq.q}
                    open={i === 0}
                    className="group border-t border-editorial-line last:border-b last:border-editorial-line py-5 cursor-pointer"
                  >
                    <summary className="list-none flex justify-between items-start gap-6 font-sans font-semibold text-[19px] leading-[1.3] text-editorial-ink [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span className="w-7 h-7 rounded-full bg-editorial-surface-2 grid place-items-center text-base font-light text-editorial-ink-2 flex-shrink-0 [transition:transform_400ms_cubic-bezier(0.32,0.72,0,1)] group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="text-editorial-ink-2 text-[15px] leading-[1.6] pt-3.5 max-w-[640px]">
                      {faq.a}
                    </div>
                  </details>
                ))}

                <div className="mt-8 text-sm text-editorial-ink-3">
                  Not answered here?{" "}
                  <a
                    href="mailto:support@voicetypr.com"
                    className="text-editorial-accent hover:underline"
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
            <div className="relative overflow-hidden rounded-[32px] border border-editorial-line bg-editorial-surface py-20 md:py-24 px-8 text-center">
              <div className="mb-6 flex justify-center">
                <span className="ed-eyebrow">{useCase.finalCta.eyebrow}</span>
              </div>
              <h2 className="font-serif text-[clamp(48px,6vw,92px)] leading-[0.96] tracking-[-0.025em] mb-6 max-w-[820px] mx-auto">
                <HeadlineWithAccent text={useCase.finalCta.headline} />
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-editorial-ink-2 text-[16px] leading-[1.55]">
                {useCase.finalCta.body}
              </p>
              <Link
                href="/download"
                data-track="use-case-final-cta-click"
                data-track-slug={useCase.slug}
                className="group inline-flex items-center gap-2 rounded-full bg-editorial-ink text-white pl-7 pr-1.5 py-1.5 text-[16px] font-medium [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
              >
                Download VoiceTypr
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
