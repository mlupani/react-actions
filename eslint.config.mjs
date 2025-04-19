import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["src/**/*.{js,mjs,cjs,jsx}"], plugins: { js, pluginReact }, extends: ["js/recommended"], settings: { react: { version: 'detect' } } },
  { files: ["src/**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser }, settings: { react: { version: 'detect' } } },
  pluginReact.configs.flat.recommended,
]);