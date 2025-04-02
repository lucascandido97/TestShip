# Stage: Base
FROM node:16-alpine AS base

WORKDIR /app

COPY package.json ./

# Stage : Development
FROM base AS development

RUN --mount=type=cache,target=/root/.npm \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm ci --no-audit

COPY . .

# Stage : Build
FROM base AS build

RUN --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm ci --no-audit

COPY . .
    
RUN npm run build

# Final stage: Production
FROM node:16-alpine AS production

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm install --omit=dev --no-audit

COPY --from=build /app/build ./build

RUN chown -R appuser:appgroup /app

USER appuser

CMD ["serve", "-s", "build"]