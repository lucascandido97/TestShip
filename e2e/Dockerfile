# Use the official Playwright image
FROM mcr.microsoft.com/playwright:v1.50.0-noble

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --no-audit

# Install Playwright dependencies (browsers)
RUN npx playwright install --with-deps

# Copy the rest of the project
COPY . .