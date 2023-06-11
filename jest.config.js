/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/coverage/**', '!**.config.js'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  globals: {
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100,
  },

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>'],

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
}
