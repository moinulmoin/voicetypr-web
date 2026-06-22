import { Hono, type Context } from 'hono';
import type { ContentfulStatusCode } from 'hono/utils/http-status';
import { initLogger } from 'evlog';
import { evlog, type EvlogVariables } from 'evlog/hono';
import { WebhookVerificationError, validateEvent } from '@polar-sh/sdk/webhooks';
import type { CheckoutCreate } from '@polar-sh/sdk/models/components/checkoutcreate';
import type { WebhookOrderPaidPayload } from '@polar-sh/sdk/models/components/webhookorderpaidpayload';
import type { ZodError } from 'zod';
import {
  bugReportRequestSchema,
  licenseActivateRequestSchema,
  licenseDeactivateRequestSchema,
  licenseValidateRequestSchema,
  trialCheckRequestSchema,
  type ApiResponse,
  type BugReportRequest,
} from '@voicetypr/contracts';
import {
  Prisma,
  prisma as defaultPrisma,
} from '@voicetypr/db';
import { ERROR_MESSAGES, ErrorCode, CONFIG } from './constants.js';
import { getMaxDevicesForLicense } from './license-utils.js';
import { getOrderProductRevenue } from './order-revenue.js';
import { activateLicenseKey, createCheckoutSession, deactivateLicenseKey, validateLicenseKey } from './polar.js';
import { PLANS, getPlanByLicensePrefix, resolvePlan } from './pricing.js';
import { getRedis } from './redis.js';

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-device-hash',
};

const RATE_LIMIT_WINDOW_SECONDS = 10 * 60;
const RATE_LIMIT_MAX_REPORTS = 5;
const RATE_LIMIT_MAX_IP_REPORTS = 20;
const MAX_BUG_REPORT_BYTES = 100_000;
const RATE_LIMIT_SCRIPT_BODY = `
  redis.call('SET', KEYS[1], 0, 'EX', ARGV[1], 'NX')
  local n = redis.call('INCR', KEYS[1])
  return n
`;

type PrismaLike = typeof defaultPrisma;
type RedisScript<T> = {
  eval(keys: string[], args: string[]): Promise<T>;
};
type RedisLike = {
  createScript<T>(script: string): RedisScript<T>;
  get?(key: string): Promise<unknown>;
  set?(key: string, value: string, options?: { ex?: number; nx?: boolean }): Promise<unknown>;
  del?(key: string): Promise<unknown>;
};
export interface ApiCoreDependencies {
  prisma: PrismaLike;
  Prisma: typeof Prisma;
  redis?: RedisLike;
  fetch: typeof fetch;
  env: NodeJS.ProcessEnv;
  runAfter: (task: () => Promise<void>) => void;
  activateLicenseKey: typeof activateLicenseKey;
  createCheckoutSession: typeof createCheckoutSession;
  deactivateLicenseKey: typeof deactivateLicenseKey;
  validateLicenseKey: typeof validateLicenseKey;
}

export type ApiCoreOptions = Partial<ApiCoreDependencies>;

function resolveDependencies(options: ApiCoreOptions): ApiCoreDependencies {
  return {
    prisma: options.prisma ?? defaultPrisma,
    Prisma: options.Prisma ?? Prisma,
    redis: options.redis,
    fetch: options.fetch ?? globalThis.fetch.bind(globalThis),
    env: options.env ?? process.env,
    runAfter: options.runAfter ?? ((task) => {
      void task().catch((error) => console.error('[API] Background task failed:', error));
    }),
    activateLicenseKey: options.activateLicenseKey ?? activateLicenseKey,
    createCheckoutSession: options.createCheckoutSession ?? createCheckoutSession,
    deactivateLicenseKey: options.deactivateLicenseKey ?? deactivateLicenseKey,
    validateLicenseKey: options.validateLicenseKey ?? validateLicenseKey,
  };
}

