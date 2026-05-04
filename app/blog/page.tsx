import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import {
  BLOG_CATEGORY_LABELS,
  formatPublishedAt,
  getAllPosts,
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
            {posts.length === 0 ? (
              <p className="font-mono uppercase tracking-[0.14em] text-[12px] text-editorial-ink-3 py-12">
                The first piece is being written. Check back soon.
              </p>
            ) : (
              <ul className="grid grid-cols-1 gap-5 md:gap-6">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block bg-editorial-surface border border-editorial-line rounded-2xl p-7 md:p-9 [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1),border-color_300ms] hover:border-editorial-ink-3 active:scale-[0.99]"
                      data-track="blog-card-click"
                      data-track-slug={post.slug}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4 font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3">
                        <span>{BLOG_CATEGORY_LABELS[post.category]}</span>
                        <span aria-hidden>·</span>
                        <time dateTime={post.publishedAt}>
                          {formatPublishedAt(post.publishedAt)}
                        </time>
                        <span aria-hidden>·</span>
                        <span>{post.readingTimeMinutes} min read</span>
                      </div>

                      <h2 className="font-serif text-[clamp(28px,3.2vw,40px)] leading-[1.08] tracking-[-0.01em] mb-3 group-hover:text-editorial-ink">
                        {post.title}
                      </h2>

                      <p className="text-editorial-ink-2 text-[16px] leading-[1.6] max-w-[680px]">
                        {post.description}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.14em] text-[11px] text-editorial-ink [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                        Read the piece
                        <span aria-hidden>→</span>
                      </div>
                    </Link>
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
