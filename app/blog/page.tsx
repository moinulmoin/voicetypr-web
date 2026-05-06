import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import {
  BLOG_CATEGORY_LABELS,
  formatPublishedAt,
  getAllPosts,
  type BlogPostMeta,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — VoiceTypr",
  description:
    "Notes from building VoiceTypr, an offline AI voice-to-text app for founders, developers, and AI power users.",
  alternates: { canonical: "https://voicetypr.com/blog" },
  openGraph: {
    title: "Blog — VoiceTypr",
    description:
      "Notes from building an offline voice-to-text app. Founder essays, workflow tutorials, and honest comparisons.",
    url: "https://voicetypr.com/blog",
    siteName: "VoiceTypr",
    type: "website",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

function PostMeta({ post }: { post: BlogPostMeta }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px] text-editorial-ink-3">
      <span>{BLOG_CATEGORY_LABELS[post.category]}</span>
      <span aria-hidden>·</span>
      <time dateTime={post.publishedAt}>
        {formatPublishedAt(post.publishedAt)}
      </time>
      <span aria-hidden>·</span>
      <span>{post.readingTimeMinutes} min read</span>
    </div>
  );
}

function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-editorial-surface border border-editorial-line rounded-xl p-6 [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1),border-color_300ms] hover:border-editorial-ink-3 active:scale-[0.99] h-full flex flex-col"
      data-track="blog-card-click"
      data-track-slug={post.slug}
    >
      <PostMeta post={post} />
      <h2 className="text-[18px] md:text-[20px] font-semibold !font-sans leading-[1.25] tracking-[-0.01em] mt-3 mb-2">
        {post.title}
      </h2>
      <p className="text-editorial-ink-2 text-[15px] leading-[1.6] mb-4 flex-1">
        {post.description}
      </p>
      <div className="inline-flex items-center gap-1 text-[13px] text-editorial-ink-3 group-hover:text-editorial-ink-2 [transition:color_200ms]">
        Read
        <span aria-hidden className="[transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  );
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <main
        id="main-content"
        className="landing-editorial relative min-h-screen"
      >
        <Header />

        <section className="ed-section pt-[120px] md:pt-[140px] pb-0">
          <div className="ed-container">
            <div className="max-w-[820px]">
              <h1 className="text-[clamp(40px,6vw,72px)] font-semibold !font-sans leading-[0.95] tracking-[-0.03em] mb-4">
                Blog
              </h1>
              <p className="text-[17px] md:text-[18px] leading-[1.55] text-editorial-ink-2 max-w-[560px]">
                Notes on building VoiceTypr — workflows, comparisons, and what I learned shipping an offline voice-to-text app.
              </p>
            </div>
          </div>
        </section>

        <section className="ed-section">
          <div className="ed-container">
            {posts.length === 0 ? (
              <p className="text-[14px] text-editorial-ink-3 py-12">
                No posts yet. Check back soon.
              </p>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
