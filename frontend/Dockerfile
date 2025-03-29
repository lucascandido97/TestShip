# Stage 1: Build
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:frontend

# Stage 2: Production
FROM node:16-alpine AS production
WORKDIR /app

# Copy only the build artifacts
COPY --from=build /app/build ./build

# Create a non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app/build
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3001
CMD ["serve", "-s", "."]