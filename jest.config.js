/* eslint-disable no-undef */
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules'],
  transform: {},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
};
