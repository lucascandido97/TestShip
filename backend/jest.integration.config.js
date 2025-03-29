const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['**/tests/integration/**/*.test.ts'], // Only integration tests
  setupFilesAfterEnv: ['./src/tests/setup.integration.ts'], // Specific setup for integration
};
