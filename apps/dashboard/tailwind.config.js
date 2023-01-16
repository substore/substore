/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#9d9a9a",
          "200": "#222037",
          "300": "rgba(255, 255, 255, 0.07)",
          "400": "rgba(255, 255, 255, 0.6)",
        },
        white: "#fff",
        green: "#21ec8b",
      },
      fontFamily: { inter: "Inter" },
      borderRadius: { base: "10px" },
    },
    fontSize: { sm: "13px", base: "14px" },
  },
  corePlugins: { preflight: false },
};
