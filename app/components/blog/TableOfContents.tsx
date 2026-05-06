"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/toc";

type TableOfContentsProps = {
  items: TocItem[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(
    items[0]?.slug ?? null,
  );

  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;
    const headings = items
      .map(({ slug }) => document.getElementById(slug))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top,
          );
        const top = visible[0];
        if (top) {
          setActiveSlug((top.target as HTMLElement).id);
        }
      },
      {
        rootMargin: "-20% 0% -55% 0%",
        threshold: [0, 1],
      },
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-4"
    >
      <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-editorial-ink-3 mb-3">
        On this page
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => {
          const active = item.slug === activeSlug;
          return (
            <li
              key={item.slug}
              className={item.level === 3 ? "pl-3" : ""}
            >
              <a
                href={`#${item.slug}`}
                className={`block text-[13px] leading-[1.4] [transition:color_180ms] ${
                  active
                    ? "text-editorial-ink font-medium"
                    : "text-editorial-ink-3 hover:text-editorial-ink-2"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
