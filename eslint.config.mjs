import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: "./tsconfig.json"
			}
		}
	},
	...compat.config({
		extends: ["next/core-web-vitals"]
	}),
	{
		plugins: {
			"simple-import-sort": simpleImportSort
		},
		rules: {
			"simple-import-sort/imports": [
				"error",
				{
					groups: [
						["^react", "^next", "^@?\\w"],
						["^@/", "^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
						["^\\u0000"]
					]
				}
			],
			"simple-import-sort/exports": "error"
		}
	},
	{
		rules: {
			...prettier.rules,
			"import/no-anonymous-default-export": "off"
		}
	},
	{
		ignores: ["**/node_modules/**", "**/.next/**", "**/build/**", "**/out/**"]
	}
];
