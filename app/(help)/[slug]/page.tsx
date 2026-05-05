import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
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

  return {
    title: `${article.title} — VoiceTypr Help`,
    description: article.description,
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
    <article>
      <header className="mb-10">
        <h1 className="font-serif text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] mb-3">
          {article.title}
        </h1>
        <p className="text-[17px] leading-[1.6] text-editorial-ink-2 max-w-[640px]">
          {article.description}
        </p>
      </header>

      <div className="prose-editorial max-w-[680px]">
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>

      {/* Prev/Next */}
      <nav className="mt-16 pt-8 border-t border-editorial-line flex justify-between gap-4">
        {prev ? (
          <Link
            href={`/help/${prev.slug}`}
            className="group text-left"
          >
            <span className="block text-xs uppercase tracking-[0.1em] text-editorial-ink-3 mb-1">
              &larr; Previous
            </span>
            <span className="text-[15px] font-medium text-editorial-ink group-hover:text-editorial-accent transition-colors">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/help/${next.slug}`}
            className="group text-right"
          >
            <span className="block text-xs uppercase tracking-[0.1em] text-editorial-ink-3 mb-1">
              Next &rarr;
            </span>
            <span className="text-[15px] font-medium text-editorial-ink group-hover:text-editorial-accent transition-colors">
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
