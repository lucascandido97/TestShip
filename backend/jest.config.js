const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    path.resolve(__dirname, './node_modules/'),
    path.resolve(__dirname, './dist/'),
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.ts',
  ],
  setupFilesAfterEnv: ['./src/tests/setup.ts'], // Setup global para todos os testes
  testMatch: ['**/tests/unit/**/*.test.ts', '**/tests/integration/**/*.test.ts'], // Inclui testes de unidade e integração
};