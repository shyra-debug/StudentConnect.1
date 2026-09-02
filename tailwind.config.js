/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#d9e2f0',
          200: '#b3c5e0',
          300: '#7e9ac9',
          400: '#4a6fa9',
          500: '#2e5395',
          600: '#1e3a7a',
          700: '#162d61',
          800: '#0f1f48',
          900: '#0a1535',
          950: '#050d24',
        },
        sky: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36abf8',
          500: '#0c91ea',
          600: '#0072c7',
          700: '#005ba1',
          800: '#064d85',
          900: '#0b416e',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'card': '0 2px 8px rgba(10, 21, 53, 0.06), 0 4px 24px rgba(10, 21, 53, 0.04)',
        'card-hover': '0 8px 24px rgba(10, 21, 53, 0.12), 0 16px 48px rgba(10, 21, 53, 0.08)',
        'nav': '0 1px 0 rgba(10, 21, 53, 0.06), 0 4px 24px rgba(10, 21, 53, 0.06)',
      },
    },
  },
  plugins: [],
};
