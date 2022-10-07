/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				heading: ["Red Hat Display", "sans-serif"]
			},
			colors: {
				bgblue: "#195BBF",
				line: "#424242"
			}
		}
	},
	plugins: []
};
