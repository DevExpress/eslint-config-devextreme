import { rules as stylisticRules } from '@eslint-stylistic/metadata';

const REMOVED_RULES = [
    '@typescript-eslint/func-call-spacing',
    '@typescript-eslint/no-throw-literal',
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
    return configs.map((config) => ({
        ...config,
        rules: changeRules(config.rules || {}),
    }));
};