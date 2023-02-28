module.exports = {
    env: {
        jest: true,
        node: true
    },
    plugins: [
        'jest',
        'jest-formatting'
    ],
    extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended'
    ],
    rules: {
        // Allow devDependencies to be imported when in development mode
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    }
};
