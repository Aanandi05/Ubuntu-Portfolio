module.exports = {
  content: [
    "./templates/**/*.{html,js,jsx}",
    "./static/**/*.{html,js,jsx,css}",
    "./**/*.{html,js,jsx,py}",
    "!./node_modules",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    { pattern: /(bg|backdrop|opacity|from|to|via)-.*/ },
  ],
  plugins: [],
}
