const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				serif: ["Della Respira", ...defaultTheme.fontFamily.serif],
				sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
			},
			zIndex: {
				"-10": "-10",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
