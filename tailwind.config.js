/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',     // Personalizado, pode ser utilizado para telas extras pequenas
      'sm': '640px',     // Breakpoint padrão para telas pequenas
      'md': '768px',     // Breakpoint padrão para telas médias
      'lg': '1024px',    // Breakpoint padrão para telas grandes
      'xl': '1400px',    // Breakpoint para telas extra grandes
      '2xl': '1536px',   // Breakpoint para telas maiores
    },
    extend: {},
  },
  plugins: [],
}
