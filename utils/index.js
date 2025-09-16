import { rules as stylisticRules } from '@eslint-stylistic/metadata';

const REMOVED_RULES = [
    'react/jsx-filename-extension',
    '@typescript-eslint/no-throw-literal',
    '@typescript-eslint/ban-types',
    '@typescript-eslint/brace-style',
    '@typescript-eslint/comma-dangle',
    '@typescript-eslint/comma-spacing',
    '@typescript-eslint/func-call-spacing',
    '@typescript-eslint/indent',
    '@typescript-eslint/keyword-spacing',
    '@typescript-eslint/lines-between-class-members',
    '@typescript-eslint/no-extra-semi',
    '@typescript-eslint/space-before-blocks',
    '@typescript-eslint/quotes',
    '@typescript-eslint/semi',
    '@typescript-eslint/space-before-function-paren',
    '@typescript-eslint/space-infix-ops',
    '@typescript-eslint/object-curly-spacing',
    '@typescript-eslint/dot-notation',
    '@typescript-eslint/no-implied-eval',
    '@typescript-eslint/require-await',
    '@typescript-eslint/return-await',
];

const changeRules = (rules) => ({
    ...Object.fromEntries(
        Object.entries(rules)
            .filter(([key]) => !REMOVED_RULES.includes(key))
            .map(([key, value]) => {
                const tsRulePrefix = '@typescript-eslint/';
                if (key.startsWith(tsRulePrefix)) {
                    const normalizedKey = key.replace(tsRulePrefix, '');
                    const rule = stylisticRules.find((r) => normalizedKey === r.name);
                    const newKey = rule ? `@stylistic/${rule.name}` : key;
                    return [newKey, value];
                }
                return [key, value];
            })
    ),
});

export const fixLegacyConfigs = (configs) => {
    return configs.flatMap((config) => {
        let newConfig = config;

        // move globals to languageOptions.globals
        if (config && config.globals) {
            const { globals, ...rest } = config;
            newConfig = {
                ...rest,
                languageOptions: {
                    globals: { ...globals },
                },
            };
        }

        // change rules
        if (config && config.rules) {
            newConfig.rules = changeRules(config.rules);
        }

        // remove extends
        if (config && config.extends) {
            delete newConfig.extends;
        }

        return newConfig;
    });
};