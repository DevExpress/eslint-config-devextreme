import { fixupRule } from '@eslint/compat';

// eslint-plugin-import, eslint-plugin-react and eslint-plugin-spellcheck call context and SourceCode methods that ESLint 10 removed.
// The rules are replaced inside the plugin object, so a project that registers the same plugin gets them too.
export default function fixupPluginInPlace(plugin) {
    Object.entries(plugin.rules).forEach(([name, rule]) => {
        plugin.rules[name] = fixupRule(rule);
    });
}
