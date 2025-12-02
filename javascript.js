import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import path from 'path';
import { fixLegacyConfigs, isPackageInstalled } from "./utils/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

const airbnbBaseConfigs = isPackageInstalled('eslint-config-airbnb-base')
    ? fixLegacyConfigs(compat.extends("eslint-config-airbnb-base"))
    : [];

export default [
    ...airbnbBaseConfigs,
    {
        rules: {
            'import/prefer-default-export': 'off',
            'import/named': 'error',
            'import/default': 'error',
            'import/no-duplicates': 'error'
        }
    }
];
