# Use the official Playwright image
FROM mcr.microsoft.com/playwright:v1.37.0

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Run Playwright tests
CMD ["npm", "test"]
