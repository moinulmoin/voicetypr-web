import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { BLOG_CATEGORY_LABELS } from "@/lib/blog";

type PostNavigationProps = {
  prev?: BlogPostMeta | null;
  next?: BlogPostMeta | null;
};

export function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="More from the notebook"
      className="mt-16 pt-10 border-t border-editorial-line grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group block bg-editorial-surface border border-editorial-line rounded-2xl p-6 [transition:border-color_300ms,transform_300ms_cubic-bezier(0.32,0.72,0,1)] hover:border-editorial-ink-3 active:scale-[0.99]"
          data-track="blog-prev-click"
        >
          <div className="font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3 mb-3">
            ← Previous · {BLOG_CATEGORY_LABELS[prev.category]}
          </div>
          <div className="font-serif text-[20px] leading-[1.2] text-editorial-ink">
            {prev.title}
          </div>
        </Link>
      ) : (
        <div aria-hidden />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group block bg-editorial-surface border border-editorial-line rounded-2xl p-6 text-right [transition:border-color_300ms,transform_300ms_cubic-bezier(0.32,0.72,0,1)] hover:border-editorial-ink-3 active:scale-[0.99]"
          data-track="blog-next-click"
        >
          <div className="font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3 mb-3">
            Next · {BLOG_CATEGORY_LABELS[next.category]} →
          </div>
          <div className="font-serif text-[20px] leading-[1.2] text-editorial-ink">
            {next.title}
          </div>
        </Link>
      ) : (
        <div aria-hidden />
      )}
    </nav>
  );
}
