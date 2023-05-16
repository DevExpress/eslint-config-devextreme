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
    'devextreme/javascript',
    'devextreme/spell-check',
  ],
  overrides: [{
    files: [
      '*.js',
    ],
    globals: {
      System: true,
    },
    rules: {
      'quote-props': ['error', 'consistent'],
      'no-dupe-keys': 0,
    },
  }, {
    files: [
      '*.*',
    ],
    env: {
      jquery: true,
    },
    globals: {
      DevExpress: true,
    },
    overrides: [{
      files: '**/data.js',
      rules: {
        'no-unused-vars': 0,
      },
    }, {
      files: '**/index.js',
      rules: {
        'no-undef': 0,
      },
    }],
  }],
};
