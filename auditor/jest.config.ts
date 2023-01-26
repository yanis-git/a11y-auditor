/* eslint-disable */
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  preset: 'jest-puppeteer',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  // A map from regular expressions to paths to transformers
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
};
