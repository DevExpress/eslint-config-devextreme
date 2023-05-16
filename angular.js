/* eslint-env node */
/* eslint-disable quote-props */

// eslint-disable-next-line import/no-extraneous-dependencies
const spellcheckRule = require('./spell-check').rules['spellcheck/spell-checker'];

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    'ecmaVersion': 2018,
  },
  plugins: [
    'spellcheck',
    'no-only-tests',
  ],
  rules: {
    'spellcheck/spell-checker': spellcheckRule,
    'class-methods-use-this': 0, // TODO warn (was error)
    'func-names': 0, // TODO warn (was warn) >500
    'import/extensions': 0,
    'no-use-before-define': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'no-only-tests/no-only-tests': 'error',
  },
  extends: [
    'eslint:recommended',
    'devextreme/spell-check',
  ],
  overrides: [{
    'files': [
      '*.ts',
    ],
    extends: ['devextreme/typescript'],
    parserOptions: {
      project: './tsconfig.json',
      'createDefaultProgram': true,
      'ecmaVersion': 6,
    },
    rules: {
      // TODO consider this rules
      'eqeqeq': 0,
      'no-plusplus': 0,
      'max-len': 0,
      'max-classes-per-file': 0,
      'consistent-return': 0,
      'import/extensions': 0,
      'import/no-webpack-loader-syntax': 0,
      'no-restricted-properties': 0,
      'no-restricted-globals': 0,
      'spellcheck/spell-checker': 0,
      'no-mixed-operators': 0,
      'no-useless-concat': 0,
      'no-self-assign': 0,
      'default-case': 0,
      'no-var': 0,
      'no-return-assign': 0,
      'vars-on-top': 0,
      'no-sequences': 0,
      'new-cap': 0,
      'no-param-reassign': 0,
      'no-multi-assign': 0,
      'no-restricted-syntax': 0,
      'prefer-rest-params': 0,
      'radix': 0,
      'no-underscore-dangle': 0,
      'operator-assignment': 0,
      'prefer-const': 0,
      '@typescript-eslint/naming-convention': 0,
      '@typescript-eslint/no-throw-literal': 0,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/no-shadow': 0,
      '@typescript-eslint/no-loop-func': 0,
      '@typescript-eslint/ban-types': 0,
      '@typescript-eslint/no-this-alias': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-unused-expressions': 0,
      '@typescript-eslint/no-useless-constructor': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0, // was warn

    },
  }],
};
