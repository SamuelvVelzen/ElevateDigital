module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"prettier",
		"prettier/vue",
		"plugin:prettier/recommended",
		"plugin:nuxt/recommended",
	],
	plugins: ["prettier"],
	// add your custom rules here
	rules: {
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
				],
			},
		],
		"declaration-block-trailing-semicolon": null,
		"no-descending-specificity": null,
	},
};
