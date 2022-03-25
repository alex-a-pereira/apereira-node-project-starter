module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    // custom rules here
  },
  globals: {
    expect: true,
    test: true,
    describe: true,
    afterEach: true,
    jest: true,
    it: true,
    beforeEach: true,
    beforeAll: true,
    afterAll: true,
    shallow: true,
    snapshot: true,
    all: true,
    __DEV__: true
  },
  overrides: []
}
