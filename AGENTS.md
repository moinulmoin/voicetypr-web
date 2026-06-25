# Repository Guidelines

## Project Overview

Voicetypr Web — the marketing site and API backend for Voicetypr, a desktop voice-to-text app. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Prisma 7** (PostgreSQL), and **Polar** for licensing. Uses shadcn/ui components.

This is a **pnpm + Turborepo monorepo** (`packageManager: pnpm@11.1.2`, `turbo`). Workspace packages live under `apps/*` and `packages/*` (see `pnpm-workspace.yaml`).

## Project Structure

```
apps/
  web/                       # @voicetypr/web — Next.js 16 marketing site + API
    app/                     # App Router pages, layouts, route handlers
      api/                   # Route handlers
        v1/                  # License/trial endpoints — delegate to the shared
                             #   Hono app from @voicetypr/api-core (see _hono.ts)
        webhooks/            # Polar + GitHub webhooks
        markdown/            # Markdown content negotiation endpoint
        checkout/            # Polar checkout
        feature-ideas/       # Feature-idea submissions
        op/                  # OpenPanel ingest proxy
      components/            # Page-level React components
      (legal)/ ...           # Route groups for legal/landing/tools/help pages
    components/              # Shared components (PricingCards, providers, icons)
      ui/                    # shadcn/ui primitives (Button, Dialog, etc.)
    lib/                     # Server utilities (pricing, content, SEO, markdown)
    types/ public/ content/
    proxy.ts                 # Next.js 16 proxy (the rename of middleware.ts)
    next.config.mjs          # Config: standalone output, cacheComponents,
                             #   reactCompiler, redirects, rewrites, headers
  api/                       # @voicetypr/api — standalone Hono node server
    src/index.ts             # @hono/node-server entry (PORT 4000 default)
    src/app.ts               # Mounts createVoicetyprApi() from api-core
packages/
  db/                        # @voicetypr/db — Prisma 7 schema + generated client
    prisma/schema.prisma     # generator output -> ../generated/prisma
    prisma.config.ts         # defineConfig: schema/migrations path, datasource URL
    generated/prisma/        # Generated Prisma client (Prisma 7 output)
    src/index.ts             # PrismaClient w/ @prisma/adapter-pg; global singleton
  api-core/                  # @voicetypr/api-core — shared API logic (Hono app)
    src/app.ts               # createVoicetyprApi() — the single source of truth
    src/polar.ts redis.ts pricing.ts constants.ts license-utils.ts
  contracts/                 # @voicetypr/contracts — shared Zod schemas + types
```

The same shared Hono app (`createVoicetyprApi()` from `@voicetypr/api-core`) powers both deploy targets: `apps/api` serves it directly via `@hono/node-server`, while `apps/web` mounts it under `/api/v1` through `hono/vercel`'s `handle` (see `apps/web/app/api/v1/_hono.ts`).

## Build & Development Commands

All build/dev/test scripts are defined at the **repo root** and delegate to Turborepo (`turbo run …`). Run them from the root:

```bash
pnpm dev                # Build shared pkgs, then run web + api dev servers
pnpm dev:api            # Build shared pkgs, then run api dev server only
pnpm build              # Turbo build across the whole workspace
pnpm deploy:web         # db:migrate:deploy + build @voicetypr/web
pnpm deploy:api         # db:migrate:deploy + build @voicetypr/api
pnpm start              # Start the built web app (next start)
pnpm lint               # ESLint check (all packages)
pnpm lint:fix           # ESLint auto-fix
pnpm typecheck          # tsc --noEmit (all packages)
pnpm test               # Vitest (all packages)
pnpm db:generate        # Generate Prisma client (packages/db)
pnpm db:push            # Push schema to DB — dev (packages/db)
pnpm db:migrate         # Create + apply a Prisma migration (packages/db)
pnpm db:migrate:deploy  # Apply pending migrations (deploy)
pnpm db:studio          # Prisma Studio GUI
pnpm compose            # docker compose (uses apps/api/.env)
```

`postinstall` runs `pnpm db:generate` so the generated Prisma client exists after every install. Turborepo's pipeline (`turbo.json`) makes `build`, `typecheck`, and `test` depend on upstream `^build`, so the shared packages are compiled first.

**Before shipping**, run: `pnpm typecheck && pnpm lint && pnpm test`

## Coding Style & Conventions

- **Language**: TypeScript (strict mode, `noUncheckedIndexedAccess` on)
- **Formatting**: Follow existing file style — 2-space indent, single quotes, semicolons
- **Path aliases**: In `apps/web`, `@/*` maps to the `apps/web` root. Cross-package code imports workspace packages by name (`@voicetypr/db`, `@voicetypr/api-core`, `@voicetypr/contracts`).
- **Components**: shadcn/ui pattern — `components/ui/` for primitives, colocated components per page
- **Styling**: Tailwind CSS v4 with `tw-animate-css` for animations
- **React**: React 19 patterns — ref cleanup functions, direct context rendering; React Compiler enabled in `apps/web`
- **Linting**: ESLint 9 with `eslint-config-next` (core-web-vitals + TypeScript)

## Testing

- **Framework**: Vitest with jsdom and `vite-tsconfig-paths` (config: `apps/web/vitest.config.mts`)
- **Test location**: Co-located alongside source files (e.g., `lib/pricing.test.ts`, `components/cookie-consent.test.tsx`, `app/api/.../route.test.ts`)
- **Run**: `pnpm test` (all packages, single run) — driven through Turbo

## Git & Commit Conventions

- **Format**: Conventional commits — `feat:`, `fix:`, `refactor:`, `chore:`
- **Branching**: Feature branches merged into `main` via PRs
- **PR style**: Descriptive titles matching commit convention; include context in description

## Architecture Notes

- **Licensing**: Polar (`@polar-sh/sdk`) handles payments and license activation. The validation/activation/trial logic lives in `@voicetypr/api-core`; webhook intake is at `apps/web/app/api/webhooks/polar`, checkout at `app/api/checkout`.
- **Database**: PostgreSQL via **Prisma 7** (`@voicetypr/db`). Uses the `@prisma/adapter-pg` driver adapter. The generator writes to `generated/prisma/`, and `src/index.ts` builds the client from `DATABASE_URL` (Prisma 7 sources the datasource URL from `prisma.config.ts`, which loads `apps/api/.env`). Key models: `License`, `Device`, `ActivityLog`.
- **Caching / rate limiting**: Upstash Redis via `@voicetypr/api-core` (`src/redis.ts` → `getRedis()` from env) for rate limiting and ephemeral data.
- **Analytics**: OpenPanel (`components/openpanel.tsx`, `app/api/op` ingest). Tracking attributes use the `data-track` convention.
- **Proxy**: `apps/web/proxy.ts` (Next.js 16's rename of `middleware.ts`) handles request-level concerns: markdown content negotiation (rewrites markdown-accepting requests to `/api/markdown`), the GDPR/LGPD geo-consent cookie (`vt_geo_requires_consent`), and security headers.
- **Redirects & rewrites**: `apps/web/next.config.mjs` 301-redirects old doorway pages to canonical editorial equivalents, and rewrites first-party affiliate pixel/tracking paths through our own domain to survive ad blockers.
- **Deployment**: `apps/web` builds to Next.js standalone output; `apps/api` is containerized (`Dockerfile.api`, `docker-compose.yml`, `pnpm deploy:api`). Build docs: `docs/coolify-api-deploy.md`.
