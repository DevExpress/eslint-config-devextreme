'use strict';

module.exports = {
    meta: {
        docs: {
          description: 'Prevent JSX spreading',
          category: 'Restrictions of declaration',
        },

        messages: {
          noSpreading: 'Do not use `spread` and `rest` operators in the JSX markup. Extract this functionality to the component\'s getter.'
        },

        schema: []
      },

      create(context) {
        const isJSX = (node) => {
            const type = node.name ? node.name.type : undefined;

            if (type === 'JSXIdentifier' || type === 'JSXMemberExpression')
                return true;

            return node.parent ? isJSX(node.parent) : false;
        };

        const checkSpreadInJSX = (node) => {
            isJSX(node) && context.report({ node, messageId: 'noSpreading' });
        };

        return {
            SpreadElement: checkSpreadInJSX,
            RestElement: checkSpreadInJSX,
            ExperimentalSpreadProperty: checkSpreadInJSX,
            ExperimentalRestProperty: checkSpreadInJSX,
        };
    },
};
