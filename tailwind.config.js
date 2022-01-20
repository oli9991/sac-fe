module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          // custom theme
          primary: '#185af9',
          'primary-focus': '#d43616',
          'primary-content': '#ffffff',
          // other colors
        },
      },
      'dark', // and some pre-defined theme
      'forest',
      'synthwave',
    ],
  },
};
