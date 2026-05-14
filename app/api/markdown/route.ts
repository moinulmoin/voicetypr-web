import { NextRequest } from 'next/server';

import { estimateMarkdownTokens, htmlToMarkdown } from '@/lib/markdown-negotiation';

const BYPASS_HEADER = 'x-markdown-bypass';

export async function GET(request: NextRequest) {
  const targetPath = request.nextUrl.searchParams.get('path') ?? '/';

  if (!targetPath.startsWith('/')) {
    return new Response('Invalid markdown target', { status: 400 });
  }

  const targetUrl = new URL(targetPath, request.nextUrl.origin);
  const response = await fetch(targetUrl, {
    headers: {
      accept: 'text/html',
      [BYPASS_HEADER]: '1',
    },
  });

  const contentType = response.headers.get('content-type') ?? '';

  if (!contentType.toLowerCase().includes('text/html')) {
    return new Response('Markdown is only available for HTML responses', {
      status: 406,
      headers: {
        vary: 'Accept',
      },
    });
  }

  const html = await response.text();
  const markdown = htmlToMarkdown(html, targetUrl.toString());
  const headers = new Headers({
    'content-type': 'text/markdown; charset=utf-8',
    vary: 'Accept',
    'x-markdown-tokens': String(estimateMarkdownTokens(markdown)),
  });

  const cacheControl = response.headers.get('cache-control');

  if (cacheControl) {
    headers.set('cache-control', cacheControl);
  }

  return new Response(markdown, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
