/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#FFF7F5',
        yellow: '#FFFCF1',
        green: '#F1FBF9',
        blue: '#F3F3FF',
      },
    },
  },
  plugins: [],
}
