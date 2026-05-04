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
    "Notes from building VoiceTypr, an offline AI voice-to-text app for founders, developers, and AI power users. Founder essays, workflow tutorials, and honest comparisons.",
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
    <div className="flex flex-wrap items-center gap-3 font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3">
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

function FeaturedPost({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-editorial-surface border border-editorial-line rounded-[28px] p-8 md:p-12 [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1),border-color_300ms] hover:border-editorial-ink-3 active:scale-[0.99]"
      data-track="blog-featured-click"
      data-track-slug={post.slug}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12">
        <div className="lg:max-w-[180px]">
          <div className="font-mono uppercase tracking-[0.18em] text-[10px] text-editorial-accent mb-3">
            Latest
          </div>
          <PostMeta post={post} />
        </div>

        <div>
          <h2 className="font-serif text-[clamp(36px,4.4vw,60px)] leading-[1.04] tracking-[-0.02em] mb-4">
            {post.title}
          </h2>
          <p className="text-editorial-ink-2 text-[17px] leading-[1.6] max-w-[700px] mb-6">
            {post.description}
          </p>
          <div className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.14em] text-[11px] text-editorial-ink [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
            Read the piece
            <span aria-hidden>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-editorial-surface border border-editorial-line rounded-2xl p-7 [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1),border-color_300ms] hover:border-editorial-ink-3 active:scale-[0.99] h-full flex flex-col"
      data-track="blog-card-click"
      data-track-slug={post.slug}
    >
      <PostMeta post={post} />
      <h3 className="font-serif text-[clamp(22px,2.4vw,28px)] leading-[1.15] tracking-[-0.005em] mt-4 mb-3">
        {post.title}
      </h3>
      <p className="text-editorial-ink-2 text-[15px] leading-[1.6] mb-6 flex-1">
        {post.description}
      </p>
      <div className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3 group-hover:text-editorial-ink-2 [transition:color_200ms]">
        Read the piece
        <span aria-hidden className="[transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  );
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

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
              <div className="ed-eyebrow">field notes from a one-person shop</div>
              <h1 className="font-serif text-[clamp(56px,7vw,108px)] leading-[0.96] tracking-[-0.025em] mt-3 mb-5">
                The <em>VoiceTypr</em> notebook.
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[1.55] text-editorial-ink-2 max-w-[640px]">
                Essays on what I&rsquo;m building, what worked, what didn&rsquo;t,
                and the math behind shipping voice software you actually own.
              </p>
            </div>
          </div>
        </section>

        <section className="ed-section">
          <div className="ed-container">
            {!featured ? (
              <p className="font-mono uppercase tracking-[0.14em] text-[12px] text-editorial-ink-3 py-12">
                The first piece is being written. Check back soon.
              </p>
            ) : (
              <div className="space-y-10 md:space-y-14">
                <FeaturedPost post={featured} />

                {rest.length > 0 ? (
                  <div>
                    <div className="ed-eyebrow mb-6">earlier from the notebook</div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      {rest.map((post) => (
                        <li key={post.slug}>
                          <PostCard post={post} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
