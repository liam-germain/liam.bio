/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      //   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // },
      // colors: {
      //   ...colors,
      //   homepageIcon: "#225da5",
      //   accent: colors.fuchsia["400"]
      // },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
