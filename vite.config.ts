/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        secondary: {
          light: '#F3F4F6',
          dark: '#121212',
        },
        accent: {
          light: '#E5E7EB',
          dark: '#1F1F1F',
        },
        text: {
          primary: {
            light: '#111827',
            dark: '#F9FAFB',
          },
          secondary: {
            light: '#4B5563',
            dark: '#9CA3AF',
          },
        },
        border: {
          light: '#D1D5DB',
          dark: '#3F3F46',
        },
        button: {
          primary: {
            bg: '#000000',
            text: '#FFFFFF',
            hover: '#333333',
          },
          secondary: {
            bg: '#E5E7EB',
            text: '#111827',
            hover: '#D1D5DB',
          },
        }
      },
    },
  },
  plugins: [],
}