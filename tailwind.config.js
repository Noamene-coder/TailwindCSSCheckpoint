module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [ plugin(function({ addUtilities }) { const newUtilities = { '.text-shadow': { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', }, '.text-shadow-md': { textShadow: '3px 3px 6px rgba(0, 0, 0, 0.15)', }, '.text-shadow-lg': { textShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)', }, } addUtilities(newUtilities, ['responsive', 'hover']) }) ], }
