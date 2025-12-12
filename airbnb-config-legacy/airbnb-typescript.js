import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

// Vendored output of eslint-config-airbnb-typescript@18.0.0 processed via FlatCompat.

const airbnbTypescriptConfig = [
    {
        "settings": {
            "import/parsers": {
                "@typescript-eslint/parser": [
                    ".ts",
                    ".tsx",
                    ".d.ts"
                ]
            },
            "import/resolver": {
                "node": {
                    "extensions": [
                        ".mjs",
                        ".js",
                        ".json",
                        ".ts",
                        ".d.ts"
                    ]
                }
            },
            "import/extensions": [
                ".js",
                ".mjs",
                ".jsx",
                ".ts",
                ".tsx",
                ".d.ts"
            ],
            "import/external-module-folders": [
                "node_modules",
                "node_modules/@types"
            ]
        },
        "rules": {
            "brace-style": "off",
            "@stylistic/brace-style": [
                "error",
                "1tbs",
                {
                    "allowSingleLine": true
                }
            ],
            "camelcase": "off",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    "selector": "variable",
                    "format": [
                        "camelCase",
                        "PascalCase",
                        "UPPER_CASE"
                    ]
                },
                {
                    "selector": "function",
                    "format": [
                        "camelCase",
                        "PascalCase"
                    ]
                },
                {
                    "selector": "typeLike",
                    "format": [
                        "PascalCase"
                    ]
                }
            ],
            "comma-dangle": "off",
            "@stylistic/comma-dangle": [
                "error",
                {
                    "arrays": "always-multiline",
                    "objects": "always-multiline",
                    "imports": "always-multiline",
                    "exports": "always-multiline",
                    "functions": "always-multiline",
                    "enums": "always-multiline",
                    "generics": "always-multiline",
                    "tuples": "always-multiline"
                }
            ],
            "comma-spacing": "off",
            "@stylistic/comma-spacing": [
                "error",
                {
                    "before": false,
                    "after": true
                }
            ],
            "default-param-last": "off",
            "@typescript-eslint/default-param-last": "error",
            "dot-notation": "off",
            "@typescript-eslint/dot-notation": [
                "error",
                {
                    "allowKeywords": true
                }
            ],
            "func-call-spacing": "off",
            "indent": "off",
            "@stylistic/indent": [
                "error",
                2,
                {
                    "SwitchCase": 1,
                    "VariableDeclarator": 1,
                    "outerIIFEBody": 1,
                    "FunctionDeclaration": {
                        "parameters": 1,
                        "body": 1
                    },
                    "FunctionExpression": {
                        "parameters": 1,
                        "body": 1
                    },
                    "CallExpression": {
                        "arguments": 1
                    },
                    "ArrayExpression": 1,
                    "ObjectExpression": 1,
                    "ImportDeclaration": 1,
                    "flatTernaryExpressions": false,
                    "ignoredNodes": [
                        "JSXElement",
                        "JSXElement > *",
                        "JSXAttribute",
                        "JSXIdentifier",
                        "JSXNamespacedName",
                        "JSXMemberExpression",
                        "JSXSpreadAttribute",
                        "JSXExpressionContainer",
                        "JSXOpeningElement",
                        "JSXClosingElement",
                        "JSXFragment",
                        "JSXOpeningFragment",
                        "JSXClosingFragment",
                        "JSXText",
                        "JSXEmptyExpression",
                        "JSXSpreadChild"
                    ],
                    "ignoreComments": false
                }
            ],
            "keyword-spacing": "off",
            "@stylistic/keyword-spacing": [
                "error",
                {
                    "before": true,
                    "after": true,
                    "overrides": {
                        "return": {
                            "after": true
                        },
                        "throw": {
                            "after": true
                        },
                        "case": {
                            "after": true
                        }
                    }
                }
            ],
            "lines-between-class-members": "off",
            "@stylistic/lines-between-class-members": [
                "error",
                "always",
                {
                    "exceptAfterSingleLine": false
                }
            ],
            "no-array-constructor": "off",
            "@typescript-eslint/no-array-constructor": "error",
            "no-dupe-class-members": "off",
            "@typescript-eslint/no-dupe-class-members": "error",
            "no-empty-function": "off",
            "@typescript-eslint/no-empty-function": [
                "error",
                {
                    "allow": [
                        "arrowFunctions",
                        "functions",
                        "methods"
                    ]
                }
            ],
            "no-extra-parens": "off",
            "@stylistic/no-extra-parens": [
                "off",
                "all",
                {
                    "conditionalAssign": true,
                    "nestedBinaryExpressions": false,
                    "returnAssign": false,
                    "ignoreJSX": "all",
                    "enforceForArrowConditionals": false
                }
            ],
            "no-extra-semi": "off",
            "@stylistic/no-extra-semi": "error",
            "no-implied-eval": "off",
            "no-new-func": "off",
            "@typescript-eslint/no-implied-eval": "error",
            "no-loss-of-precision": "off",
            "@typescript-eslint/no-loss-of-precision": "error",
            "no-loop-func": "off",
            "@typescript-eslint/no-loop-func": "error",
            "no-magic-numbers": "off",
            "@typescript-eslint/no-magic-numbers": [
                "off",
                {
                    "ignore": [],
                    "ignoreArrayIndexes": true,
                    "enforceConst": true,
                    "detectObjects": false
                }
            ],
            "no-redeclare": "off",
            "@typescript-eslint/no-redeclare": "error",
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": "error",
            "space-before-blocks": "off",
            "@stylistic/space-before-blocks": "error",
            "no-throw-literal": "off",
            "no-unused-expressions": "off",
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    "allowShortCircuit": false,
                    "allowTernary": false,
                    "allowTaggedTemplates": false
                }
            ],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "vars": "all",
                    "args": "after-used",
                    "ignoreRestSiblings": true
                }
            ],
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": [
                "error",
                {
                    "functions": true,
                    "classes": true,
                    "variables": true
                }
            ],
            "no-useless-constructor": "off",
            "@typescript-eslint/no-useless-constructor": "error",
            "quotes": "off",
            "@stylistic/quotes": [
                "error",
                "single",
                {
                    "avoidEscape": true
                }
            ],
            "semi": "off",
            "@stylistic/semi": [
                "error",
                "always"
            ],
            "space-before-function-paren": "off",
            "@stylistic/space-before-function-paren": [
                "error",
                {
                    "anonymous": "always",
                    "named": "never",
                    "asyncArrow": "always"
                }
            ],
            "require-await": "off",
            "@typescript-eslint/require-await": "off",
            "no-return-await": "off",
            "@typescript-eslint/return-await": [
                "error",
                "in-try-catch"
            ],
            "space-infix-ops": "off",
            "@stylistic/space-infix-ops": "error",
            "object-curly-spacing": "off",
            "@stylistic/object-curly-spacing": [
                "error",
                "always"
            ],
            "import/extensions": [
                "error",
                "ignorePackages",
                {
                    "js": "never",
                    "mjs": "never",
                    "jsx": "never",
                    "ts": "never",
                    "tsx": "never"
                }
            ],
            "import/no-extraneous-dependencies": [
                "error",
                {
                    "devDependencies": [
                        "test/**",
                        "tests/**",
                        "spec/**",
                        "**/__tests__/**",
                        "**/__mocks__/**",
                        "test.{js,jsx}",
                        "test.{ts,tsx}",
                        "test-*.{js,jsx}",
                        "test-*.{ts,tsx}",
                        "**/*{.,_}{test,spec}.{js,jsx}",
                        "**/*{.,_}{test,spec}.{ts,tsx}",
                        "**/jest.config.js",
                        "**/jest.config.ts",
                        "**/jest.setup.js",
                        "**/jest.setup.ts",
                        "**/vue.config.js",
                        "**/vue.config.ts",
                        "**/webpack.config.js",
                        "**/webpack.config.ts",
                        "**/webpack.config.*.js",
                        "**/webpack.config.*.ts",
                        "**/rollup.config.js",
                        "**/rollup.config.ts",
                        "**/rollup.config.*.js",
                        "**/rollup.config.*.ts",
                        "**/gulpfile.js",
                        "**/gulpfile.ts",
                        "**/gulpfile.*.js",
                        "**/gulpfile.*.ts",
                        "**/Gruntfile{,.js}",
                        "**/Gruntfile{,.ts}",
                        "**/protractor.conf.js",
                        "**/protractor.conf.ts",
                        "**/protractor.conf.*.js",
                        "**/protractor.conf.*.ts",
                        "**/karma.conf.js",
                        "**/karma.conf.ts",
                        "**/.eslintrc.js",
                        "**/.eslintrc.ts"
                    ],
                    "optionalDependencies": false
                }
            ]
        },
        "languageOptions": {
            "parser": typescriptEslintParser
        },
        "plugins": {
            "@typescript-eslint": typescriptEslintPlugin
        }
    },
    {
        "rules": {
            "constructor-super": "off",
            "getter-return": "off",
            "no-const-assign": "off",
            "no-dupe-args": "off",
            "no-dupe-class-members": "off",
            "no-dupe-keys": "off",
            "no-func-assign": "off",
            "no-import-assign": "off",
            "no-new-symbol": "off",
            "no-obj-calls": "off",
            "no-redeclare": "off",
            "no-setter-return": "off",
            "no-this-before-super": "off",
            "no-undef": "off",
            "no-unreachable": "off",
            "no-unsafe-negation": "off",
            "valid-typeof": "off",
            "import/named": "off",
            "import/no-named-as-default-member": "off",
            "import/no-unresolved": "off"
        },
        "files": [
            "**/*.ts",
            "**/*.tsx"
        ]
    }
];

export default airbnbTypescriptConfig;
