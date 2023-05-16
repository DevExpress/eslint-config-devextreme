/* eslint-env node */
/* eslint-disable quote-props */

// eslint-disable-next-line import/no-extraneous-dependencies
const spellcheckRule = require('eslint-config-devextreme/spell-check').rules['spellcheck/spell-checker'];

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
  }, {
    files: [
      '*.vue',
    ],
    extends: [
      'plugin:vue/recommended',
    ],
    globals: {
      System: false,
      AzureGateway: false,
      AzureFileSystem: false,
    },
    rules: {
      'block-spacing': 'error',
      'comma-spacing': 'error',
      'computed-property-spacing': 'error',
      'comma-style': ['error', 'last'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-irregular-whitespace': 'error',
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      'no-new-func': 'error',
      'no-eval': 'error',
      'no-undef': 'error',
      'no-unused-expressions': 'off',
      'no-unused-vars': ['error'],
      'no-extend-native': 'error',
      'no-alert': 'error',
      'no-whitespace-before-property': 'error',
      'object-curly-spacing': ['error', 'always'],
      'semi-spacing': 'error',
      semi: 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'never'],
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'eol-last': ['error', 'always'],
      curly: ['error', 'multi-line', 'consistent'],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          MemberExpression: 1,
          CallExpression: {
            arguments: 1,
          },
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      'prefer-template': 'error',
      'vue/camelcase': 'error',
      'vue/component-name-in-template-casing': 'error',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/attributes-order': 'off',
      'vue/no-unused-vars': 'off',
      'vue/no-unused-components': 'off',
      'vue/no-template-shadow': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/valid-v-model': 'off',
      'max-len': 0,
      'vue/max-len': ['error', 100, 2, {
        // eslint-disable-next-line spellcheck/spell-checker
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      'vue/html-closing-bracket-spacing': ['error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never',
      }],
      'vue/html-closing-bracket-newline': ['error', {
        'singleline': 'never',
        multiline: 'always',
      }],
    },
  }],
};
