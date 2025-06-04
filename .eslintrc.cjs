module.exports = {
    root: true,
    env: {
      browser: true,
      es2020: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:svelte/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['svelte', '@typescript-eslint', 'tailwindcss'],
    overrides: [
      {
        files: ['*.svelte'],
        parser: 'svelte-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.svelte'],
        },
        rules: {
          // Tailwind plugin for class ordering
          'tailwindcss/classnames-order': 'warn',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  };
