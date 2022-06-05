module.exports = {
  mode: 'jit',
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
