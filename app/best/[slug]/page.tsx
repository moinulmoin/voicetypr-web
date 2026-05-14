import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSeoPageBySlug, seoPages } from "@/lib/seo-pages";
import { ArrowRight } from "lucide-react";

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
  return {
    title: `${page.h1} — VoiceTypr`,
    description: page.lede,
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

  return (
    <div className="landing-editorial min-h-screen">
      <section className="ed-section ed-section-hero">
        <div className="ed-container py-10 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-2 text-sm text-editorial-ink-3">
              <Link href="/" className="transition-colors hover:text-editorial-ink">
                VoiceTypr
              </Link>
              <span>/</span>
              <span>Best</span>
            </div>

            <header className="mb-12">
              <h1 className="max-w-3xl text-[clamp(38px,5.2vw,62px)] leading-[1.06] tracking-[-0.045em]">
                {page.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-editorial-ink-2">
                {page.lede}
              </p>
            </header>

            <section className="mb-12">
              <h2 className="ed-eyebrow mb-5">The comparison</h2>
              <div className="overflow-x-auto rounded-xl bg-editorial-surface-2 p-1.5">
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
                        className={
                          comp.name === "VoiceTypr"
                            ? "bg-editorial-accent-wash/55"
                            : "bg-white"
                        }
                      >
                        <td className="px-3 py-3 pr-4 align-top">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[15px] font-medium ${
                                comp.name === "VoiceTypr"
                                  ? "text-editorial-accent-ink"
                                  : "text-editorial-ink"
                              }`}
                            >
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
                          <span
                            className={
                              comp.offline.startsWith("Yes")
                                ? "font-medium text-editorial-accent-ink"
                                : "text-editorial-ink-3"
                            }
                          >
                            {comp.offline}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="ed-eyebrow mb-5">Why users switch</h2>
              <ul className="space-y-3.5">
                {page.whySwitch.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] leading-[1.65] text-editorial-ink-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-editorial-accent" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl bg-editorial-surface-2 px-6 py-8 md:px-8">
              <h2 className="max-w-2xl text-[30px] leading-[1.1] tracking-[-0.035em] md:text-[36px]">
                {page.ctaText}
              </h2>
              <p className="mt-3 text-[15px] text-editorial-ink-2">
                3-day free trial. No credit card. All features included.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-editorial-ink px-4 text-sm font-medium text-white transition hover:bg-black"
                >
                  Start free trial
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/#pricing"
                  className="text-sm font-medium text-editorial-ink-2 transition-colors hover:text-editorial-ink"
                >
                  View lifetime pricing
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
