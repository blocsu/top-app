import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
	{rules: {
		"semi": "off",
		"@typescript-eslint/semi": [
			"warn"
		],
		"@typescript-eslint/no-empty-interface": [
			"error",
			{
				"allowSingleExtends": true
			}
		]
	}},
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:react-hooks/recommended"),
];

export default eslintConfig;
