/* eslint-env node */
/* eslint-disable quote-props */

module.exports = {
  plugins: [
    'no-only-tests',
  ],
  extends: [
    'eslint:recommended',
    'devextreme/javascript',
  ],
  rules: {
    'class-methods-use-this': 0, // TODO warn (was error)
    'func-names': 0, // TODO warn (was warn) >500
    'import/extensions': 0,
    'no-use-before-define': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'no-only-tests/no-only-tests': 'error',
    'quote-props': ['error', 'consistent'],
    'no-dupe-keys': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
  },
};
