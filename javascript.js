import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import path from 'path';
import { fixLegacyConfigs } from "./utils/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });
const require = createRequire(import.meta.url);
const airbnbBaseConfig = require("./third_party/eslint-config-airbnb-base");

export default [
    ...fixLegacyConfigs(compat.config(airbnbBaseConfig)),
    {
        rules: {
            'import/prefer-default-export': 'off',
            'import/named': 'error',
            'import/default': 'error',
            'import/no-duplicates': 'error'
        }
    }
];
