import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAlternativePageBySlug,
  alternativePages,
} from "@/lib/seo-pages";
import { ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return alternativePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getAlternativePageBySlug(slug);
  if (!page) return {};
  return {
    title: `${page.h1} — VoiceTypr`,
    description: page.lede,
  };
}

export default async function AlternativePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getAlternativePageBySlug(slug);
  if (!page) return notFound();

  return (
    <div className="landing-editorial min-h-screen">
      <section className="ed-section ed-section-hero">
        <div className="ed-container py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm text-editorial-ink-3 hover:text-editorial-ink transition-colors"
            >
              VoiceTypr
            </Link>
            <span className="mx-2 text-editorial-ink-3">/</span>
            <span className="text-sm text-editorial-ink-3">Alternative</span>
          </div>

          <header className="mb-12">
            <h1 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.02em] mb-5">
              {page.h1}
            </h1>
            <p className="text-[18px] leading-[1.6] text-editorial-ink-2 max-w-[640px]">
              {page.lede}
            </p>
          </header>

          {/* Comparison table */}
          <section className="mb-14">
            <h2 className="ed-eyebrow mb-6">Side by side</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-editorial-line">
                    <th className="pb-3 text-xs font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                      Tool
                    </th>
                    <th className="pb-3 text-xs font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                      Price
                    </th>
                    <th className="pb-3 text-xs font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                      Platforms
                    </th>
                    <th className="pb-3 text-xs font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
                      Offline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.competitors.map((comp) => (
                    <tr
                      key={comp.name}
                      className={`border-b border-editorial-line-2 ${
                        comp.name === "VoiceTypr"
                          ? "bg-editorial-accent-wash/30"
                          : ""
                      }`}
                    >
                      <td className="py-3.5 pr-4">
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
                          <span className="ml-2 text-[11px] text-editorial-ink-3">
                            subscription
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 pr-4 text-[14px] text-editorial-ink-2">
                        {comp.price}
                      </td>
                      <td className="py-3.5 pr-4 text-[14px] text-editorial-ink-2">
                        {comp.platforms}
                      </td>
                      <td className="py-3.5 text-[14px]">
                        <span
                          className={
                            comp.offline.startsWith("Yes")
                              ? "text-editorial-accent-ink font-medium"
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

          {/* Why switch */}
          <section className="mb-14">
            <h2 className="ed-eyebrow mb-6">Why users switch</h2>
            <ul className="space-y-3">
              {page.whySwitch.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-editorial-accent flex-shrink-0" />
                  <span className="text-[16px] leading-[1.6] text-editorial-ink-2">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="rounded-xl bg-editorial-surface-2 p-8 md:p-10">
            <h2 className="font-serif text-[28px] leading-[1.2] tracking-[-0.01em] mb-3">
              {page.ctaText}
            </h2>
            <p className="text-[15px] text-editorial-ink-2 mb-6 max-w-[480px]">
              3-day free trial. No credit card. All features included.
            </p>
            <Link
              href="/download"
              className="group inline-flex items-center gap-2 rounded-lg bg-editorial-ink py-2 pl-5 pr-2 text-sm font-medium text-white transition-colors hover:bg-black"
            >
              Start free trial
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>
          </section>
        </div>
        </div>
      </section>
    </div>
  );
}
