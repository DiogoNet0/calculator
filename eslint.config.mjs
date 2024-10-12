import eslint from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Airbnb style guide rules
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
      'import/prefer-default-export': 'error',
      // Add more Airbnb rules as needed
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
  prettier, // This will turn off ESLint rules that conflict with Prettier
];
