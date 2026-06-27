import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
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
    <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
      <SiteHeader />
      <Section>
        <Container>
          <div className="lg:hidden mb-8">
            <Link
              href="/help"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>&larr;</span> Help Center
            </Link>
          </div>

          <div className="lg:flex lg:gap-16">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <nav className="sticky top-24">
                <Link
                  href="/help"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                  <span>&larr;</span> Help Center
                </Link>

                {categoryOrder.map((cat) => {
                  const items = grouped[cat];
                  if (!items?.length) return null;
                  return (
                    <div key={cat} className="mb-6">
                      <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3">
                        {HELP_CATEGORY_LABELS[cat]}
                      </h3>
                      <ul className="space-y-1.5">
                        {items.map((article) => (
                          <li key={article.slug}>
                            <Link
                              href={`/help/${article.slug}`}
                              className="block py-0.5 text-sm leading-normal text-muted-foreground transition-colors hover:text-foreground"
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

            {/* Main content */}
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </Container>
      </Section>
      <SiteFooter />
    </main>
  );
}