export function createVoicetyprApi(options: ApiCoreOptions = {}) {
  const deps = resolveDependencies(options);
  initLogger({
    env: {
      service: 'voicetypr-api',
      environment: deps.env.NODE_ENV ?? process.env.NODE_ENV ?? 'development',
    },
  });

  const app = new Hono<EvlogVariables>();
  let rateLimitScript: RedisScript<number> | undefined;
  const getRateLimitScript = (): RedisScript<number> => {
    if (!rateLimitScript) {
      const redis = deps.redis ?? (getRedis() as unknown as RedisLike);
      rateLimitScript = redis.createScript<number>(RATE_LIMIT_SCRIPT_BODY);
    }
    return rateLimitScript;
  };

  app.use(evlog());
  app.use('*', async (c, next) => {
    c.get('log').set({
      host: c.req.header('host'),
      proto: c.req.header('x-forwarded-proto'),
      ip: getClientIp(c),
      cfRay: c.req.header('cf-ray'),
    });
    await next();
  });

  app.get('/', (c) => json(c, { ok: true, service: 'voicetypr-api' }));
  app.get('/healthz', (c) => json(c, { ok: true, service: 'voicetypr-api' }));

  app.use('/api/v1/*', async (c, next) => {
    await next();
    for (const [key, value] of Object.entries(corsHeaders)) {
      c.res.headers.set(key, value);
    }
  });

  app.options('/api/v1/*', (c) => c.body(null, 200));

  app.get('/api/checkout', async (c) => {
    try {
      const products = parseCheckoutProducts(c);
      const allowedProducts = getAllowedProductIds(deps.env);

      if (products.length === 0 || products.some((productId) => !allowedProducts.has(productId))) {
        return createErrorResponse(c, ErrorCode.PARAMETER_VALIDATION_ERROR, 400);
      }

      let metadata: Record<string, string | number | boolean> | undefined;
      try {
        metadata = parseCheckoutMetadata(c.req.query('metadata'));
      } catch {
        return createErrorResponse(c, ErrorCode.PARAMETER_VALIDATION_ERROR, 400);
      }

      const appUrl = getAppUrl(deps.env);
      const checkoutRequest: CheckoutCreate = {
        products,
        successUrl: `${appUrl}?checkout=success`,
        returnUrl: appUrl,
        metadata,
      };
      const checkout = await deps.createCheckoutSession(checkoutRequest, deps.env);

      return c.redirect(checkout.url, 303);
    } catch (error) {
      return handleInternalError(c, error);
    }
  });

  app.post('/api/webhooks/polar', async (c) => {
    const webhookSecret = deps.env.POLAR_WEBHOOK_SECRET;
    if (!webhookSecret) {
      return handleInternalError(c, new Error('POLAR_WEBHOOK_SECRET is not configured'));
    }

    const bodyText = await c.req.text();
    const headers: Record<string, string> = {};
    c.req.raw.headers.forEach((value, key) => {
      headers[key] = value;
    });

    let payload: ReturnType<typeof validateEvent>;
    try {
      payload = validateEvent(bodyText, headers, webhookSecret);
    } catch (error) {
      if (error instanceof WebhookVerificationError) {
        return json(c, { received: false }, 400);
      }
      return handleInternalError(c, error);
    }

    try {
      switch (payload.type) {
        case 'order.paid':
          await deduplicated(deps, payload, () => handleOrderPaid(deps, payload));
          break;
        case 'order.refunded':
          await deduplicated(deps, payload, async () => {
            console.log(`[Webhook] order.refunded: ${payload.data.id}`);
          });
          break;
        default:
          console.log(`[Webhook] Ignored event: ${payload.type}`);
      }
    } catch (error) {
      return handleInternalError(c, error);
    }

    return json(c, { received: true });
  });

  app.post('/api/v1/license/activate', async (c) => {
    try {
      const body = await c.req.json();
      const validationResult = licenseActivateRequestSchema.safeParse(body);

      if (!validationResult.success) {
        return handleValidationError(c, validationResult.error);
      }

      const { licenseKey, deviceHash, osType, osVersion, appVersion, deviceName } = validationResult.data;

      const maxDevices = getMaxDevicesForLicense(licenseKey);
      if (Number.isNaN(maxDevices)) {
        console.warn(
          `[License Activate] Unknown license format for ${licenseKey.substring(0, 8)}...; skipping local device check, relying on Polar`
        );
      } else {
        const currentDeviceCount = await deps.prisma.device.count({
          where: {
            licenseKey,
            NOT: { deviceHash },
          },
        });

        if (currentDeviceCount >= maxDevices) {
          console.log(
            `[License Activate] Local device count (${currentDeviceCount}) >= maxDevices (${maxDevices}) for license ${licenseKey.substring(0, 8)}... - relying on Polar to enforce actual limit`
          );
        }
      }

      let activation;
      try {
        activation = await deps.activateLicenseKey(licenseKey, deviceHash, osType, osVersion, appVersion, deviceName);
      } catch (polarError: unknown) {
        const apiError = polarError as { statusCode?: number; detail?: string; error?: string };
        if (apiError.statusCode === 403) {
          if (apiError.detail?.includes('activation limit')) {
            return createErrorResponse(c, ErrorCode.LICENSE_ACTIVATION_LIMIT_REACHED, 400);
          }
        } else if (apiError.statusCode === 404 || apiError.error === 'ResourceNotFound') {
          return createErrorResponse(c, ErrorCode.INVALID_LICENSE, 400);
        }
        throw polarError;
      }

      const planKey = resolvePlan(null, licenseKey);
      await deps.prisma.license.upsert({
        where: { licenseKey },
        create: {
          licenseKey,
          customerId: activation.licenseKey.customerId,
          ...(planKey && {
            plan: planKey,
            maxDevices: PLANS[planKey].maxDevices,
          }),
        },
        update: {
          customerId: activation.licenseKey.customerId,
          ...(!planKey ? {} : {
            plan: planKey,
            maxDevices: PLANS[planKey].maxDevices,
          }),
        },
      });

      await deps.prisma.device.upsert({
        where: { deviceHash },
        create: {
          deviceHash,
          licenseKey,
          activationId: activation.id,
          osType,
          osVersion,
          appVersion,
          lastChecked: new Date(),
        },
        update: {
          licenseKey,
          activationId: activation.id,
          osType,
          osVersion,
          appVersion,
          lastChecked: new Date(),
        },
      });

      deps.runAfter(async () => {
        await deps.prisma.activityLog.create({
          data: {
            deviceHash,
            action: 'activate',
            metadata: { licenseKeyRef: redactLicenseKey(licenseKey) },
          },
        });
      });

      return createSuccessResponse(c, { activatedAt: new Date().toISOString() });
    } catch (error) {
      return handleInternalError(c, error);
    }
  });

  app.post('/api/v1/license/validate', async (c) => {
    try {
      const body = await c.req.json();
      const validationResult = licenseValidateRequestSchema.safeParse(body);

      if (!validationResult.success) {
        return handleValidationError(c, validationResult.error);
      }

      const { licenseKey, deviceHash, appVersion, osType, osVersion } = validationResult.data;
      const device = await deps.prisma.device.findFirst({
        where: {
          licenseKey,
          deviceHash,
        },
        select: {
          activationId: true,
          deviceHash: true,
          licenseKey: true,
          lastChecked: true,
          license: {
            select: { plan: true, maxDevices: true },
          },
        },
      });

      if (!device) {
        return createSuccessResponse(c, { valid: false }, ERROR_MESSAGES[ErrorCode.DEVICE_MISMATCH]);
      }

      const originalLicenseKey = device.licenseKey;
      const originalActivationId = device.activationId;

      const clearStaleBinding = async (reason: string) => {
        const result = await deps.prisma.device.updateMany({
          where: {
            deviceHash,
            licenseKey: originalLicenseKey,
            ...(originalActivationId && { activationId: originalActivationId }),
          },
          data: {
            licenseKey: null,
            activationId: null,
            lastChecked: new Date(),
          },
        });

        if (result.count > 0) {
          console.log(
            `[License Validate] Cleared stale license binding for device ${deviceHash.substring(0, 8)}... (${reason})`
          );

          deps.runAfter(async () => {
            await deps.prisma.activityLog.create({
              data: {
                deviceHash,
                action: 'license_desynced',
                metadata: { licenseKeyPrefix: licenseKey.substring(0, 8), reason },
              },
            });
          });
        } else {
          console.log(
            `[License Validate] Skipped clearing for device ${deviceHash.substring(0, 8)}...; license binding changed concurrently`
          );
        }
      };

      if (!originalActivationId) {
        console.warn(
          `[License Validate] Device ${deviceHash.substring(0, 8)}... has licenseKey but no activationId; clearing as stale`
        );

        await clearStaleBinding('missing_activation_id');
        return createSuccessResponse(c, { valid: false }, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]);
      }

      let validatedLicense;
      try {
        validatedLicense = await deps.validateLicenseKey(licenseKey, originalActivationId);
      } catch (polarError: unknown) {
        const apiError = polarError as { error?: string };
        const errorMessage = apiError.error || 'Unknown error';
        console.error('Polar validation error:', errorMessage);

        if (errorMessage === 'NotPermitted' || errorMessage === 'ResourceNotFound') {
          try {
            await clearStaleBinding(errorMessage);
          } catch (dbErr) {
            console.error('Failed to clear stale license from device:', dbErr);
          }

          if (errorMessage === 'NotPermitted') {
            return createSuccessResponse(c, { valid: false }, ERROR_MESSAGES[ErrorCode.LICENSE_ALREADY_ACTIVATED]);
          }

          if (errorMessage === 'ResourceNotFound') {
            return createSuccessResponse(c, { valid: false }, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]);
          }
        }

        return handleInternalError(c, polarError);
      }

      if (validatedLicense.status !== 'granted') {
        await clearStaleBinding(`license_status_${validatedLicense.status}`);
        return createSuccessResponse(c, { valid: false }, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]);
      }

      if (!validatedLicense.activation || validatedLicense.activation.id !== originalActivationId) {
        await clearStaleBinding('missing_or_mismatched_activation');
        return createSuccessResponse(c, { valid: false }, ERROR_MESSAGES[ErrorCode.INVALID_LICENSE]);
      }

      await deps.prisma.device.update({
        where: { deviceHash },
        data: {
          lastChecked: new Date(),
          appVersion,
          osType,
          osVersion,
        },
      });

      deps.runAfter(async () => {
        await deps.prisma.activityLog.create({
          data: {
            deviceHash,
            action: 'validate',
            metadata: { licenseKeyRef: redactLicenseKey(licenseKey) },
          },
        });
      });

      const storedPlan = device.license?.plan;
      const storedMaxDevices = device.license?.maxDevices;
      const fallbackPlanKey = getPlanByLicensePrefix(licenseKey);
      const plan = storedPlan ?? fallbackPlanKey ?? undefined;
      const maxDevices = storedMaxDevices ?? (fallbackPlanKey ? PLANS[fallbackPlanKey].maxDevices : undefined);

      return createSuccessResponse(c, {
        valid: true,
        ...(plan && { plan }),
        ...(maxDevices != null && { maxDevices }),
      });
    } catch (error) {
      return handleInternalError(c, error);
    }
  });

  app.post('/api/v1/license/deactivate', async (c) => {
    try {
      const body = await c.req.json();
      const validationResult = licenseDeactivateRequestSchema.safeParse(body);

      if (!validationResult.success) {
        return handleValidationError(c, validationResult.error);
      }

      const { licenseKey, deviceHash } = validationResult.data;
      const device = await deps.prisma.device.findFirst({
        where: {
          licenseKey,
          deviceHash,
        },
        select: {
          deviceHash: true,
          activationId: true,
          licenseKey: true,
        },
      });

      if (!device) {
        return createErrorResponse(c, ErrorCode.NOT_YOUR_LICENSE);
      }

      try {
        await deps.deactivateLicenseKey({ licenseKey, activationId: device.activationId! });
      } catch (polarError: unknown) {
        const apiError = polarError as { statusCode?: number; error?: string; body?: string };
        let parsedError = apiError.error;

        if (!parsedError && typeof apiError.body === 'string') {
          try {
            const parsedBody = JSON.parse(apiError.body) as { error?: string };
            parsedError = parsedBody.error;
          } catch {
            // Ignore non-JSON bodies and fall through to the generic error path.
          }
        }

        if (
          apiError.statusCode === 404 ||
          parsedError === 'ResourceNotFound' ||
          parsedError === 'NotPermitted'
        ) {
          console.log(`License already inactive on Polar: ${licenseKey}, cleaning up local state`);
        } else {
          throw polarError;
        }
      }

      await deps.prisma.device.update({
        where: { deviceHash },
        data: {
          licenseKey: null,
          activationId: null,
          lastChecked: new Date(),
        },
      });

      deps.runAfter(async () => {
        await deps.prisma.activityLog.create({
          data: {
            deviceHash,
            action: 'deactivate',
            metadata: { licenseKeyRef: redactLicenseKey(licenseKey) },
          },
        });
      });

      return createSuccessResponse(c, { deactivatedAt: new Date().toISOString() });
    } catch (error) {
      return handleInternalError(c, error);
    }
  });

  app.post('/api/v1/trial/check', async (c) => {
    try {
      const body = await c.req.json();
      const validationResult = trialCheckRequestSchema.safeParse(body);

      if (!validationResult.success) {
        return handleValidationError(c, validationResult.error);
      }

      const { deviceHash } = validationResult.data;
      const existingDevice = await deps.prisma.device.findUnique({ where: { deviceHash } });

      let trialDevice;
      if (!existingDevice) {
        try {
          trialDevice = await deps.prisma.device.create({
            data: {
              deviceHash,
              lastChecked: new Date(),
              trialExpiresAt: new Date(Date.now() + CONFIG.trialDurationDays * 24 * 60 * 60 * 1000),
            },
          });
        } catch (error) {
          if (error instanceof deps.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const createdDevice = await deps.prisma.device.findUnique({ where: { deviceHash } });
            if (!createdDevice) {
              throw error;
            }
            trialDevice = createdDevice;
          } else {
            throw error;
          }
        }
      } else {
        trialDevice = await deps.prisma.device.update({
          where: { deviceHash },
          data: {
            lastChecked: new Date(),
          },
        });
      }

      const isNewTrial = trialDevice.trialStartedAt &&
        trialDevice.trialStartedAt > new Date(Date.now() - 60 * 1000);
      if (isNewTrial) {
        await deps.prisma.activityLog.create({
          data: {
            deviceHash,
            action: 'trial_start',
            metadata: {
              expiresAt: trialDevice.trialExpiresAt?.toISOString(),
              daysGranted: CONFIG.trialDurationDays,
            },
          },
        });
      }

      return createSuccessResponse(c, {
        isExpired: !!trialDevice.trialExpiresAt && trialDevice.trialExpiresAt < new Date(),
        daysLeft: trialDevice.trialExpiresAt && trialDevice.trialExpiresAt > new Date()
          ? Math.ceil((trialDevice.trialExpiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
          : 0,
        expiresAt: trialDevice.trialExpiresAt?.toISOString() || null,
      });
    } catch (error) {
      return handleInternalError(c, error);
    }
  });

  app.post('/api/v1/bug-reports', async (c) => {
    try {
      const contentLength = Number(c.req.header('content-length') || 0);
      if (contentLength > MAX_BUG_REPORT_BYTES) {
        return createErrorResponse(c, ErrorCode.PAYLOAD_TOO_LARGE, 413);
      }

      const bodyText = await c.req.text();
      if (Buffer.byteLength(bodyText, 'utf8') > MAX_BUG_REPORT_BYTES) {
        return createErrorResponse(c, ErrorCode.PAYLOAD_TOO_LARGE, 413);
      }

      let body: unknown;
      try {
        body = JSON.parse(bodyText);
      } catch {
        return json(c, {
          success: false,
          error: ErrorCode.PARAMETER_VALIDATION_ERROR,
          message: 'Invalid JSON.',
        }, 400);
      }

      const validationResult = bugReportRequestSchema.safeParse(body);

      if (!validationResult.success) {
        return handleValidationError(c, validationResult.error);
      }

      const report = validationResult.data;
      const rateLimit = await checkRateLimit(c, report, getRateLimitScript());

      if (!rateLimit.allowed) {
        return json(c, {
          success: false,
          error: ErrorCode.RATE_LIMITED,
          message: ERROR_MESSAGES[ErrorCode.RATE_LIMITED],
        }, 429, { 'Retry-After': String(RATE_LIMIT_WINDOW_SECONDS) });
      }

      await sendDiscordReport(report, deps);

      return createSuccessResponse(c, { delivered: true }, 'Report submitted');
    } catch (error) {
      return handleInternalError(c, error);
    }
  });

  return app;
}

function createSuccessResponse<T>(c: Context, data: T, message: string = 'Success') {
  return json(c, {
    success: true,
    data,
    message,
  } satisfies ApiResponse<T>);
}

function createErrorResponse(c: Context, error: ErrorCode, statusCode: number = 400) {
  return json(c, {
    success: false,
    error,
    message: ERROR_MESSAGES[error],
  } satisfies ApiResponse, statusCode);
}

function handleValidationError(c: Context, error: ZodError) {
  const firstError = error.errors[0];
  const message = `${firstError?.path.join('.')}: ${firstError?.message}`;

  return json(c, {
    success: false,
    error: ErrorCode.PARAMETER_VALIDATION_ERROR,
    message,
  } satisfies ApiResponse, 400);
}

function handleInternalError(c: Context, error: unknown) {
  console.error('Internal error:', error);

  return json(c, {
    success: false,
    error: ErrorCode.INTERNAL_ERROR,
    message: ERROR_MESSAGES[ErrorCode.INTERNAL_ERROR],
  } satisfies ApiResponse, 500);
}

function json(c: Context, body: unknown, statusCode: number = 200, headers: Record<string, string> = {}) {
  return c.body(JSON.stringify(body), statusCode as ContentfulStatusCode, {
    'content-type': 'application/json; charset=utf-8',
    ...headers,
  });
}

function getAppUrl(env: NodeJS.ProcessEnv): string {
  return env.NEXT_PUBLIC_APP_URL || env.APP_URL || 'http://localhost:3000';
}

function parseCheckoutProducts(c: Context): string[] {
  const products = c.req.query('products') || c.req.query('productId') || '';
  return products
    .split(',')
    .map((productId) => productId.trim())
    .filter(Boolean);
}

function getAllowedProductIds(env: NodeJS.ProcessEnv): Set<string> {
  return new Set(
    [
      env.POLAR_PRODUCT_ID_PRO ?? env.NEXT_PUBLIC_PRO_PRODUCT_ID,
      env.POLAR_PRODUCT_ID_PLUS ?? env.NEXT_PUBLIC_PLUS_PRODUCT_ID,
      env.POLAR_PRODUCT_ID_MAX ?? env.NEXT_PUBLIC_MAX_PRODUCT_ID,
      env.POLAR_PRODUCT_ID_TEAM ?? env.NEXT_PUBLIC_TEAM_PRODUCT_ID,
    ].filter((productId): productId is string => !!productId)
  );
}

function parseCheckoutMetadata(rawMetadata: string | undefined): Record<string, string | number | boolean> | undefined {
  if (!rawMetadata) return undefined;

  const parsed = JSON.parse(rawMetadata) as unknown;
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return undefined;

  const metadata: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(parsed)) {
    if (key.length > 40 || Object.keys(metadata).length >= 50) continue;

    if (typeof value === 'string') {
      metadata[key] = value.slice(0, 500);
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      metadata[key] = value;
    }
  }

  return Object.keys(metadata).length > 0 ? metadata : undefined;
}

