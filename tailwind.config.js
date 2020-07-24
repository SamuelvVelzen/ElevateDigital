/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	theme: {
		fontFamily: {
			default:
				'"Montserrat","Source Sans Pro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
		},
		maxWidth: {
			"1/2": "50%",
			"3/4": "75%",
		},
		extend: {
			width: {
				"3/10": "30%",
			},
			height: {
				"screen-2": "50vh",
			},
			opacity: {
				"95": "95%",
			},
			padding: {
				"px-10": "10px",
				navbar: "60px",
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
			inset: {
				"1/8": "12.5%",
			},
		},
	},
	variants: {
		margin: ["responsive", "last"],
		borderWidth: ["responsive", "hover"],
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
