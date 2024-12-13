/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '0px',
      screens: {
        'lg': '1366px',
      },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        Lato: ["Lato", "sans-serif"]
      },
      colors: {
        deafult: '#212529',
        customMix: 'rgba(33, 37, 41, 0.05)',
        customGrayMix: 'rgba(33, 37, 41, 0.75)',
        darkTransparent: 'rgba(33, 37, 41, 0.06)',
        greenTransparent: 'rgba(52, 191, 73, 0.08)',
        heading: '#color-mix(in srgb, var(--heading-color), transparent 0%);',
        primary: '#34bf49',
        surface: '#F3F4F4',
        contrast: '#ffffff',
      },
    },
  },
  plugins: [],
}

