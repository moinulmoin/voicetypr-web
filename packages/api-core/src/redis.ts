import { Redis } from '@upstash/redis';

let redis: Redis | undefined;

export function getRedis() {
  redis ??= Redis.fromEnv();
  return redis;
}
