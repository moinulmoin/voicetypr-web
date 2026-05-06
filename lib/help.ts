import path from "node:path";
import { promises as fs } from "node:fs";
import matter from "gray-matter";
import type { HelpArticle, HelpArticleMeta, HelpCategory } from "./help-shared";

const HELP_DIR = path.join(process.cwd(), "content", "help");

async function readArticleFile(slug: string): Promise<HelpArticle | null> {
  try {
    const filePath = path.join(HELP_DIR, `${slug}.mdx`);
    const raw = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title,
      description: data.description,
      category: data.category as HelpCategory,
      order: data.order,
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(HELP_DIR);
    return files
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content: _content, ...meta } = article;
      return meta;
    })
  );
  return articles
    .filter((a): a is NonNullable<typeof a> => a !== null)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export async function getArticleBySlug(slug: string): Promise<HelpArticle | null> {
  return readArticleFile(slug);
}

// Re-export shared utilities for convenience
export {
  HELP_CATEGORY_LABELS,
  searchArticles,
  getAdjacentArticles,
  groupByCategory,
} from "./help-shared";

export type {
  HelpCategory,
  HelpFrontmatter,
  HelpArticleMeta,
  HelpArticle,
} from "./help-shared";
