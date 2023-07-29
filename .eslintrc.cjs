module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "stylelint-high-performance-animation"],
    rules: {
        "plugin/no-low-performance-animation-properties": true,
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
};
