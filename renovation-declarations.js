const rulesDirPlugin = require('eslint-plugin-rulesdir');
const path = require('path');

rulesDirPlugin.RULES_DIR = path.join(__dirname, './rules');

module.exports = {
    plugins: [
        'rulesdir'
    ],

    rules: {
        // Allow usage of 'non-null-assertion' for the declaration's ref objects
        'rulesdir/no-non-null-assertion': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',

        // Disallow usage of spread/rest operators in the JSX markup.
        // Angular does not support these operators in templates
        'rulesdir/no-jsx-spreading': 'error',

        // Allow devDependencies to be imported when in development mode
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        // Allow two classes (component class and props class) in one file
        'max-classes-per-file': ['error', 2],

        // Disable React dependency validation. Declarations do not require this dependency,
        // since they are not proper React components
        'react/react-in-jsx-scope': ['off'],

        // Allow function calls in the ternary operator
        '@typescript-eslint/no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }]
    }
};
