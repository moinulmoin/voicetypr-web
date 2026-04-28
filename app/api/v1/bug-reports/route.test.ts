import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

const redisMock = {
  incr: vi.fn(),
  expire: vi.fn(),
};

vi.mock('@/lib/redis', () => ({
  redis: redisMock,
}));

const { POST } = await import('./route');

const validEnvironment = {
  appVersion: '1.12.2',
  platform: 'macos',
  osVersion: '15.4',
  architecture: 'aarch64',
  currentModel: 'base.en',
  deviceId: 'device-123',
  timestamp: '2026-04-28T12:00:00.000Z',
};

const validLatestLog = {
  fileName: 'voicetypr-2026-04-28.log',
  content: 'INFO latest app log line',
  truncated: false,
  statusNote: '',
};

function createRequest(body: unknown, headers: Record<string, string> = {}) {
  return new NextRequest('https://voicetypr.com/api/v1/bug-reports', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-forwarded-for': '203.0.113.10',
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

describe('POST /api/v1/bug-reports', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.DISCORD_BUG_REPORT_WEBHOOK_URL = 'https://discord.test/webhook';
    redisMock.incr.mockResolvedValue(1);
    redisMock.expire.mockResolvedValue(1);
    global.fetch = vi.fn().mockResolvedValue(new Response('{}', { status: 200 }));
  });

  it('delivers a valid manual report to Discord', async () => {
    const response = await POST(createRequest({
      kind: 'manual',
      name: 'Moin',
      email: 'moin@example.com',
      message: 'Upload tab stopped scrolling',
      environment: validEnvironment,
      latestLog: validLatestLog,
    }));

    await expect(response.json()).resolves.toMatchObject({
      success: true,
      data: { delivered: true },
    });
    expect(response.status).toBe(200);
    expect(redisMock.incr).toHaveBeenCalledWith('bug-report:rate:203.0.113.10:device-123');
    expect(redisMock.expire).toHaveBeenCalledWith(expect.any(String), 600);
    expect(fetch).toHaveBeenCalledWith(
      'https://discord.test/webhook?wait=true',
      expect.objectContaining({ method: 'POST', body: expect.any(FormData) })
    );

    const formData = vi.mocked(fetch).mock.calls[0]![1]!.body as FormData;
    const payload = JSON.parse(formData.get('payload_json') as string);
    expect(payload.content).toBe('New VoiceTypr bug report');
    expect(payload.allowed_mentions).toEqual({ parse: [] });
    expect(payload.attachments[0].filename).toBe('voicetypr-report.txt');
  });

  it('delivers a valid crash report to Discord', async () => {
    const response = await POST(createRequest({
      kind: 'crash',
      message: 'It crashed after opening settings',
      crash: {
        errorMessage: 'Cannot read properties of undefined',
        errorStack: 'Error stack',
        componentStack: 'Component stack',
      },
      environment: validEnvironment,
      latestLog: validLatestLog,
    }));

    await expect(response.json()).resolves.toMatchObject({ success: true });
    expect(fetch).toHaveBeenCalledOnce();

    const formData = vi.mocked(fetch).mock.calls[0]![1]!.body as FormData;
    const payload = JSON.parse(formData.get('payload_json') as string);
    expect(payload.content).toBe('New VoiceTypr crash report');
    expect(payload.embeds[0].title).toBe('VoiceTypr crash report');
  });

  it('rejects invalid manual reports before rate limiting or Discord delivery', async () => {
    const response = await POST(createRequest({
      kind: 'manual',
      message: '',
      environment: validEnvironment,
      latestLog: validLatestLog,
    }));

    await expect(response.json()).resolves.toMatchObject({
      success: false,
      error: 'parameter_validation_error',
    });
    expect(response.status).toBe(400);
    expect(redisMock.incr).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('rate limits repeated callers', async () => {
    redisMock.incr.mockResolvedValueOnce(6);

    const response = await POST(createRequest({
      kind: 'manual',
      message: 'The app broke',
      environment: validEnvironment,
      latestLog: validLatestLog,
    }));

    await expect(response.json()).resolves.toMatchObject({
      success: false,
      error: 'rate_limited',
    });
    expect(response.status).toBe(429);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('rejects reports with an oversized content-length before parsing', async () => {
    const response = await POST(createRequest(
      {
        kind: 'manual',
        message: 'The app broke',
        environment: validEnvironment,
        latestLog: validLatestLog,
      },
      { 'content-length': '100001' }
    ));

    await expect(response.json()).resolves.toMatchObject({
      success: false,
      error: 'payload_too_large',
    });
    expect(response.status).toBe(413);
    expect(redisMock.incr).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('redacts diagnostic secrets before sending the Discord attachment', async () => {
    await POST(createRequest({
      kind: 'manual',
      name: 'Moin',
      email: 'moin@example.com',
      message: 'My token is sk_test_1234567890abcdef and path /Users/moin/Library',
      environment: validEnvironment,
      latestLog: {
        ...validLatestLog,
        content: 'api_key=super-secret-value user test@example.com C:\\Users\\Moin\\AppData',
      },
    }));

    const formData = vi.mocked(fetch).mock.calls[0]![1]!.body as FormData;
    const file = formData.get('files[0]') as File;
    const text = await file.text();

    expect(text).toContain('[REDACTED_TOKEN]');
    expect(text).toContain('api_key=[REDACTED_SECRET]');
    expect(text).toContain('[REDACTED_EMAIL]');
    expect(text).toContain('/Users/[REDACTED_USER]/Library');
    expect(text).toContain('C:\\Users\\[REDACTED_USER]\\AppData');
    expect(text).not.toContain('sk_test_1234567890abcdef');
    expect(text).not.toContain('super-secret-value');
  });

  it('returns an internal error when Discord delivery fails', async () => {
    global.fetch = vi.fn().mockResolvedValue(new Response('bad webhook', { status: 500 }));

    const response = await POST(createRequest({
      kind: 'manual',
      message: 'The app broke',
      environment: validEnvironment,
      latestLog: validLatestLog,
    }));

    await expect(response.json()).resolves.toMatchObject({
      success: false,
      error: 'internal_error',
    });
    expect(response.status).toBe(500);
  });
});
