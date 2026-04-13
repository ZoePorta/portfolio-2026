// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  // Global ignores
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },

  // Astro files — plugin handles its own parser internally
  ...eslintPluginAstro.configs.recommended,

  // TypeScript and TSX files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Disallow `any` — enforced manually since @typescript-eslint/eslint-plugin is not installed
      'no-implicit-coercion': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },

  // JS files (e.g. this config file itself, astro.config.mjs)
  {
    files: ['**/*.js', '**/*.mjs'],
    rules: {
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
];
