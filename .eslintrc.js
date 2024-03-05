module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
  // 'plugin:storybook/recommended'
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
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
      },
    ],
  },
};
