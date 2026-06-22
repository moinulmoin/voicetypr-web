# Coolify API Deployment

Voicetypr's production split is:

- Vercel: `@voicetypr/web` frontend.
- Coolify: Dockerized `@voicetypr/api` Hono backend.
- Postgres remains the Prisma database.
- Polar remains the source of truth for paid licenses, activations, orders, and refunds.

## Coolify Settings

- Dockerfile: `Dockerfile.api`
- Exposed port: `4000`
- Application/service port: `4000`
- Health check: `GET /healthz`
- Public domain: `https://api.voicetypr.com`

If Cloudflare returns `522` while Coolify logs only show `Voicetypr API listening on http://0.0.0.0:4000`, first verify that the Coolify public proxy routes the domain to container port `4000` rather than the old Next.js port `3000`. `0.0.0.0` is the correct container listen address; binding only to `localhost` or `127.0.0.1` would make the app unreachable from the proxy. The API uses `evlog` Hono middleware for structured request logs; if `/healthz` produces no request log line, the request is not reaching the Node process.

## Required Environment Variables

```bash
APP_URL=https://voicetypr.com
DATABASE_URL=postgresql://...
POLAR_ACCESS_TOKEN=...
POLAR_ORGANIZATION_ID=...
POLAR_PRODUCT_ID_PRO=...
POLAR_PRODUCT_ID_PLUS=...
POLAR_PRODUCT_ID_MAX=...
POLAR_PRODUCT_ID_TEAM=...
POLAR_WEBHOOK_SECRET=...
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
DISCORD_BUG_REPORT_WEBHOOK_URL=...
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=...
OPENPANEL_CLIENT_SECRET=...
NEXT_PUBLIC_OPENPANEL_API_URL=https://api.openpanel.dev
```

`OPENPANEL_SECRET_KEY` is also accepted as a fallback for `OPENPANEL_CLIENT_SECRET`.

## Coolify Environment Settings

Keep production secrets as runtime-only in Coolify. Do not mark `NODE_ENV=production`, Polar, Redis, Discord, OpenPanel, or database variables as available at build time unless a future build step explicitly needs them. The Docker build uses a placeholder `DATABASE_URL` only for Prisma client generation.

## Deploy Order

Run migrations before releasing a new API container:

```bash
pnpm db:migrate:deploy
```

Then deploy the image built from `Dockerfile.api`.

For local validation:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
docker build -f Dockerfile.api -t voicetypr-api .
docker run --rm -p 4000:4000 --env-file .env voicetypr-api
curl http://localhost:4000/healthz
```

Expected API logs after a successful request:

```text
{"method":"GET","path":"/healthz","requestId":"...","host":"api.voicetypr.com","proto":"https","ip":"...","cfRay":"...","status":200,"duration":"1ms","timestamp":"...","level":"info","service":"voicetypr-api","environment":"production"}
```

## Cutover

Set the Vercel frontend env var:

```bash
NEXT_PUBLIC_API_URL=https://api.voicetypr.com
```

Update the Polar webhook endpoint to:

```text
https://api.voicetypr.com/api/webhooks/polar
```

The old Vercel routes are thin adapters to the same shared Hono app, so rollback can point traffic back to Vercel if needed.
