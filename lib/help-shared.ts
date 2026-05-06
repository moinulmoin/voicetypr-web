export type HelpCategory =
  | "setup"
  | "usage"
  | "troubleshooting"
  | "billing"
  | "privacy";

export type HelpFrontmatter = {
  title: string;
  description: string;
  category: HelpCategory;
  order?: number;
};

export type HelpArticleMeta = HelpFrontmatter & {
  slug: string;
};

export type HelpArticle = HelpArticleMeta & {
  content: string;
};

export const HELP_CATEGORY_LABELS: Record<HelpCategory, string> = {
  setup: "Getting Started",
  usage: "How to Use",
  troubleshooting: "Troubleshooting",
  billing: "Billing",
  privacy: "Privacy",
};

export function searchArticles<T extends HelpArticleMeta>(
  query: string,
  articles: T[],
): T[] {
  const q = query.trim().toLowerCase();
  if (!q) return articles;
  return articles.filter((a) =>
    a.title.toLowerCase().includes(q) ||
    a.description.toLowerCase().includes(q) ||
    HELP_CATEGORY_LABELS[a.category].toLowerCase().includes(q)
  );
}

export function getAdjacentArticles(
  slug: string,
  articles: HelpArticleMeta[],
): { prev: HelpArticleMeta | null; next: HelpArticleMeta | null } {
  const idx = articles.findIndex((a) => a.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? (articles[idx - 1] ?? null) : null,
    next: idx < articles.length - 1 ? (articles[idx + 1] ?? null) : null,
  };
}

export function groupByCategory(articles: HelpArticleMeta[]): Record<HelpCategory, HelpArticleMeta[]> {
  const grouped: Record<HelpCategory, HelpArticleMeta[]> = {
    setup: [],
    usage: [],
    troubleshooting: [],
    billing: [],
    privacy: [],
  };
  for (const article of articles) {
    grouped[article.category].push(article);
  }
  for (const key of Object.keys(grouped) as HelpCategory[]) {
    grouped[key].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  }
  return grouped;
}
