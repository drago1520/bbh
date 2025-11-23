import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import depend from "eslint-plugin-depend";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  reactHooks.configs.flat.recommended,
  {
    plugins: {
      react,
    },
    rules: {
      "react/no-unescaped-entities": "warn",
    },
  },
  {
    plugins: {
      depend,
    },
    extends: ["depend/flat/recommended"],
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
//TODO useEffect, JS (for switch), https://github.com/dustinspecker/awesome-eslint?tab=readme-ov-file, compiler, tailwindcss
