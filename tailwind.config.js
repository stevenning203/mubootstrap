/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    fontFamily: {
        'sans': ['Monserrat', "Arial"],
          'lato': ['Lato', "Arial"],
          'noto': ["Noto Sans", "Arial"],
          'fancy': ['Unbounded', "Noto Sans"],
          'news' : ["Times New Roman"]
    },
    extend: {},
  },
  plugins: [],
}
