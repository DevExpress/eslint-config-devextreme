module.exports = {
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript'
    ],
    rules: {
        'import/prefer-default-export': 'off',
        "import/named": 2,
        "import/default": 2,
        "import/no-duplicates": 2
    }
};
