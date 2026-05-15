"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  groupByCategory,
  searchArticles,
  HELP_CATEGORY_LABELS,
} from "@/lib/help-shared";
import type { HelpCategory, HelpArticleMeta } from "@/lib/help-shared";

const CATEGORY_ORDER: HelpCategory[] = [
  "setup",
  "usage",
  "troubleshooting",
  "billing",
  "privacy",
];

export default function HelpHubClient({
  articles,
}: {
  articles: HelpArticleMeta[];
}) {
  const [query, setQuery] = useState("");

  const filtered = searchArticles(query, articles);
  const grouped = groupByCategory(filtered);

  return (
    <div className="ed-section ed-section-hero">
      <div className="mb-10 border-b border-editorial-line pb-7">
        <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">Support · docs</span>
        <h1 className="mt-3 mb-3 font-sans text-[clamp(34px,4.2vw,50px)] font-semibold leading-[1.08] tracking-[-0.02em] text-editorial-ink">
          Help Center
        </h1>
        <p className="max-w-[600px] text-[16px] leading-[1.65] text-editorial-ink-2">
          Everything you need to get VoiceTypr working. If you can&apos;t find
          what you&apos;re looking for, email{" "}
          <a
            href="mailto:support@voicetypr.com"
            className="text-editorial-ink underline-offset-4 hover:underline"
          >
            support@voicetypr.com
          </a>
          .
        </p>
      </div>

      <div className="mb-8 max-w-xl rounded-2xl border border-editorial-line bg-editorial-surface-2 p-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-editorial-ink-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search help articles…"
            className="w-full rounded-xl border border-editorial-line bg-white py-3 pl-10 pr-4 text-sm text-editorial-ink placeholder:text-editorial-ink-3 focus:border-editorial-line-2 focus:outline-none focus:ring-2 focus:ring-editorial-line/60"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl bg-editorial-surface-2 px-4 py-3 text-sm text-editorial-ink-3">
          No articles found for &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid gap-8">
          {CATEGORY_ORDER.map((cat) => {
            const items = grouped[cat];
            if (!items?.length) return null;
            return (
              <section key={cat}>
                <h2 className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                  {HELP_CATEGORY_LABELS[cat]}
                </h2>
                <div className="max-w-[680px] divide-y divide-editorial-line/70">
                  {items.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/help/${article.slug}`}
                      className="group block px-1 py-4 transition hover:bg-editorial-surface-2/60"
                    >
                      <h3 className="text-[15px] font-semibold text-editorial-ink transition-colors group-hover:text-editorial-ink">
                        {article.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-[1.55] text-editorial-ink-3">
                        {article.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
