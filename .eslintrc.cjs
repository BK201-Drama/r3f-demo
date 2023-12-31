/* eslint-disable no-magic-numbers */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'google',
    'plugin:prettier/recommended',
    './configs/autoImport/.eslintrc-auto-import.json',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['react'],
  rules: {
    quotes: 'off', // 单引号
    semi: [0],
    camelcase: 'off',
    'no-magic-numbers': 2,
    'prettier/prettier': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-undef': 'off',
    'react/prop-types': 0,
    'require-jsdoc': 'off',
    'linebreak-style': [0, 'window'], // 让在windows的CRLF文件不告警处理
  },
  settings: {
    'import/ignore': ['node_modules'],
  },
}
