import { afterEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

const fetchMock = vi.fn();
vi.stubGlobal('fetch', fetchMock);

const { GET } = await import('./route');

afterEach(() => {
  fetchMock.mockReset();
});

describe('GET /api/markdown', () => {
  it('rejects protocol-relative targets', async () => {
    const request = new NextRequest('https://voicetypr.com/api/markdown?path=//evil.example/steal');

    const response = await GET(request);

    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('fetches same-origin html and returns markdown', async () => {
    fetchMock.mockResolvedValue(
      new Response('<html><body><main><h1>VoiceTypr</h1></main></body></html>', {
        status: 200,
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'public, max-age=60',
        },
      }),
    );

    const request = new NextRequest('https://voicetypr.com/api/markdown?path=/download');
    const response = await GET(request);
    const markdown = await response.text();

    expect(fetchMock).toHaveBeenCalledWith(new URL('https://voicetypr.com/download'), {
      headers: {
        accept: 'text/html',
        'x-markdown-bypass': '1',
      },
    });
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('text/markdown; charset=utf-8');
    expect(response.headers.get('cache-control')).toBe('public, max-age=60');
    expect(markdown).toContain('# VoiceTypr');
  });
});
