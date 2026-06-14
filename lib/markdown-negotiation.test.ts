import { describe, expect, it } from 'vitest';

import {
  acceptsMarkdown,
  estimateMarkdownTokens,
  htmlToMarkdown,
  isMarkdownEligiblePath,
} from './markdown-negotiation';

describe('markdown negotiation', () => {
  it('only negotiates explicit text/markdown accepts', () => {
    expect(acceptsMarkdown('text/markdown')).toBe(true);
    expect(acceptsMarkdown('text/html, text/markdown;q=0.8')).toBe(true);
    expect(acceptsMarkdown('text/markdown;q=0')).toBe(false);
    expect(acceptsMarkdown('text/html,application/xhtml+xml,*/*;q=0.8')).toBe(false);
    expect(acceptsMarkdown(null)).toBe(false);
  });

  it('keeps markdown negotiation on page paths only', () => {
    expect(isMarkdownEligiblePath('/')).toBe(true);
    expect(isMarkdownEligiblePath('/use-cases/developers')).toBe(true);
    expect(isMarkdownEligiblePath('/api/v1/license/validate')).toBe(false);
    expect(isMarkdownEligiblePath('/_next/static/chunk.js')).toBe(false);
    expect(isMarkdownEligiblePath('/voicetypr-og.png')).toBe(false);
  });

  it('converts html responses into markdown with metadata and json-ld', () => {
    const markdown = htmlToMarkdown(
      `<!doctype html>
      <html>
        <head>
          <title>Fallback title</title>
          <meta name="description" content="Private &amp; local dictation">
          <meta property="og:title" content="Voicetypr">
          <meta property="og:image" content="/og.png">
          <script type="application/ld+json">{"@type":"SoftwareApplication"}</script>
        </head>
        <body>
          <header data-markdown-skip>Navigation that should not be exposed</header>
          <main>
            <header>
              <h1>Type by talking</h1>
              <p>Offline AI voice-to-text for builders.</p>
            </header>
            <p>Works in <strong>Cursor</strong> and <a href="/download">downloads fast</a>.</p>
            <ul><li>Offline first</li><li>No subscription</li></ul>
          </main>
          <footer data-markdown-skip>Footer links</footer>
        </body>
      </html>`,
      'https://voicetypr.com/'
    );

    expect(markdown).toContain('title: "Fallback title"');
    expect(markdown).toContain('description: "Private & local dictation"');
    expect(markdown).toContain('image: "/og.png"');
    expect(markdown).toContain('# Type by talking');
    expect(markdown).toContain('Offline AI voice-to-text for builders.');
    expect(markdown).toContain('[downloads fast](https://voicetypr.com/download)');
    expect(markdown).toContain('- Offline first');
    expect(markdown).toContain('```json\n{"@type":"SoftwareApplication"}\n```');
    expect(markdown).not.toContain('Navigation that should not be exposed');
    expect(markdown).not.toContain('Footer links');
  });

  it('returns a stable positive token estimate', () => {
    expect(estimateMarkdownTokens('# Voicetypr\n\nOffline dictation for builders.')).toBe(8);
  });
});
