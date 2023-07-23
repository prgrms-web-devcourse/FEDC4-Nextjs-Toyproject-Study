module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react/prop-types': 'off', // props validation 생략 가능
    'react/react-in-jsx-scope': 'off', // React import 하지 않아도 동작
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 'prettier/prettier': ['error', { endOfLine: 'lf' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
