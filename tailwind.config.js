module.exports = {
  darkMode: 'class',
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
}
