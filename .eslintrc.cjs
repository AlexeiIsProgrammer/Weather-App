module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/jsx-props-no-spreading': 0,
        'import/no-extraneous-dependencies': 0,
        'no-param-reassign': 0,
        'import/prefer-default-export': 0,
        'react-hooks/exhaustive-deps': 0,
        "simple-import-sort/sort": "off",
        'import/order': ["error", { "newlines-between": "always" }],
        'react/jsx-no-bind': 0,
        'no-alert': 0,
        'import/no-named-as-default': 0
    },
};
