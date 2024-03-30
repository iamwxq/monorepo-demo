import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default antfu(
  {
    stylistic: {
      quotes: "double",
      semi: true,
    },
    react: true,
    rules: {
      "react/prop-types": "off",
      "react-refresh/only-export-components": "off",
      "style/jsx-one-expression-per-line": "off",
      "style/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          reservedFirst: true,
          shorthandFirst: true,
          multiline: "last",
        },
      ],
    },
  },
  // TailwindCSS
  ...compat.config({
    extends: [
      "plugin:tailwindcss/recommended",
    ],
    rules: {
      "tailwindcss/migration-from-tailwind-2": "off",
    },
  }),
);
