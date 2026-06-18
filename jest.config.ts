import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Path to the Next.js app to load next.config and .env files in the test environment
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Coverage is produced on every `jest --coverage` run.
  coverageReporters: ['text', 'lcov', 'json-summary'],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!app/**/layout.tsx',
    '!app/**/*.stories.{ts,tsx}',
  ],

  // Playwright specs live in e2e/ and must not be picked up by Jest.
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/e2e/',
    '<rootDir>/.next/',
  ],

  // Overall (whole-project) coverage gate. `jest --coverage` fails if any
  // metric drops below these numbers.
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the
// Next.js config which is async.
export default createJestConfig(config)
