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
    <div>
      <div className="mb-10 border-b border-border pb-7">
        <h1 className="mt-3 mb-3 font-sans text-[clamp(34px,4.2vw,50px)] font-bold leading-[1.08] tracking-tight text-foreground">
          Help Center
        </h1>
        <p className="max-w-[600px] text-base leading-relaxed text-muted-foreground">
          Everything you need to get Voicetypr working. If you can&apos;t find
          what you&apos;re looking for, email{" "}
          <a
            href="mailto:support@voicetypr.com"
            className="text-foreground underline-offset-4 hover:underline"
          >
            support@voicetypr.com
          </a>
          .
        </p>
      </div>

      <div className="mb-8 max-w-xl rounded-2xl border border-border bg-muted p-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search help articles…"
            className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-border focus:outline-none focus:ring-2 focus:ring-sage/50"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground">
          No articles found for &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid gap-8">
          {CATEGORY_ORDER.map((cat) => {
            const items = grouped[cat];
            if (!items?.length) return null;
            return (
              <section key={cat}>
                <h2 className="mb-3 text-sm font-semibold text-sage">
                  {HELP_CATEGORY_LABELS[cat]}
                </h2>
                <div className="max-w-[680px] divide-y divide-border">
                  {items.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/help/${article.slug}`}
                      className="group block px-1 py-4 transition hover:bg-muted/60"
                    >
                      <h3 className="text-[15px] font-semibold text-foreground transition-colors group-hover:text-sage">
                        {article.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
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
