import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogCategory =
  | "founder-story"
  | "tutorial"
  | "comparison"
  | "benchmark"
  | "essay";

export type BlogFrontmatter = {
  title: string;
  description: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  category: BlogCategory;
  keywords?: string[];
  ogImage?: string;
  /** Hide post from index but keep route reachable. */
  draft?: boolean;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingTimeMinutes: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

async function readPostFile(slug: string): Promise<BlogPost | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(raw);
    const fm = data as BlogFrontmatter;
    if (!fm.title || !fm.publishedAt) {
      throw new Error(
        `Post ${slug} is missing required frontmatter (title, publishedAt)`,
      );
    }
    return {
      ...fm,
      slug,
      content,
      readingTimeMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(BLOG_DIR);
    return entries
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => name.replace(/\.mdx$/, ""));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const slugs = await getAllSlugs();
  const posts = await Promise.all(slugs.map((slug) => readPostFile(slug)));
  return posts
    .filter((post): post is BlogPost => post !== null && !post.draft)
    .sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .map((post) => {
      const meta: BlogPostMeta = {
        slug: post.slug,
        title: post.title,
        description: post.description,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        category: post.category,
        keywords: post.keywords,
        ogImage: post.ogImage,
        draft: post.draft,
        readingTimeMinutes: post.readingTimeMinutes,
      };
      return meta;
    });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return readPostFile(slug);
}

export function formatPublishedAt(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  "founder-story": "Founder note",
  tutorial: "Tutorial",
  comparison: "Comparison",
  benchmark: "Benchmark",
  essay: "Essay",
};

export async function getAdjacentPosts(slug: string): Promise<{
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
}> {
  const posts = await getAllPosts();
  const idx = posts.findIndex((post) => post.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  // Posts are sorted newest-first, so "next" (newer) sits at idx-1
  // and "prev" (older) sits at idx+1.
  return {
    prev: posts[idx + 1] ?? null,
    next: posts[idx - 1] ?? null,
  };
}
