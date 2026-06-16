# syntax=docker/dockerfile:1.7

ARG NODE_VERSION=24-alpine
ARG PNPM_VERSION=11.1.2

FROM node:${NODE_VERSION} AS base
ARG PNPM_VERSION=11.1.2
ENV PNPM_HOME="/pnpm" \
    PATH="/pnpm:$PATH" \
    NEXT_TELEMETRY_DISABLED="1"
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate
WORKDIR /app

FROM base AS deps
ENV DATABASE_URL="postgresql://user:password@localhost:5432/voicetypr?schema=public"
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/web/package.json ./apps/web/package.json
COPY apps/api/package.json ./apps/api/package.json
COPY packages/api-core/package.json ./packages/api-core/package.json
COPY packages/contracts/package.json ./packages/contracts/package.json
COPY packages/db/package.json ./packages/db/package.json
COPY packages/db/prisma.config.ts ./packages/db/prisma.config.ts
COPY packages/db/prisma ./packages/db/prisma
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts && \
    pnpm approve-builds --all && \
    pnpm rebuild && \
    pnpm --filter @voicetypr/db db:generate

FROM deps AS migrate
CMD ["pnpm", "--filter", "@voicetypr/db", "db:migrate:deploy"]

FROM deps AS builder
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_DOWNLOAD_URL
ARG NEXT_PUBLIC_OPENPANEL_CLIENT_ID
ARG NEXT_PUBLIC_OPENPANEL_API_URL
ARG NEXT_PUBLIC_PRO_PRODUCT_ID
ARG NEXT_PUBLIC_PLUS_PRODUCT_ID
ARG NEXT_PUBLIC_MAX_PRODUCT_ID
ARG NEXT_PUBLIC_TEAM_PRODUCT_ID
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL \
    NEXT_PUBLIC_DOWNLOAD_URL=$NEXT_PUBLIC_DOWNLOAD_URL \
    NEXT_PUBLIC_OPENPANEL_CLIENT_ID=$NEXT_PUBLIC_OPENPANEL_CLIENT_ID \
    NEXT_PUBLIC_OPENPANEL_API_URL=$NEXT_PUBLIC_OPENPANEL_API_URL \
    NEXT_PUBLIC_PRO_PRODUCT_ID=$NEXT_PUBLIC_PRO_PRODUCT_ID \
    NEXT_PUBLIC_PLUS_PRODUCT_ID=$NEXT_PUBLIC_PLUS_PRODUCT_ID \
    NEXT_PUBLIC_MAX_PRODUCT_ID=$NEXT_PUBLIC_MAX_PRODUCT_ID \
    NEXT_PUBLIC_TEAM_PRODUCT_ID=$NEXT_PUBLIC_TEAM_PRODUCT_ID
COPY . .
RUN pnpm --filter @voicetypr/db db:generate && \
    pnpm --filter @voicetypr/contracts build && \
    pnpm --filter @voicetypr/db build && \
    pnpm --filter @voicetypr/api-core build && \
    pnpm --filter @voicetypr/web exec next build

FROM node:${NODE_VERSION} AS runner
ENV NODE_ENV="production" \
    NEXT_TELEMETRY_DISABLED="1" \
    PORT="3000" \
    HOSTNAME="0.0.0.0"
WORKDIR /app


COPY --from=builder /app/apps/web/public ./apps/web/public
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static

EXPOSE 3000
CMD ["node", "apps/web/server.js"]
