module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      rules: {
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],

        "@typescript-eslint/consistent-type-assertions": "off",
      },
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-implicit-coercion": "off",
    "@typescript-eslint/naming-convention": "off",
  },
};
