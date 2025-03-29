const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['**/tests/unit/**/*.test.ts'], // Only unit tests
  setupFilesAfterEnv: ['./src/tests/setup.unit.ts'], // Specific setup for unit tests
};
