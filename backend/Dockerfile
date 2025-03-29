# Stage 1: Build
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["node", "dist/bundle.js"]

# Stage 2: Production
FROM node:16-alpine AS production
WORKDIR /app

COPY --from=build /app/dist ./dist

RUN npm install pg --production

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000
CMD ["node", "dist/bundle.js"]
