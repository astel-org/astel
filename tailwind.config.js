module.exports = {
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  content: [`src/**/*.{vue,js}`],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
}
