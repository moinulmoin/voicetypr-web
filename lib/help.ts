import path from "node:path";
import { promises as fs } from "node:fs";
import matter from "gray-matter";

const HELP_DIR = path.join(process.cwd(), "content", "help");

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
  order: number;
};

export type HelpArticleMeta = HelpFrontmatter & {
  slug: string;
};

export type HelpArticle = HelpArticleMeta & {
  content: string;
};

export const HELP_CATEGORY_LABELS: Record<HelpCategory, string> = {
  setup: "Setup",
  usage: "Using VoiceTypr",
  troubleshooting: "Troubleshooting",
  billing: "Billing & Licenses",
  privacy: "Privacy & Security",
};
export function searchArticles<T extends HelpArticleMeta>(
  query: string,
  articles: T[],
): T[] {
  const q = query.toLowerCase().trim();
  if (!q) return articles;
  return articles.filter((a) => {
    const haystack = `${a.title} ${a.description} ${HELP_CATEGORY_LABELS[a.category]}`.toLowerCase();
    return haystack.includes(q);
  });
}

async function readArticleFile(slug: string): Promise<HelpArticle | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const filePath = path.join(HELP_DIR, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(raw);
    const fm = data as HelpFrontmatter;
    if (!fm.title || !fm.description || !fm.category) {
      throw new Error(
        `Help article ${slug} is missing required frontmatter`,
      );
    }
    return {
      ...fm,
      slug,
      content,
    };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(HELP_DIR);
    return entries
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getAllArticles(): Promise<HelpArticleMeta[]> {
  const slugs = await getAllSlugs();
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const article = await readArticleFile(slug);
      if (!article) return null;
      return {
        slug: article.slug,
        title: article.title,
        description: article.description,
        category: article.category,
        order: article.order,
      };
    }),
  );
  return articles
    .filter((a): a is HelpArticleMeta => a !== null)
    .sort((a, b) => {
      // Sort by category order, then by article order
      const catOrder: HelpCategory[] = ["setup", "usage", "troubleshooting", "billing", "privacy"];
      const catDiff = catOrder.indexOf(a.category) - catOrder.indexOf(b.category);
      if (catDiff !== 0) return catDiff;
      return (a.order || 0) - (b.order || 0);
    });
}

export async function getArticleBySlug(slug: string): Promise<HelpArticle | null> {
  return readArticleFile(slug);
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
  const grouped: Record<string, HelpArticleMeta[]> = {};
  for (const article of articles) {
    const cat = article.category;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat]!.push(article);
  }
  return grouped as Record<HelpCategory, HelpArticleMeta[]>;
}
