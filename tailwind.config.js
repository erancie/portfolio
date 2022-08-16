/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: { 
      //imported font not working
      fontFamily: {
        'raleway': ['"Raleway"', 'sans-serif'],
        'sans': ['ui-sans-serif', 'system-ui'],
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      }
    },
    extend: {},
  },
  plugins: [],
}
