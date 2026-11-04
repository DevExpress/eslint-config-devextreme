// Lints the fixtures with every config and compares the reports with test/configs.test.js.snapshot.
// After an intended change, run `pnpm test:update` and review the snapshot diff.
import path from 'node:path';
import { test } from 'node:test';
import { ESLint } from 'eslint';
import stylelint from 'stylelint';

const fixtures = path.join(import.meta.dirname, 'fixtures');

const eslintFixtures = {
    javascript: ['plain.js', 'import-order.js', 'modern.js'],
    typescript: ['plain.ts', 'import-order.ts', 'modern.js'],
    react: ['app.jsx', 'app.tsx', 'modern.js'],
    vue: ['app.vue'],
    angular: ['widget.js', 'plain.ts'],
    jquery: ['widget.js'],
    jest: ['sum.test.js'],
    qunit: ['qunit.test.js'],
    testcafe: ['testcafe.test.js'],
    'spell-check': ['typo.js'],
    // Projects put the spell check before a framework config
    'spell-check + angular': ['typo.js'],
    'spell-check + react': ['typo.js'],
    'spell-check + vue': ['typo.js'],
};

// What projects add next to the configs, as the README shows
const projectConfig = [
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: fixtures,
                // With CI=true, typescript-eslint reuses one TypeScript program across the ESLint instances of this process
                disallowAutomaticSingleRunInference: true,
            },
        },
    },
    {
        settings: {
            jest: { version: 29 },
            react: { version: '18.2' },
        },
    },
];

async function lintFile(eslint, file) {
    try {
        const [result] = await eslint.lintFiles([file]);

        return result.messages.map(({ line, column, severity, ruleId, message }) => (
            `${file}:${line}:${column} ${severity === 2 ? 'error' : 'warning'} ${ruleId ?? 'fatal'}: ${message.replaceAll(fixtures, '.')}`
        ));
    } catch (error) {
        const rule = error.message.match(/Rule: "([^"]+)"/)?.[1];

        return [`${file} crashed${rule ? ` in ${rule}` : ''}: ${error.message.split('\n')[0]}`];
    }
}

for (const [entry, files] of Object.entries(eslintFixtures)) {
    test(entry, async (t) => {
        const configs = await Promise.all(entry.split(' + ').map(async (name) => (await import(`../${name}.js`)).default));
        const eslint = new ESLint({
            cwd: fixtures,
            overrideConfigFile: true,
            overrideConfig: [
                { files: ['**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue'] },
                ...configs.flat(),
                ...projectConfig,
            ],
        });
        const reports = [];

        for (const file of files) {
            reports.push(...await lintFile(eslint, file));
        }

        t.assert.snapshot(reports);
    });
}

test('stylelintrc', async (t) => {
    const { default: config } = await import('../stylelintrc.js');
    const { results: [result] } = await stylelint.lint({ files: 'styles.css', config, cwd: fixtures });

    t.assert.snapshot(result.warnings.map(({ line, column, severity, rule, text }) => (
        `styles.css:${line}:${column} ${severity} ${rule}: ${text}`
    )));
});
