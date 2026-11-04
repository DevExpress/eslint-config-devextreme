/* eslint-env node */
/* eslint-disable quote-props */

import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import tsEslint from "@typescript-eslint/eslint-plugin";
import stylistic from '@stylistic/eslint-plugin';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    plugins: {
      '@typescript-eslint': tsEslint,
      vue: pluginVue,
      'no-only-tests': noOnlyTests,
      '@stylistic': stylistic
    },
    rules: {
    'class-methods-use-this': 0, // TODO warn (was error)
    'func-names': 0, // TODO warn (was warn) >500
    'import/extensions': 0,
    'no-use-before-define': 0,
    'prefer-destructuring': 0,
    'no-only-tests/no-only-tests': 'error',
    'eqeqeq': 0,
    'no-plusplus': 0,
    '@stylistic/max-len': 0,
    'max-classes-per-file': 0,
    'consistent-return': 0,
    'import/no-webpack-loader-syntax': 0,
    'no-restricted-properties': 0,
    'no-restricted-globals': 0,
    'no-undef': 0,
    '@stylistic/no-mixed-operators': 0,
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
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-useless-constructor': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0, // was warn
    '@stylistic/block-spacing': 'error',
    '@stylistic/comma-spacing': 'error',
    '@stylistic/computed-property-spacing': 'error',
    '@stylistic/comma-style': ['error', 'last'],
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
    'no-irregular-whitespace': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    'no-new-func': 'error',
    'no-eval': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-extend-native': 'error',
    'no-alert': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/semi-spacing': 'error',
    '@stylistic/semi': 'error',
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': ['error', 'never'],
    '@stylistic/space-in-parens': 'error',
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': 'error',
    '@stylistic/eol-last': ['error', 'always'],
    curly: ['error', 'multi-line', 'consistent'],
    '@stylistic/indent': [
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
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
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
  }
  }
];
