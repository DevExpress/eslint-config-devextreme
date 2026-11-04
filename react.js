/* eslint-env node */
/* eslint-disable quote-props */

import tsEslint from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactPerf from 'eslint-plugin-react-perf';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import stylistic from '@stylistic/eslint-plugin';
import airbnbBaseConfig from "./airbnb-config-legacy/airbnb-base.js";
import airbnbTypescriptConfig from "./airbnb-config-legacy/airbnb-typescript.js";
import fixupPluginInPlace from "./fixup-plugin.js";

fixupPluginInPlace(reactPlugin);

export default [
    ...airbnbBaseConfig,
    {
        "settings": {
            "import/resolver": {
                "node": {
                    "extensions": [
                        ".mjs",
                        ".js",
                        ".jsx",
                        ".json",
                        ".ts",
                        ".tsx",
                        ".d.ts"
                    ]
                }
            }
        }
    },
    jsxA11y.flatConfigs.recommended,
    reactPlugin.configs.flat.recommended,
    {
        plugins: {
            react: reactPlugin,
            'react-perf': reactPerf,
            'no-only-tests': noOnlyTests,
            '@stylistic': stylistic,
        },
        rules: {
            'class-methods-use-this': 0, // TODO warn (was error)
            'func-names': 0, // TODO warn (was warn) >500
            'import/extensions': 0,
            'no-use-before-define': 0,
            'prefer-destructuring': 0,
            'no-param-reassign': 0,
            'no-only-tests/no-only-tests': 'error',
            'eqeqeq': 0,
            'no-plusplus': 0,
            '@stylistic/max-len': 0,
            'max-classes-per-file': 0,
            'consistent-return': 0,
            'import/no-webpack-loader-syntax': 0,
            'no-restricted-properties': 0,
            'no-restricted-globals': 0,
            '@stylistic/no-mixed-operators': 0,
            'no-useless-concat': 0,
            'no-self-assign': 0,
            'default-case': 0,
            'no-var': 0,
            'no-return-assign': 0,
            'vars-on-top': 0,
            'no-sequences': 0,
            'new-cap': 0,
            'no-multi-assign': 0,
            'no-restricted-syntax': 0,
            'prefer-rest-params': 0,
            'radix': 0,
            'no-underscore-dangle': 0,
            'operator-assignment': 0,
            'prefer-const': 0,
            '@stylistic/block-spacing': 'error',
            '@stylistic/comma-spacing': 'error',
            '@stylistic/computed-property-spacing': 'error',
            '@stylistic/comma-style': ['error', 'last'],
            '@stylistic/no-multiple-empty-lines': ['error', {max: 1}],
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
            '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
            'prefer-template': 'error',
            'func-style': ['error', 'declaration'],
            'react/jsx-curly-brace-presence': [
                'error',
                {
                    props: 'never',
                    children: 'never',
                },
            ],
            'react/jsx-fragments': ['error', 'element'],
            'react/jsx-no-bind': [
                'error',
                {
                    allowBind: true, // TODO false (was false)
                    allowArrowFunctions: true, // TODO false (was false)
                    ignoreRefs: true,
                },
            ],
            '@stylistic/jsx-tag-spacing': [
                'error',
                {
                    beforeClosing: 'never',
                },
            ],
            'react/jsx-no-undef': [
                'error',
                {
                    allowGlobals: true,
                },
            ],
            'react/prop-types': 'off',
            'react/jsx-no-target-blank': [
                'error',
                {
                    enforceDynamicLinks: 'never',
                },
            ],
            'react-perf/jsx-no-new-object-as-prop': [
                'error',
                {
                    nativeAllowList: 'all',
                },
            ],
            'react-perf/jsx-no-new-array-as-prop': [
                'error',
                {
                    nativeAllowList: 'all',
                },
            ],
        }
    },
    ...airbnbTypescriptConfig.map(config => ({
        ...config,
        files: ['**/*.ts?(x)'],
    })),
    {
        plugins: {
            '@typescript-eslint': tsEslint,
        },
        files: ['**/*.d.ts'],
        rules: {
            '@typescript-eslint/naming-convention': 0,
            '@typescript-eslint/no-throw-literal': 0,
            '@typescript-eslint/no-use-before-define': 0,
            '@typescript-eslint/no-shadow': 0,
            '@typescript-eslint/no-loop-func': 0,
            '@typescript-eslint/ban-types': 0,
            '@typescript-eslint/no-this-alias': 0,
            '@typescript-eslint/no-empty-function': 0,
            '@typescript-eslint/no-explicit-any': 0,
            '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
            '@typescript-eslint/no-unused-expressions': 0,
            '@typescript-eslint/no-useless-constructor': 0,
            '@typescript-eslint/explicit-module-boundary-types': 0, // was warn
        }
    }
];
