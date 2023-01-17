/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'max-len': [1, { code: 180 }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 180,
      },
    ],
  },
};
