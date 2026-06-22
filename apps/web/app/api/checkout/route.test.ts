import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createVoicetyprApi } from '@voicetypr/api-core';

const createCheckoutSessionMock = vi.fn();

function createApp() {
  return createVoicetyprApi({
    prisma: {} as never,
    createCheckoutSession: createCheckoutSessionMock,
    env: {
      NODE_ENV: 'test',
      APP_URL: 'https://voicetypr.com',
      POLAR_PRODUCT_ID_PRO: 'product_pro',
    },
  });
}

describe('GET /api/checkout', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    createCheckoutSessionMock.mockResolvedValue({ url: 'https://polar.sh/checkout/123' });
  });

  it('creates a Polar checkout through api-core and redirects to Polar', async () => {
    const app = createApp();
    const metadata = encodeURIComponent(JSON.stringify({ deviceId: 'device_123', ignored: { nested: true } }));
    const response = await app.request(`https://api.voicetypr.com/api/checkout?products=product_pro&metadata=${metadata}`);

    expect(response.status).toBe(303);
    expect(response.headers.get('location')).toBe('https://polar.sh/checkout/123');
    expect(createCheckoutSessionMock).toHaveBeenCalledWith({
      products: ['product_pro'],
      successUrl: 'https://voicetypr.com?checkout=success',
      returnUrl: 'https://voicetypr.com',
      metadata: { deviceId: 'device_123' },
    }, expect.any(Object));
  });

  it('rejects products that are not in the backend allowlist', async () => {
    const app = createApp();
    const response = await app.request('https://api.voicetypr.com/api/checkout?products=unknown_product');

    expect(response.status).toBe(400);
    expect(createCheckoutSessionMock).not.toHaveBeenCalled();
  });

  it('rejects malformed metadata as a client error', async () => {
    const app = createApp();
    const response = await app.request('https://api.voicetypr.com/api/checkout?products=product_pro&metadata=%7Bbad');

    expect(response.status).toBe(400);
    expect(createCheckoutSessionMock).not.toHaveBeenCalled();
  });
});

describe('GET /healthz', () => {
  it('reports api health for container checks', async () => {
    const app = createApp();
    const response = await app.request('https://api.voicetypr.com/healthz');

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true, service: 'voicetypr-api' });
  });
});
