import airbnbBaseConfig from "./airbnb-config-legacy/airbnb-base.js";

export default [
    ...airbnbBaseConfig,
    {
        rules: {
            'import/prefer-default-export': 'off',
            'import/named': 'error',
            'import/default': 'error',
            'import/no-duplicates': 'error'
        }
    }
];
