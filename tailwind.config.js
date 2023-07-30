/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      'blue-gray': {
        10: '#FBFBFD',
        25: '#F4F4F8',
        50: '#E9ECF3',
        75: '#D7E2EB',
        100: '#CDD7E0',
        200: '#B2C0CC',
        300: '#98A8B9',
        400: '#7890A0',
        500: '#5F7F90',
        600: '#4F6B81',
        700: '#44576C',
        800: '#37485D',
        880: '#2D4053',
        900: '#263747',
        920: '#202B3D',
        940: '#172334',
        990: '#142029',
        999: '#0C151C',
      },
      black: '#000000',
      info: '#673AB7',
      warning: '#FF9800',
      success: '#4CAF50',
      danger: '#F44336',
      primary: '#0078FF',
      template: {
        red: '#FFCAC8',
        pink: '#FBD0F5',
        purple: '#B8B5FF',
        blue: '#94DAFF',
        sky: '#C7F5FE',
        green: '#A3F7BF',
        lime: '#DEFF8B',
        yellow: '#F3F798',
      },
    },
    fontFamily: {
      dgm: ['NeoDunggeunmo', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'card-1': '10px 10px 0 0 #142029',
        'card-2': '4px 4px 0 0 #142029',
        button: '2px 2px 0 0 #202B3D',
      },
    },
  },
  plugins: [],
};
