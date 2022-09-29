const baseConfig = require('./jest.config');

const collectCoverageFrom = [
  'src/store/**',
  '!**/node_modules/**',
  '!src/**/tests/**',
];

module.exports = {
  ...baseConfig,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/components/',
    '<rootDir>/src/containers/',
    '<rootDir>/src/assets/',
  ],
  coverageDirectory: 'coverage-store',
  collectCoverageFrom,
};
