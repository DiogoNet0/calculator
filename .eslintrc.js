module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
}
