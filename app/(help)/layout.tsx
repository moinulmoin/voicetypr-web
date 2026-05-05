import Link from "next/link";
import {
  getAllArticles,
  groupByCategory,
  HELP_CATEGORY_LABELS,
} from "@/lib/help";
import type { HelpCategory } from "@/lib/help";

export default async function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <div className="min-h-screen bg-white">
      <div className="ed-container py-12 md:py-16">
        <div className="flex gap-12 lg:gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <nav className="sticky top-24">
              <Link
                href="/help"
                className="inline-flex items-center gap-2 text-sm text-editorial-ink-3 hover:text-editorial-ink transition-colors mb-8"
              >
                <span>&larr;</span> Help Center
              </Link>

              {categoryOrder.map((cat) => {
                const items = grouped[cat];
                if (!items?.length) return null;
                return (
                  <div key={cat} className="mb-6">
                    <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-editorial-ink-3 mb-3">
                      {HELP_CATEGORY_LABELS[cat]}
                    </h3>
                    <ul className="space-y-1.5">
                      {items.map((article) => (
                        <li key={article.slug}>
                          <Link
                            href={`/help/${article.slug}`}
                            className="block text-[14px] leading-[1.5] text-editorial-ink-2 hover:text-editorial-accent transition-colors py-0.5"
                          >
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* Mobile nav */}
          <div className="lg:hidden mb-8">
            <Link
              href="/help"
              className="inline-flex items-center gap-2 text-sm text-editorial-ink-3 hover:text-editorial-ink transition-colors"
            >
              <span>&larr;</span> Help Center
            </Link>
          </div>

          {/* Main content */}
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
