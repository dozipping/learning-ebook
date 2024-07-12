/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui','sans-serif'],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald','NotoSansLaolooped'],
      'body': ['"Open Sans"', 'Noto Sans Lao'],
    }



  },
  plugins: [
    require('daisyui'),
  ],
}

