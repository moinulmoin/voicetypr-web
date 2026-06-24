import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { toolComponents } from "@/components/tools/tool-registry";
import {
  freeTools,
  getAllFreeTools,
  getFreeToolBySlug,
  getFreeToolCanonicalUrl,
} from "@/lib/free-tools";

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

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
      siteName: "Voicetypr",
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Voicetypr", item: "https://voicetypr.com/" },
      { "@type": "ListItem", position: 2, name: "Free tools", item: "https://voicetypr.com/tools" },
      { "@type": "ListItem", position: 3, name: tool.shortTitle, item: getFreeToolCanonicalUrl(slug) },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
        <SiteHeader />

        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-foreground">
                  Voicetypr
                </Link>
                <span aria-hidden>/</span>
                <Link href="/tools" className="transition-colors hover:text-foreground">
                  Free tools
                </Link>
                <span aria-hidden>/</span>
                <span className="text-foreground">{tool.shortTitle}</span>
              </nav>

              <div className="rounded-3xl border border-border bg-card p-5 md:p-10">
                <header className="mb-8 border-b border-border pb-8">
                  <h1 className="max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-foreground">
                    {tool.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                    {tool.lede}
                  </p>
                </header>
                <ToolComponent />
              </div>

              {siblingTools.length > 0 ? (
                <div className="mt-10 pt-2">
                  <p className="text-sm font-medium text-muted-foreground">More free tools</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {siblingTools.map((sibling) => (
                      <Link
                        key={sibling.slug}
                        href={`/tools/${sibling.slug}`}
                        className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        {sibling.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </Container>
        </Section>

        <SiteFooter />
      </main>
    </>
  );
}
