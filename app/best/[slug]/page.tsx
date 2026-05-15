import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/app/components/sections/Footer";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import Header from "@/app/components/sections/Header";
import { getRelatedGuidesForSeoSlug } from "@/lib/seo-discovery";
import { getSeoPageBySlug, seoPages } from "@/lib/seo-pages";

export async function generateStaticParams() {
  return seoPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return {};
  const title = `${page.h1} — VoiceTypr`;
  const url = `https://voicetypr.com/best/${slug}`;
  return {
    title,
    description: page.lede,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: page.lede,
      url,
      siteName: 'VoiceTypr',
      images: [{ url: '/voicetypr-og.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.lede,
      images: ['/voicetypr-og.png'],
    },
  };
}

export default async function BestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return notFound();
  const relatedGuides = getRelatedGuidesForSeoSlug(slug);

  return (
    <>
      <main id="main-content" className="landing-editorial relative min-h-screen">
        <Header />
        <section className="ed-section ed-section-hero pb-0 pt-[120px] md:pt-[140px]">
          <div className="ed-container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center gap-2 text-sm text-editorial-ink-3">
                <Link href="/" className="transition-colors hover:text-editorial-ink">
                  VoiceTypr
                </Link>
                <span>/</span>
                <span>Best</span>
              </div>

              <header className="mb-12">
                <h1 className="max-w-3xl text-[clamp(38px,5.2vw,62px)] font-semibold leading-[1.06] tracking-[-0.04em]">
                  {page.h1}
                </h1>
                <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-editorial-ink-2">
                  {page.lede}
                </p>
              </header>

              <section className="mb-12">
                <div className="mb-5 text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                  The shortlist
                </div>
                <div className="overflow-hidden rounded-2xl border border-editorial-line bg-white/82 shadow-sm backdrop-blur">
                  <div className="overflow-x-auto p-1.5">
                    <table className="w-full text-left">
                      <thead>
                        <tr>
                          <th className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                            Tool
                          </th>
                          <th className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                            Price
                          </th>
                          <th className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                            Platforms
                          </th>
                          <th className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                            Offline
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {page.competitors.map((comp) => (
                          <tr
                            key={comp.name}
                            className={comp.name === "VoiceTypr" ? "bg-editorial-surface" : "bg-white"}
                          >
                            <td className="px-3 py-3 pr-4 align-top">
                              <div className="flex items-center gap-2">
                                <span className="text-[15px] font-medium text-editorial-ink">
                                  {comp.name}
                                </span>
                                {comp.subscription && (
                                  <span className="text-[11px] uppercase tracking-[0.1em] text-editorial-ink-3">
                                    Subscription
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-3 py-3 pr-4 text-[14px] text-editorial-ink-2">
                              {comp.price}
                            </td>
                            <td className="px-3 py-3 pr-4 text-[14px] text-editorial-ink-2">
                              {comp.platforms}
                            </td>
                            <td className="px-3 py-3 text-[14px]">
                              <span className={comp.offline.startsWith("Yes") ? "font-medium text-editorial-ink" : "text-editorial-ink-3"}>
                                {comp.offline}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="mb-5 text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                  Why it makes the list
                </div>
                <ul className="space-y-3.5">
                  {page.whySwitch.map((reason, i) => (
                    <li key={i} className="flex items-start gap-3 text-[16px] leading-[1.65] text-editorial-ink-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-editorial-ink" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {relatedGuides.length > 0 ? (
                <div className="mb-12">
                  <RelatedGuidesSection
                    eyebrow="keep going"
                    title="Related guides worth opening next"
                    description="These pages catch the adjacent searches people usually make before they decide what to download."
                    links={relatedGuides}
                    dataTrackPrefix="best-related-guides"
                    embedded
                  />
                </div>
              ) : null}

              <section className="relative overflow-hidden rounded-[2rem] bg-editorial-ink px-6 py-10 text-white shadow-[0_28px_90px_rgba(24,24,26,0.18)] md:px-8 md:py-12">
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#d4965d]/22 blur-3xl" />
                <div className="relative">
                  <h2 className="max-w-2xl text-[30px] font-semibold leading-[1.06] tracking-[-0.03em] text-white md:text-[36px]">
                    {page.ctaText}
                  </h2>
                  <p className="mt-3 text-[15px] text-white/72">
                    3-day free trial. No credit card. All features included.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href="/download"
                      className="inline-flex h-11 items-center rounded-md bg-white px-4 text-sm font-medium text-editorial-ink transition hover:bg-editorial-surface"
                    >
                      Start free trial
                    </Link>
                    <Link
                      href="/#pricing"
                      className="text-sm font-medium text-white/72 transition-colors hover:text-white"
                    >
                      View lifetime pricing
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
