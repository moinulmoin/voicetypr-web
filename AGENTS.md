# Repository Guidelines

## Project Overview

Voicetypr Web — the marketing site and API backend for Voicetypr, a desktop voice-to-text app. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Prisma** (PostgreSQL), and **Polar** for licensing. Uses shadcn/ui components.

## Project Structure

```
app/                    # Next.js App Router pages and layouts
  actions/              # Server actions (download-emails, waitlist)
  api/v1/               # API route handlers (licensing, validation)
  api/webhooks/         # Webhook handlers (Polar)
  components/           # Page-level React components
  download/             # Download page
  globals.css           # Global styles (Tailwind v4)
  layout.tsx            # Root layout
app/components/ui/      # shadcn/ui primitives (Button, Dialog, etc.)
components/             # Shared components (PricingCards, providers, icons)
hooks/                  # Custom React hooks (useFlashOffer)
lib/                    # Server utilities (db, redis, polar, pricing, types, constants)
prisma/                 # Prisma schema and migrations
proxy.ts                # Next.js proxy (formerly middleware.ts in Next.js 16)
next.config.mjs         # Next.js config (redirects, headers, image domains)
```

## Build & Development Commands

```bash
pnpm dev              # Start dev server (Next.js)
pnpm build            # Prisma migrate + generate + Next.js build
pnpm lint             # ESLint check
pnpm lint:fix         # ESLint auto-fix
pnpm typecheck        # TypeScript type checking (tsc --noEmit)
pnpm test             # Run Vitest tests
pnpm db:generate      # Generate Prisma client
pnpm db:push          # Push Prisma schema to DB (dev)
pnpm db:migrate       # Create and apply Prisma migration
pnpm db:studio        # Open Prisma Studio GUI
```

**Before shipping**, run: `pnpm typecheck && pnpm lint && pnpm test`

## Coding Style & Conventions

- **Language**: TypeScript (strict mode enabled, `noUncheckedIndexedAccess` on)
- **Formatting**: Follow existing file style — 2-space indent, single quotes, semicolons
- **Path aliases**: Use `@/*` imports (maps to project root via tsconfig)
- **Components**: shadcn/ui pattern — `components/ui/` for primitives, colocated components per page
- **Styling**: Tailwind CSS v4 with `tw-animate-css` for animations
- **React**: React 19 patterns — ref cleanup functions, direct context rendering
- **State management**: `useSyncExternalStore` for shared state (see `lib/flash-offer-store.ts`)
- **Linting**: ESLint with `eslint-config-next` (core-web-vitals + TypeScript). `no-explicit-any` and `no-unescaped-entities` set to `warn`

## Testing

- **Framework**: Vitest with jsdom and `vite-tsconfig-paths`
- **Test location**: Co-located alongside source files (e.g., `lib/flash-offer-store.test.ts`)
- **Run**: `pnpm test` (single run) or `pnpm vitest` (watch mode)

## Git & Commit Conventions

- **Format**: Conventional commits — `feat:`, `fix:`, `refactor:`, `chore:`
- **Branching**: Feature branches merged into `main` via PRs
- **PR style**: Descriptive titles matching commit convention; include context in description

## Architecture Notes

- **Licensing**: Polar SDK handles payments and license activation. API routes in `app/api/v1/` validate licenses and manage trials.
- **Database**: PostgreSQL via Prisma. Key models: `License`, `Device`, `ActivityLog`.
- **Caching**: Upstash Redis (`lib/redis.ts`) for rate limiting and ephemeral data.
- **Analytics**: OpenPanel only (`components/openpanel.tsx`). Event attributes use the `data-track` convention; Umami has been removed.
- **Proxy**: `proxy.ts` (Next.js 16's rename of `middleware.ts`) handles request-level concerns: markdown content negotiation (rewrites markdown-accepting requests to `/api/markdown`), GDPR geo-consent cookie (`vt_geo_requires_consent`), and security headers.
- **Redirects**: old doorway pages 301 to canonical editorial equivalents via `redirects()` in `next.config.mjs`.