function getWebhookRedis(deps: ApiCoreDependencies): Required<Pick<RedisLike, 'get' | 'set' | 'del'>> {
  const redis = deps.redis ?? (getRedis() as unknown as RedisLike);
  if (!redis.get || !redis.set || !redis.del) {
    throw new Error('Redis webhook deduplication methods are not available');
  }
  return { get: redis.get.bind(redis), set: redis.set.bind(redis), del: redis.del.bind(redis) };
}

async function deduplicated<T extends { type: string; data: { id?: string | number } }>(
  deps: ApiCoreDependencies,
  payload: T,
  handler: () => Promise<void>,
) {
  const redis = getWebhookRedis(deps);
  const eventId = payload.data.id ?? JSON.stringify(payload.data).slice(0, 32);
  const eventKey = `${payload.type}:${eventId}`;
  const processedKey = `webhook:processed:${eventKey}`;
  const lockKey = `webhook:processing:${eventKey}`;

  const alreadyProcessed = await redis.get(processedKey);
  if (alreadyProcessed) {
    console.log(`[Webhook] Duplicate event skipped: ${eventKey}`);
    return;
  }

  const lockClaimed = await redis.set(lockKey, '1', { ex: 300, nx: true });
  if (!lockClaimed) {
    console.log(`[Webhook] Event already in-flight: ${eventKey}`);
    return;
  }

  try {
    await handler();
    await redis.set(processedKey, '1', { ex: 86400 });
  } finally {
    await redis.del(lockKey);
  }
}

