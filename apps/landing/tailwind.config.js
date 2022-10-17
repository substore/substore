/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  poppins: "Poppins",
		  "red-hat-display": "'Red Hat Display'",
		},
	  },
	  colors: {
		white: "#fff",
		gray: { "100": "#f1f1f1", "200": "#999", "300":"#222037" },
		teal: "#2b9baa",
		green: "#21ec8b",
		black: "#000",
	  },
	  fontSize: {},
	},
	corePlugins: { preflight: false },
  };
  