const baseConfig = require('./jest.config');

const collectCoverageFrom = [
  ...baseConfig.collectCoverageFrom,
  '!src/store/**',
];

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: [
    ...baseConfig.setupFiles,
    './src/assets/setups/setupApi.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/store/',
    '<rootDir>/src/assets/',
  ],
  coverageDirectory: 'coverage-unit',
  collectCoverageFrom,
};
