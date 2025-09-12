import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
    ...compat.extends("eslint-config-airbnb-base"),
    {
        rules: {
            'import/prefer-default-export': 'off',
            'import/named': 'error',
            'import/default': 'error',
            'import/no-duplicates': 'error'
        }
    }
];
