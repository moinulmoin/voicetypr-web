import { afterEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';
import { POST } from './route';

const originalEnv = { ...process.env };
const originalFetch = global.fetch;

afterEach(() => {
  process.env = { ...originalEnv };
  global.fetch = originalFetch;
  vi.restoreAllMocks();
});

function createRequest(body: unknown, headers: Record<string, string> = {}) {
  return new NextRequest('https://voicetypr.com/api/feature-ideas', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

describe('POST /api/feature-ideas', () => {
  it('delivers a feature idea to Discord', async () => {
    process.env.DISCORD_FEATURE_IDEAS_WEBHOOK_URL = 'https://discord.com/api/webhooks/test/token';
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
    global.fetch = fetchMock;

    const response = await POST(createRequest(
      { idea: 'I wish VoiceTypr could save a custom prompt style.' },
      { referer: 'https://voicetypr.com/#features' }
    ));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true });
    expect(fetchMock).toHaveBeenCalledOnce();

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://discord.com/api/webhooks/test/token');
    expect(init.method).toBe('POST');

    const payload = JSON.parse(String(init.body));
    expect(payload.content).toBe('New VoiceTypr feature idea');
    expect(payload.allowed_mentions).toEqual({ parse: [] });
    expect(payload.embeds[0].description).toBe('I wish VoiceTypr could save a custom prompt style.');
    expect(payload.embeds[0].fields[0].value).toBe('https://voicetypr.com/#features');
  });

  it('rejects empty ideas before contacting Discord', async () => {
    process.env.DISCORD_FEATURE_IDEAS_WEBHOOK_URL = 'https://discord.com/api/webhooks/test/token';
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const response = await POST(createRequest({ idea: '   ' }));

    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
