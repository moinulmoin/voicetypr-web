import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import { mdxComponents } from "@/app/components/blog/MdxComponents";
import { Aside } from "@/app/components/blog/Aside";
import { AuthorBlock } from "@/app/components/blog/AuthorBlock";
import { PostNavigation } from "@/app/components/blog/PostNavigation";
import { Pullquote } from "@/app/components/blog/Pullquote";
import { ReadingProgress } from "@/app/components/blog/ReadingProgress";
import { TableOfContents } from "@/app/components/blog/TableOfContents";
import { extractToc } from "@/lib/toc";
import {
  BLOG_CATEGORY_LABELS,
  formatPublishedAt,
  getAdjacentPosts,
  getAllSlugs,
  getPostBySlug,
} from "@/lib/blog";

type RouteParams = { slug: string };

type PageProps = {
  params: Promise<RouteParams>;
};

export async function generateStaticParams(): Promise<RouteParams[]> {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const url = `https://voicetypr.com/blog/${post.slug}`;
  const ogImage = post.ogImage ?? "/voicetypr-og.png";

  return {
    title: `${post.title} — VoiceTypr`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      siteName: "VoiceTypr",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["Moinul Moin"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
      creator: "@moinulmoin",
    },
    robots: { index: !post.draft, follow: true },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const toc = extractToc(post.content);
  const { prev, next } = await getAdjacentPosts(post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: "Moinul Moin",
      url: "https://voicetypr.com",
    },
    publisher: {
      "@type": "Organization",
      name: "VoiceTypr",
      url: "https://voicetypr.com",
    },
    mainEntityOfPage: `https://voicetypr.com/blog/${post.slug}`,
    image: post.ogImage ?? "https://voicetypr.com/voicetypr-og.png",
  };

  const showToc = toc.length >= 3;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ReadingProgress />

      <main
        id="main-content"
        className="landing-editorial relative min-h-screen"
      >
        <Header />

        <article className="ed-section pt-[120px] md:pt-[140px] pb-0">
          <div className="ed-container">
            <div className="max-w-[760px]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 mb-9 font-mono uppercase tracking-[0.14em] text-[11px] text-editorial-ink-3 hover:text-editorial-ink-2 [transition:color_200ms]"
              >
                <span aria-hidden>←</span>
                The VoiceTypr notebook
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-5 font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3">
                <span>{BLOG_CATEGORY_LABELS[post.category]}</span>
                <span aria-hidden>·</span>
                <time dateTime={post.publishedAt}>
                  {formatPublishedAt(post.publishedAt)}
                </time>
                <span aria-hidden>·</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>

              <h1 className="font-serif text-[clamp(40px,5vw,72px)] leading-[1] tracking-[-0.022em] mb-6">
                {post.title}
              </h1>

              <p className="text-[19px] md:text-[20px] leading-[1.55] text-editorial-ink-2 mb-12 border-b border-editorial-line pb-10">
                {post.description}
              </p>
            </div>
          </div>
        </article>

        <section className="ed-section pt-0">
          <div className="ed-container">
            <div
              className={
                showToc
                  ? "grid grid-cols-1 lg:grid-cols-[760px_1fr] gap-12"
                  : ""
              }
            >
              <div className="max-w-[760px]">
                <MDXRemote
                  source={post.content}
                  components={{ ...mdxComponents, Pullquote, Aside }}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        rehypeSlug,
                        [
                          rehypePrettyCode,
                          {
                            theme: "github-light",
                            keepBackground: false,
                          },
                        ],
                      ],
                    },
                  }}
                />

                <AuthorBlock />

                {/* Closing CTA — recurs across all posts */}
                <div className="mt-12 pt-10 border-t border-editorial-line">
                  <div className="ed-eyebrow">try the thing this post is about</div>
                  <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.1] mt-3 mb-3 max-w-[600px]">
                    VoiceTypr is the offline voice-to-text app I wish existed.
                  </h2>
                  <p className="text-editorial-ink-2 text-[16px] leading-[1.6] max-w-[600px] mb-6">
                    Pay once. Run locally. Three-day trial, no card.
                  </p>
                  <Link
                    href="/download"
                    className="group inline-flex items-center gap-2 rounded-full bg-editorial-ink text-white pl-6 pr-1.5 py-1.5 text-[15px] font-medium [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                    data-track="blog-cta-click"
                    data-track-slug={post.slug}
                  >
                    Try VoiceTypr
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>

                <PostNavigation prev={prev} next={next} />
              </div>

              {showToc ? (
                <aside className="hidden lg:block">
                  <TableOfContents items={toc} />
                </aside>
              ) : null}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
