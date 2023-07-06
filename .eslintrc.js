module.exports = {
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "unused-imports",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "max-len": ["error", { code: 140 }],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-duplicate-imports": "error",
        "no-shadow": "off",
        "no-undef": "off",
        "unused-imports/no-unused-imports": "error",
        "no-console": ["error", { allow: ["warn", "error"] }],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
      },
    },
  ],
};
