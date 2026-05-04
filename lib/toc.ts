export type TocItem = {
  level: 2 | 3;
  text: string;
  slug: string;
};

/**
 * Slugify in the same shape rehype-slug uses, so the IDs it injects on
 * <h2>/<h3> match what the TOC anchors point at.
 *
 * (rehype-slug uses github-slugger under the hood; this is a slim
 * compatible-enough implementation.)
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[\u2018\u2019\u201c\u201d]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Extract H2/H3 headings from raw markdown source.
 * Skips fenced code blocks so a `# foo` inside ``` doesn't pollute the TOC.
 */
export function extractToc(markdown: string): TocItem[] {
  const lines = markdown.split("\n");
  const out: TocItem[] = [];
  let inCodeFence = false;
  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (line.startsWith("```")) {
      inCodeFence = !inCodeFence;
      continue;
    }
    if (inCodeFence) continue;
    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) continue;
    const hashes = match[1];
    const heading = match[2];
    if (!hashes || !heading) continue;
    const level = hashes.length as 2 | 3;
    const text = heading.trim();
    const slug = slugify(text);
    if (slug) out.push({ level, text, slug });
  }
  return out;
}
