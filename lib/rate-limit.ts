import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = Redis.fromEnv();

export const trialCheckIpLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, '10 m'),
  prefix: '@rl:trial:ip',
});

export const trialCheckDeviceLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '10 m'),
  prefix: '@rl:trial:device',
});

export const trialCreationLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(2, '24 h'),
  prefix: '@rl:trial:create',
});

export const activateIpLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 m'),
  prefix: '@rl:activate:ip',
});

export const activateDeviceLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '10 m'),
  prefix: '@rl:activate:device',
});

export const validateDeviceLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(60, '10 m'),
  prefix: '@rl:validate:device',
});

export const deactivateIpLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 m'),
  prefix: '@rl:deactivate:ip',
});

export const checkoutIpLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, '10 m'),
  prefix: '@rl:checkout:ip',
});

export const checkoutStatusIpLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(15, '10 m'),
  prefix: '@rl:checkout-status:ip',
});

export const serverActionIpLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 m'),
  prefix: '@rl:action:ip',
});

export function createRateLimitResponse(): NextResponse {
  return NextResponse.json(
    { success: false, message: 'Too many requests. Please try again later.' },
    { status: 429, headers: { 'Retry-After': '60' } }
  );
}
