/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'wide': '0 0 12px 10px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'slide-slow': 'slide 200s linear infinite',
        'slide-slow-reverse': 'slide_reverse 200s linear infinite',

      },
      keyframes: {
        slide: {
          '0%': { transform: "translateX(0)"},
          '100%': { transform: "translateX(100%)"}
        },
        slide_reverse: {
          '0%': { transform: "translateX(-100%)"},
          '100%': { transform: "translateX(0)"}
        }
      }
    },
  },
  plugins: [],
}

