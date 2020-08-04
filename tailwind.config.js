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
				"x-2.5%": "0 2.5% ",
				"x-5%": "0 5% ",
				"x-10%": "0 10% ",
				"x-15%": "0 15% ",
				"x-20%": "0 20% ",
				navbar: "60px",
			},
			colors: {
				primary: {
					default: "#339A68",
				},
				secondary: {
					default: "#29724F",
				},
				light: {
					default: "#FBDAB4",
				},
				dark: {
					default: "#3C3737",
				},
			},
			boxShadow: {
				primary: "0px 5px 5px rgba(51, 154, 104, 0.25)",
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
