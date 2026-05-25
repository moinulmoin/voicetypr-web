import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/app/components/sections/Footer";
import Header from "@/app/components/sections/Header";
import { ToolPageShell } from "@/components/tools/tool-page-shell";
import { toolComponents } from "@/components/tools/tool-registry";
import { freeTools, getFreeToolBySlug } from "@/lib/free-tools";

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

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: { canonical: `/tools/${tool.slug}` },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getFreeToolBySlug(slug);
  if (!tool) return notFound();

  const ToolComponent = toolComponents[slug];
  if (!ToolComponent) return notFound();

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
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
