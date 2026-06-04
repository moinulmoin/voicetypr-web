import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/app/components/sections/Footer";
import Header from "@/app/components/sections/Header";
import { ToolPageShell } from "@/components/tools/tool-page-shell";
import { toolComponents } from "@/components/tools/tool-registry";
import {
  freeTools,
  getAllFreeTools,
  getFreeToolBySlug,
  getFreeToolCanonicalUrl,
} from "@/lib/free-tools";

export async function generateStaticParams() {
  return freeTools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getFreeToolBySlug(slug);
  if (!tool) return {};

  const url = getFreeToolCanonicalUrl(tool.slug);

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: tool.ogTitle,
      description: tool.metaDescription,
      url,
      siteName: "VoiceTypr",
      type: "website",
      images: [
        {
          url: "/voicetypr-og.png",
          width: 1200,
          height: 630,
          alt: tool.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tool.ogTitle,
      description: tool.metaDescription,
      images: ["/voicetypr-og.png"],
      creator: "@moinulmoin",
    },
    robots: { index: true, follow: true },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getFreeToolBySlug(slug);
  if (!tool) return notFound();

  const ToolComponent = toolComponents[slug];
  if (!ToolComponent) return notFound();

  const siblingTools = getAllFreeTools().filter((entry) => entry.slug !== slug);

  return (
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
              <Link href="/tools" className="transition-colors hover:text-editorial-ink">
                Free tools
              </Link>
              <span>/</span>
              <span>{tool.shortTitle}</span>
            </div>

            <ToolPageShell title={tool.title} lede={tool.lede}>
              <ToolComponent />
            </ToolPageShell>

            {siblingTools.length > 0 ? (
              <div className="mt-10 pt-8">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                  More free tools
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {siblingTools.map((sibling) => (
                    <Link
                      key={sibling.slug}
                      href={`/tools/${sibling.slug}`}
                      className="rounded-full border border-editorial-line bg-white/82 px-3 py-1.5 text-[13px] font-medium text-editorial-ink transition hover:border-editorial-ink/30"
                    >
                      {sibling.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
