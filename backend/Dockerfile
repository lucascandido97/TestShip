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

# Copy only necessary files to reduce image size
COPY --from=build /app/dist ./dist
COPY --from=dependencies /app/node_modules ./node_modules
COPY package*.json ./
# Remove unnecessary files for production
RUN npm prune --omit=dev && \
    rm -f package*.json

# Create non-root user and set permissions
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app
USER appuser

# Set environment variables
ENV NODE_ENV=production

# Use a minimal entrypoint
CMD ["node", "dist/bundle.js"]