/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          100: '#FDFDFD',
          200: '#F5F4F0',
          300: '#EAE8E2',
          400: '#E0DED7',
          500: '#BBB7AC',
          600: '#928E84',
          700: '#807E76',
          800: '#464139',
          900: '#2B2823',
        },
        primary: {
          500: '#FF9780',
          800: '#FF5732',
        },
      },
      boxShadow: {
        default: '0px 6px 16px 0px rgba(43, 40, 35, 0.08)',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.flex-center': {
          '@apply flex items-center justify-center': {},
        },
        '.flex-row-center': {
          '@apply flex items-center': {},
        },
        '.flex-col-center': {
          '@apply flex flex-col items-center': {},
        },
      });
    },
  ],
};
