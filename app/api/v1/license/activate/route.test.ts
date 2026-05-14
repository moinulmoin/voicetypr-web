import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

const { afterMock, activateLicenseKeyMock, prismaMock } = vi.hoisted(() => {
  const afterMock = vi.fn((callback: () => void | Promise<void>) => {
    void callback();
  });
  const activateLicenseKeyMock = vi.fn();
  const prismaMock = {
    device: {
      count: vi.fn(),
      upsert: vi.fn(),
    },
    license: {
      upsert: vi.fn(),
    },
    activityLog: {
      create: vi.fn(),
    },
  };

  return { afterMock, activateLicenseKeyMock, prismaMock };
});

vi.mock('next/server', async (importOriginal) => {
  const actual = await importOriginal<typeof import('next/server')>();
  return {
    ...actual,
    after: afterMock,
  };
});

vi.mock('@/lib/polar', () => ({
  activateLicenseKey: activateLicenseKeyMock,
}));

vi.mock('@/lib/db', () => ({
  prisma: prismaMock,
}));

const { POST } = await import('./route');

const deviceHash = 'a'.repeat(64);

function createRequest(body: unknown) {
  return new NextRequest('https://voicetypr.com/api/v1/license/activate', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('POST /api/v1/license/activate', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    prismaMock.device.count.mockResolvedValue(0);
    prismaMock.license.upsert.mockResolvedValue({});
    prismaMock.device.upsert.mockResolvedValue({});
    prismaMock.activityLog.create.mockResolvedValue({});
    activateLicenseKeyMock.mockResolvedValue({
      id: 'activation_123',
      licenseKey: { customerId: 'customer_123' },
    });
  });

  it('upserts the device row when activating a license', async () => {
    const response = await POST(createRequest({
      licenseKey: 'VTP-license-123',
      deviceHash,
      osType: 'macos',
      osVersion: '15.4',
      appVersion: '1.2.3',
      deviceName: 'Moin MacBook',
    }));

    await expect(response.json()).resolves.toMatchObject({
      success: true,
      data: { activatedAt: expect.any(String) },
    });
    expect(response.status).toBe(200);
    expect(activateLicenseKeyMock).toHaveBeenCalledWith(
      'VTP-license-123',
      deviceHash,
      'macos',
      '15.4',
      '1.2.3',
      'Moin MacBook',
    );
    expect(prismaMock.device.upsert).toHaveBeenCalledWith({
      where: { deviceHash },
      create: expect.objectContaining({
        deviceHash,
        licenseKey: 'VTP-license-123',
        activationId: 'activation_123',
        osType: 'macos',
        osVersion: '15.4',
        appVersion: '1.2.3',
        lastChecked: expect.any(Date),
      }),
      update: expect.objectContaining({
        licenseKey: 'VTP-license-123',
        activationId: 'activation_123',
        osType: 'macos',
        osVersion: '15.4',
        appVersion: '1.2.3',
        lastChecked: expect.any(Date),
      }),
    });
  });
});
