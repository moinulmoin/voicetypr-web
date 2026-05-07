import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import {
  BLOG_CATEGORY_LABELS,
  formatPublishedAt,
  getAllPosts,
  type BlogPostMeta,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — VoiceTypr",
  description:
    "Notes on building VoiceTypr. Workflows, comparisons, and what I learned shipping an offline voice-to-text app.",
};

function PostMeta({ post }: { post: BlogPostMeta }) {
  return (
    <div className="flex items-center gap-2 text-[13px] text-editorial-ink-3">
      <span>{BLOG_CATEGORY_LABELS[post.category]}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={post.publishedAt}>
        {formatPublishedAt(post.publishedAt)}
      </time>
      <span aria-hidden="true">·</span>
      <span>{post.readingTimeMinutes} min read</span>
    </div>
  );
}

function PostCard({ post, featured = false }: { post: BlogPostMeta; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block py-8 [transition:opacity_200ms] hover:opacity-80"
      data-track="blog-card-click"
      data-track-slug={post.slug}
    >
      <PostMeta post={post} />
      <h2
        className={`font-semibold !font-sans leading-[1.15] tracking-[-0.02em] mt-3 mb-3 ${
          featured
            ? "text-[clamp(24px,3vw,36px)]"
            : "text-[clamp(20px,2.5vw,28px)]"
        }`}
      >
        {post.title}
      </h2>
      <p className="text-editorial-ink-2 text-[16px] leading-[1.6] max-w-[640px]">
        {post.description}
      </p>
      <div className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium text-editorial-ink group-hover:text-editorial-accent-ink [transition:color_200ms]">
        Read
        <span
          aria-hidden
          className="[transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>
    </Link>
  );
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const [first, ...rest] = posts;

  return (
    <>
      <main
        id="main-content"
        className="landing-editorial relative min-h-screen"
      >
        <Header />

        <section className="ed-section ed-section-hero pt-[120px] md:pt-[140px] pb-0">
          <div className="ed-container">
            <div className="max-w-[820px]">
              <h1 className="text-[clamp(40px,6vw,72px)] font-semibold !font-sans leading-[0.95] tracking-[-0.03em] mb-4">
                Blog
              </h1>
              <p className="text-[17px] md:text-[18px] leading-[1.55] text-editorial-ink-2 max-w-[560px]">
                Notes on building VoiceTypr — workflows, comparisons, and what I
                learned shipping an offline voice-to-text app.
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
              <div className="max-w-[760px]">
                {first && (
                  <div className="border-b border-editorial-line">
                    <PostCard post={first} featured />
                  </div>
                )}
                {rest.length > 0 && (
                  <div>
                    {rest.map((post) => (
                      <div
                        key={post.slug}
                        className="border-b border-editorial-line last:border-b-0"
                      >
                        <PostCard post={post} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
