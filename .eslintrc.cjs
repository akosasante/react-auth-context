module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:compat/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.js',
    'local_dev',
    'src/*.js',
  ],
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.test.jsx', '*.test.js'],
      plugins: ['jest', 'jest-dom'],
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended'],
      env: { 'jest/globals': true },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['@typescript-eslint', 'react-refresh', 'compat'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '(^_)|(React)' },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
