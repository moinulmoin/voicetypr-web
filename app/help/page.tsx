import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, groupByCategory, HELP_CATEGORY_LABELS } from "@/lib/help";
import type { HelpCategory } from "@/lib/help";

export const metadata: Metadata = {
  title: "Help Center — VoiceTypr",
  description:
    "Get help with VoiceTypr. Installation guides, troubleshooting, billing, and privacy documentation.",
};

export default async function HelpHubPage() {
  const articles = await getAllArticles();
  const grouped = groupByCategory(articles);
  const categoryOrder: HelpCategory[] = [
    "setup",
    "usage",
    "troubleshooting",
    "billing",
    "privacy",
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.02em] mb-4">
          Help Center
        </h1>
        <p className="text-[17px] leading-[1.6] text-editorial-ink-2 max-w-[560px]">
          Everything you need to get VoiceTypr working. If you can&apos;t find what
          you&apos;re looking for, email{" "}
          <a
            href="mailto:support@voicetypr.com"
            className="text-editorial-accent hover:underline"
          >
            support@voicetypr.com
          </a>
          .
        </p>
      </div>

      <div className="grid gap-8">
        {categoryOrder.map((cat) => {
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
    </div>
  );
}