async function handleOrderPaid(deps: ApiCoreDependencies, payload: WebhookOrderPaidPayload) {
  const data = payload.data;
  const metadata = data.metadata;
  const checkoutTotalAmount = data.totalAmount;
  const productId = data.productId;
  const productRevenue = getOrderProductRevenue(data);
  const revenueAmount = productRevenue?.amount ?? checkoutTotalAmount;
  if (!revenueAmount) {
    console.log('[Webhook] No revenue amount found in order.paid event');
    return;
  }

  const deviceId = typeof metadata.deviceId === 'string' ? metadata.deviceId : undefined;

  deps.runAfter(async () => {
    try {
      await trackOpenPanelRevenue(deps, revenueAmount, {
        deviceId,
        productId,
        currency: data.currency,
        checkoutSubtotalAmount: data.subtotalAmount,
        checkoutDiscountAmount: data.discountAmount,
        checkoutTaxAmount: data.taxAmount,
        checkoutTotalAmount,
        revenueSource: productRevenue?.source ?? 'checkout_total',
      });
    } catch (err) {
      console.error('[Webhook] OpenPanel revenue flush failed:', err);
    }
  });

  console.log(`[Webhook] Revenue queued: $${(revenueAmount / 100).toFixed(2)}${deviceId ? ` (deviceId: ${deviceId})` : ''}`);
  await persistLicensePlan(deps, data as unknown as Record<string, unknown>);
}

