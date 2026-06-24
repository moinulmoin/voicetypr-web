import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { config as loadEnv } from 'dotenv';
import { defineConfig, env } from 'prisma/config';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Prisma 7 disables automatic .env loading once a config file is present, so the
// CLI (generate / migrate / db push / studio) depends on this explicit load.
// Source it from the API app's .env — the canonical home for DATABASE_URL.
loadEnv({ path: join(__dirname, '../../apps/api/.env') });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});
