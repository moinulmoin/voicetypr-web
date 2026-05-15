const MARKDOWN_MIME_TYPE = 'text/markdown';

const BLOCK_TAGS = [
  'address',
  'article',
  'aside',
  'blockquote',
  'br',
  'dd',
  'details',
  'div',
  'dl',
  'dt',
  'figcaption',
  'figure',
  'hr',
  'main',
  'p',
  'section',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'tr',
];

const ENTITY_MAP: Record<string, string> = {
  amp: '&',
  apos: "'",
  gt: '>',
  ldquo: '“',
  lsquo: '‘',
  mdash: '—',
  nbsp: ' ',
  ndash: '–',
  quot: '"',
  rdquo: '”',
  rsquo: '’',
  lt: '<',
};

type PageMetadata = {
  title?: string;
  description?: string;
  image?: string;
};

export function acceptsMarkdown(acceptHeader: string | null): boolean {
  if (!acceptHeader) {
    return false;
  }

  return acceptHeader.split(',').some((entry) => {
    const [rawType = '', ...params] = entry.trim().toLowerCase().split(';');
    const type = rawType.trim();

    if (type !== MARKDOWN_MIME_TYPE) {
      return false;
    }

    const q = params.find((param) => param.trim().startsWith('q='));
    return !q || Number.parseFloat(q.split('=')[1] ?? '1') > 0;
  });
}

export function isMarkdownEligiblePath(pathname: string): boolean {
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return false;
  }

  return !/\.[a-z0-9]+$/i.test(pathname);
}

export function htmlToMarkdown(html: string, sourceUrl: string): string {
  const metadata = extractMetadata(html);
  const jsonLd = extractJsonLd(html);
  let body = extractBody(html);

  body = body
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script\b(?![^>]*type=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, '')
    .replace(/<([a-z0-9]+)\b[^>]*data-markdown-skip[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<(nav|svg|canvas|form)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<img\b([^>]*)>/gi, (_, attrs: string) => {
      const alt = decodeEntities(readAttribute(attrs, 'alt') ?? '').trim();
      const src = readAttribute(attrs, 'src');

      if (!src) {
        return '';
      }

      return `\n\n![${escapeMarkdownLinkText(alt)}](${resolveUrl(src, sourceUrl)})\n\n`;
    })
    .replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_, attrs: string, content: string) => {
      const text = inlineText(content);
      const href = readAttribute(attrs, 'href');

      if (!text) {
        return '';
      }

      if (!href || href.startsWith('#') || href.toLowerCase().startsWith('javascript:')) {
        return text;
      }

      return `[${escapeMarkdownLinkText(text)}](${resolveUrl(href, sourceUrl)})`;
    })
    .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level: string, content: string) => {
      const text = inlineText(content);
      return text ? `\n\n${'#'.repeat(Number(level))} ${text}\n\n` : '\n\n';
    })
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, content: string) => {
      const text = inlineText(content);
      return text ? `\n- ${text}` : '';
    })
    .replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, content: string) => {
      const text = inlineText(content);
      return text ? `\n\n> ${text.replace(/\n+/g, '\n> ')}\n\n` : '\n\n';
    })
    .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag: string, content: string) => {
      const text = inlineText(content);
      return text ? `**${text}**` : '';
    })
    .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag: string, content: string) => {
      const text = inlineText(content);
      return text ? `_${text}_` : '';
    })
    .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (_, content: string) => {
      const text = inlineText(content);
      return text ? `\`${text.replace(/`/g, '\\`')}\`` : '';
    });

  for (const tag of BLOCK_TAGS) {
    body = body.replace(new RegExp(`<${tag}\\b[^>]*>`, 'gi'), '\n\n');
    body = body.replace(new RegExp(`</${tag}>`, 'gi'), '\n\n');
  }

  body = normalizeMarkdown(body.replace(/<[^>]+>/g, ''));

  const parts = [frontmatter(metadata), body];

  if (jsonLd.length > 0) {
    parts.push(`\n\n\`\`\`json\n${jsonLd.join('\n')}\n\`\`\``);
  }

  return parts.filter(Boolean).join('\n\n').trimEnd() + '\n';
}

export function estimateMarkdownTokens(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words * 1.33));
}

function extractBody(html: string): string {
  const match = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  return match?.[1] ?? html;
}

function extractMetadata(html: string): PageMetadata {
  const title = readTitle(html) ?? readMeta(html, 'name', 'title') ?? readMeta(html, 'property', 'og:title');
  const description = readMeta(html, 'name', 'description') ?? readMeta(html, 'property', 'og:description');
  const image = readMeta(html, 'property', 'og:image');

  return {
    title: title ? decodeEntities(title).trim() : undefined,
    description: description ? decodeEntities(description).trim() : undefined,
    image: image ? decodeEntities(image).trim() : undefined,
  };
}

function readTitle(html: string): string | undefined {
  const match = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  return match ? inlineText(match[1] ?? '') : undefined;
}

function readMeta(html: string, key: 'name' | 'property', value: string): string | undefined {
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];

  for (const tag of metaTags) {
    const attr = readAttribute(tag, key);

    if (attr?.toLowerCase() === value) {
      return readAttribute(tag, 'content') ?? undefined;
    }
  }

  return undefined;
}

function extractJsonLd(html: string): string[] {
  return [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => decodeEntities(match[1] ?? '').trim())
    .filter(Boolean);
}

function frontmatter(metadata: PageMetadata): string {
  const entries = [
    ['title', metadata.title],
    ['description', metadata.description],
    ['image', metadata.image],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  if (entries.length === 0) {
    return '';
  }

  return ['---', ...entries.map(([key, value]) => `${key}: ${quoteYaml(value)}`), '---'].join('\n');
}

function quoteYaml(value: string): string {
  return JSON.stringify(value);
}

function inlineText(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function normalizeMarkdown(markdown: string): string {
  return decodeEntities(markdown)
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .trim();
}

function readAttribute(attrs: string, name: string): string | null {
  const pattern = new RegExp(`${name}\\s*=\\s*(["'])(.*?)\\1`, 'i');
  const quoted = attrs.match(pattern);

  if (quoted) {
    return quoted[2] ?? null;
  }

  const unquoted = attrs.match(new RegExp(`${name}\\s*=\\s*([^\\s>]+)`, 'i'));
  return unquoted?.[1] ?? null;
}

function resolveUrl(url: string, sourceUrl: string): string {
  try {
    return new URL(url, sourceUrl).toString();
  } catch {
    return url;
  }
}

function escapeMarkdownLinkText(text: string): string {
  return text.replace(/[\[\]]/g, '\\$&');
}

function decodeEntities(value: string): string {
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, raw: string) => {
    const key = raw.toLowerCase();

    if (key.startsWith('#x')) {
      return String.fromCodePoint(Number.parseInt(key.slice(2), 16));
    }

    if (key.startsWith('#')) {
      return String.fromCodePoint(Number.parseInt(key.slice(1), 10));
    }

    return ENTITY_MAP[key] ?? entity;
  });
}
