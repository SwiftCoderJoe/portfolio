/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: `"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
      },
      fontSize: {
        nav: "1.8rem;"
      },
      skew: {
        '7': '7deg',
        '30': '30deg',
      },
      animation: {
        'slide-slow': 'slide 200s linear infinite',
        'slide-slow-reverse': 'slide_reverse 100s linear infinite',
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
  plugins: [require('tailwindcss-unimportant')],
}

