module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:cypress/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "prefer-rest-params": "off",
  },
};