async function trackOpenPanelRevenue(
  deps: ApiCoreDependencies,
  amount: number,
  properties: Record<string, unknown> & { deviceId?: string },
) {
  const clientId = deps.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;
  const clientSecret = deps.env.OPENPANEL_CLIENT_SECRET ?? deps.env.OPENPANEL_SECRET_KEY;
  if (!clientId || !clientSecret) {
    console.warn('[Webhook] OpenPanel env vars are not configured; skipping revenue event');
    return;
  }

  const { deviceId, ...rest } = properties;
  const response = await deps.fetch(`${deps.env.NEXT_PUBLIC_OPENPANEL_API_URL || 'https://api.openpanel.dev'}/track`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'openpanel-client-id': clientId,
      'openpanel-client-secret': clientSecret,
      'openpanel-sdk-name': 'voicetypr-api',
      'openpanel-sdk-version': '0.0.1',
    },
    body: JSON.stringify({
      type: 'track',
      payload: {
        name: 'revenue',
        properties: {
          ...rest,
          ...(deviceId ? { __deviceId: deviceId } : {}),
          __revenue: amount,
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenPanel revenue event failed with ${response.status}`);
  }
}

async function persistLicensePlan(deps: ApiCoreDependencies, data: Record<string, unknown>) {
  try {
    const licenseKey = extractLicenseKey(data);
    const productId = extractProductId(data);

    if (!licenseKey) return;

    const planKey = resolvePlan(productId, licenseKey);
    if (!planKey) return;

    const planMeta = PLANS[planKey];

    await deps.prisma.license.updateMany({
      where: { licenseKey },
      data: {
        plan: planKey,
        maxDevices: planMeta.maxDevices,
      },
    });
  } catch (err) {
    console.error('[Webhook] Failed to persist license plan:', err);
  }
}

function extractLicenseKey(data: Record<string, unknown>): string | null {
  const metadata = data.metadata as Record<string, unknown> | undefined;
  const candidates = [
    data.license_key,
    data.licenseKey,
    metadata?.license_key,
    metadata?.licenseKey,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === 'string' && candidate.length > 0) return candidate;
  }
  return null;
}

function extractProductId(data: Record<string, unknown>): string | null {
  return typeof data.productId === 'string' && data.productId.length > 0
    ? data.productId
    : null;
}

function redactLicenseKey(key: string): string {
  return `${key.substring(0, 8)}...`;
}

async function checkRateLimit(
  c: Context,
  report: BugReportRequest,
  rateLimitScript: RedisScript<number>
): Promise<{ allowed: boolean }> {
  const ipAddress = getClientIp(c);
  const rawDeviceId = report.environment.deviceId || 'unknown-device';
  const deviceId = normalizeRateLimitPart(rawDeviceId);
  const ipPart = normalizeRateLimitPart(ipAddress);
  const deviceKey = `bug-report:rate:${ipPart}:${deviceId}`;
  const ipKey = `bug-report:rate:${ipPart}`;

  const [deviceCount, ipCount] = await Promise.all([
    rateLimitScript.eval([deviceKey], [String(RATE_LIMIT_WINDOW_SECONDS)]),
    rateLimitScript.eval([ipKey], [String(RATE_LIMIT_WINDOW_SECONDS)]),
  ]);

  return {
    allowed: deviceCount <= RATE_LIMIT_MAX_REPORTS && ipCount <= RATE_LIMIT_MAX_IP_REPORTS,
  };
}

function getClientIp(c: Context): string {
  const forwardedFor = c.req.header('x-forwarded-for')?.split(',')[0]?.trim();
  return (
    forwardedFor ||
    c.req.header('cf-connecting-ip') ||
    c.req.header('x-real-ip') ||
    'unknown-ip'
  );
}

function normalizeRateLimitPart(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9_.-]/g, '_').slice(0, 128) || 'unknown';
}

async function sendDiscordReport(report: BugReportRequest, deps: ApiCoreDependencies): Promise<void> {
  const webhookUrl = deps.env.DISCORD_BUG_REPORT_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error('DISCORD_BUG_REPORT_WEBHOOK_URL is not configured');
  }

  if (!webhookUrl.startsWith('https://discord.com/api/webhooks/')) {
    throw new Error('DISCORD_BUG_REPORT_WEBHOOK_URL must be a Discord webhook URL');
  }

  const fullReport = formatFullReport(report);
  const payload = {
    username: 'Voicetypr Reports',
    content: report.kind === 'crash' ? 'New Voicetypr crash report' : 'New Voicetypr bug report',
    allowed_mentions: { parse: [] },
    embeds: [buildDiscordEmbed(report)],
    attachments: [
      {
        id: 0,
        filename: 'voicetypr-report.txt',
        description: 'Voicetypr report including latest log excerpt',
      },
    ],
  };

  const formData = new FormData();
  formData.append('payload_json', JSON.stringify(payload));
  formData.append(
    'files[0]',
    new Blob([fullReport], { type: 'text/plain; charset=utf-8' }),
    'voicetypr-report.txt'
  );

  const separator = webhookUrl.includes('?') ? '&' : '?';
  const response = await deps.fetch(`${webhookUrl}${separator}wait=true`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const responseText = await response.text().catch(() => '');
    throw new Error(`Discord webhook failed with ${response.status}: ${responseText.slice(0, 500)}`);
  }
}

function buildDiscordEmbed(report: BugReportRequest) {
  const environment = report.environment;
  const title = report.kind === 'crash' ? 'Voicetypr crash report' : 'Voicetypr bug report';
  const description = report.kind === 'crash'
    ? truncate(redactDiagnosticText(report.crash.errorMessage), 1_000)
    : truncate(redactDiagnosticText(report.message), 1_000);

  return {
    title,
    description,
    color: report.kind === 'crash' ? 0xef4444 : 0x3b82f6,
    fields: [
      { name: 'App Version', value: truncate(environment.appVersion, 1_024), inline: true },
      { name: 'Platform', value: truncate(`${environment.platform} ${environment.osVersion}`, 1_024), inline: true },
      { name: 'Architecture', value: truncate(environment.architecture, 1_024), inline: true },
      { name: 'Model', value: truncate(environment.currentModel || 'None', 1_024), inline: true },
      { name: 'Contact', value: truncate(formatContact(report), 1_024), inline: true },
      { name: 'Log', value: truncate(formatLogSummary(report), 1_024), inline: false },
    ],
    timestamp: environment.timestamp,
  };
}

function formatContact(report: BugReportRequest): string {
  const parts = [];
  if (report.name) parts.push(report.name);
  if (report.email) parts.push(report.email);
  return parts.length > 0 ? parts.join(' / ') : 'Not provided';
}

function formatLogSummary(report: BugReportRequest): string {
  const latestLog = report.latestLog;
  const source = latestLog.fileName || 'No file';
  const truncation = latestLog.truncated ? 'truncated' : 'not truncated';
  const status = latestLog.statusNote ? ` — ${latestLog.statusNote}` : '';
  return `${source} (${latestLog.content.length} chars, ${truncation})${status}`;
}

function formatFullReport(report: BugReportRequest): string {
  const lines: string[] = [];

  lines.push(`# Voicetypr ${report.kind === 'crash' ? 'Crash' : 'Bug'} Report`);
  lines.push('');

  if (report.name || report.email) {
    lines.push('## Contact');
    if (report.name) lines.push(`Name: ${report.name}`);
    if (report.email) lines.push(`Email: ${report.email}`);
    lines.push('');
  }

  if (report.kind === 'manual') {
    lines.push('## Message');
    lines.push(redactDiagnosticText(report.message));
    lines.push('');
  } else {
    if (report.message) {
      lines.push('## User Message');
      lines.push(redactDiagnosticText(report.message));
      lines.push('');
    }

    lines.push('## Crash');
    lines.push(`Error: ${redactDiagnosticText(report.crash.errorMessage)}`);
    if (report.crash.errorStack) {
      lines.push('');
      lines.push('### Stack');
      lines.push(redactDiagnosticText(report.crash.errorStack));
    }
    if (report.crash.componentStack) {
      lines.push('');
      lines.push('### Component Stack');
      lines.push(redactDiagnosticText(report.crash.componentStack));
    }
    lines.push('');
  }

  lines.push('## Environment');
  lines.push(`App Version: ${report.environment.appVersion}`);
  lines.push(`Platform: ${report.environment.platform}`);
  lines.push(`OS Version: ${report.environment.osVersion}`);
  lines.push(`Architecture: ${report.environment.architecture}`);
  lines.push(`Current Model: ${report.environment.currentModel || 'None'}`);
  lines.push(`Device ID: ${report.environment.deviceId || 'Unknown'}`);
  lines.push(`Timestamp: ${report.environment.timestamp}`);
  lines.push('');

  lines.push('## Latest App Log');
  if (report.latestLog.fileName) lines.push(`Source: ${report.latestLog.fileName}`);
  if (report.latestLog.statusNote) lines.push(`Status: ${report.latestLog.statusNote}`);
  if (report.latestLog.truncated) lines.push('Note: log was truncated before submission.');
  lines.push('');
  lines.push(redactDiagnosticText(report.latestLog.content) || '(No log content)');

  return lines.join('\n');
}

function redactDiagnosticText(value: string): string {
  return value
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, '[REDACTED_EMAIL]')
    .replace(/\b(?:sk|sk-ant|ghp|gho|github_pat)[_-][A-Za-z0-9_-]{16,}\b/g, '[REDACTED_TOKEN]')
    .replace(/\bsk-[A-Za-z0-9_-]{20,}\b/g, '[REDACTED_TOKEN]')
    .replace(/\bAKIA[0-9A-Z]{16}\b/g, '[REDACTED_AWS_KEY]')
    .replace(/\bhf_[A-Za-z0-9]{32,}\b/g, '[REDACTED_TOKEN]')
    .replace(/\bBearer\s+[A-Za-z0-9._~+/=-]{16,}/gi, 'Bearer [REDACTED_TOKEN]')
    .replace(/\b(api[_-]?key|access[_-]?token|refresh[_-]?token|secret|license[_-]?key)\b\s*[:=]\s*[^\s,;]+/gi, '$1=[REDACTED_SECRET]')
    .replace(/\/Users\/[^/\s]+/g, '/Users/[REDACTED_USER]')
    .replace(/\/home\/[^/\s]+/g, '/home/[REDACTED_USER]')
    .replace(/\/root\//g, '/[REDACTED_USER]/')
    .replace(/[A-Za-z]:\\Users\\[^\\\s]+/g, '[REDACTED_DRIVE]:\\Users\\[REDACTED_USER]');
}

function truncate(value: string, maxLength: number): string {
  return value.length <= maxLength ? value : `${value.slice(0, maxLength - 1)}…`;
}
