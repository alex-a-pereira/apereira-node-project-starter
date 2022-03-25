module.exports = {
  verbose: true,
  rootDir: '.',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    'mocks' // ignore mock directory
  ],
  coverageReporters: [
    'text'
  ],
  setupFiles: ['./jest.setup.js'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    'mocks' // ignore mock directory
  ],
  moduleFileExtensions: ['js']
}
