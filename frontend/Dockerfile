# Stage 1: Dependencies
FROM node:16 AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit

# Stage 2: Build
FROM node:16 AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production
FROM node:16-alpine AS production
WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=dependencies /app/node_modules ./node_modules
COPY package*.json ./

RUN npm prune --omit=dev && \
    rm -f package*.json

RUN addgroup -S appgroup && adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app
USER appuser

CMD ["serve", "-s", "build"]