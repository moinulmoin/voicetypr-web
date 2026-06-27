import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getAllArticles,
  getAllSlugs,
  getArticleBySlug,
  getAdjacentArticles,
} from "@/lib/help";
import { mdxComponents } from "@/app/components/blog/MdxComponents";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const title = `${article.title} — Voicetypr Help`;
  const url = `https://voicetypr.com/help/${article.slug}`;
  return {
    title,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: article.description,
      url,
      siteName: 'Voicetypr',
      images: [{ url: '/voicetypr-og.png', width: 1200, height: 630 }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: article.description,
      images: ['/voicetypr-og.png'],
    },
  };
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return notFound();

  const allArticles = await getAllArticles();
  const { prev, next } = getAdjacentArticles(slug, allArticles);

  return (
    <article className="pt-4">
      <header className="mb-10 border-b border-border pb-7">
        <span className="text-sm font-medium text-muted-foreground">Support · article</span>
        <h1 className="mt-3 mb-3 font-sans text-[clamp(32px,4vw,46px)] font-bold leading-[1.1] tracking-tight text-foreground">
          {article.title}
        </h1>
        <p className="max-w-[640px] text-base leading-relaxed text-muted-foreground">
          {article.description}
        </p>
      </header>

      <div className="max-w-[680px]">
        <MDXRemote
          source={article.content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      {/* Prev/Next */}
      <nav className="mt-16 grid gap-4 border-t border-border pt-8 md:grid-cols-2">
        {prev ? (
          <Link
            href={`/help/${prev.slug}`}
            className="group rounded-xl bg-muted p-4 text-left transition-colors hover:bg-card"
          >
            <span className="mb-1 block text-xs text-muted-foreground">
              &larr; Previous
            </span>
            <span className="text-[15px] font-semibold text-foreground">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/help/${next.slug}`}
            className="group rounded-xl bg-muted p-4 text-left transition-colors hover:bg-card md:text-right"
          >
            <span className="mb-1 block text-xs text-muted-foreground">
              Next &rarr;
            </span>
            <span className="text-[15px] font-semibold text-foreground">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
