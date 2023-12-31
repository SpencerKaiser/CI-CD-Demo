module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testMatch: ['**/*.test.ts'],
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
  clearMocks: true,
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    './src/**/*.ts',
    '!./src/index.ts',
    '!./src/utils/logger.ts',
    '!./src/env.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
