"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  groupByCategory,
  searchArticles,
  HELP_CATEGORY_LABELS,
} from "@/lib/help";
import type { HelpCategory, HelpArticleMeta } from "@/lib/help";

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
    <div>
      <div className="mb-10">
        <h1 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.02em] mb-4">
          Help Center
        </h1>
        <p className="text-[17px] leading-[1.6] text-editorial-ink-2 max-w-[560px]">
          Everything you need to get VoiceTypr working. If you can&apos;t find
          what you&apos;re looking for, email{" "}
          <a
            href="mailto:support@voicetypr.com"
            className="text-editorial-accent hover:underline"
          >
            support@voicetypr.com
          </a>
          .
        </p>
      </div>

      <div className="relative mb-8 max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-editorial-ink-3" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search help articles…"
          className="rounded-lg border border-editorial-line bg-white pl-10 pr-4 py-3 text-sm text-editorial-ink placeholder:text-editorial-ink-3 focus:border-editorial-accent focus:ring-2 focus:ring-editorial-accent/20 focus:outline-none w-full"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-editorial-ink-3">
          No articles found for &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid gap-8">
          {CATEGORY_ORDER.map((cat) => {
            const items = grouped[cat];
            if (!items?.length) return null;
            return (
              <section key={cat}>
                <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-editorial-ink-3 mb-4">
                  {HELP_CATEGORY_LABELS[cat]}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {items.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/help/${article.slug}`}
                      className="group block rounded-lg border border-editorial-line p-5 hover:border-editorial-accent/30 hover:bg-editorial-surface-2/50 transition-all"
                    >
                      <h3 className="text-[15px] font-medium text-editorial-ink group-hover:text-editorial-accent-ink transition-colors mb-1">
                        {article.title}
                      </h3>
                      <p className="text-[13px] leading-[1.5] text-editorial-ink-3">
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
