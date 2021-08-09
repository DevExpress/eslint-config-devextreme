'use strict';

module.exports = {
    meta: {
        docs: {
          description: 'Prevent JSX spreading',
          category: 'Restrictions of declaration',
        },

        messages: {
          noSpreading: 'Don\'t use spread and rest in the JSX markup. Extract this functionality to the component\'s getter.'
        },

        schema: []
      },

      create(context) {
        const isJSX = (node) => {
            const type = node.name?.type;

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
