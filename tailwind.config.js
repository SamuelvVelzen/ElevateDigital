/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	theme: {
		height: {
			"screen-2": "50vh",
		},
		extend: {
			width: {
				"3/10": "30%",
			},
			colors: {
				primary: {
					lighter: "#FAF4D0",
					default: "#F5E4C3",
				},
				secondary: {
					default: "#FAF4D0",
					dark: "#C14545",
				},
				dark: "#0E2431",
			},
		},
	},
	variants: {
		margin: ["responsive", "last"],
	},
	plugins: [],
	purge: {
		// Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
		enabled: process.env.NODE_ENV === "production",
		content: [
			"components/**/*.vue",
			"layouts/**/*.vue",
			"pages/**/*.vue",
			"plugins/**/*.js",
			"nuxt.config.js",
		],
	},
};
