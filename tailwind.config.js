/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102D46',
          dark: '#0B1F31',
          light: '#183E5E',
        },
        primary: {
          DEFAULT: '#176B87',
          dark: '#12556B',
          light: '#2086A8',
        },
        teal: {
          DEFAULT: '#1A9B91',
          dark: '#147A72',
          light: '#23BDB1',
        },
        surface: {
          DEFAULT: '#F4F7F9',
          alt: '#EBF1F5',
        },
        dark: '#263746',
        body: '#4A5568',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
