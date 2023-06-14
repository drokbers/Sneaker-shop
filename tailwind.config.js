/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        colors: {
          primary: {
            orange: 'hsl(26, 100%, 55%)',
            paleOrange: 'hsl(25, 100%, 94%)',
          },
          neutral: {
            veryDarkBlue: 'hsl(220, 13%, 13%)',
            darkGrayishBlue: 'hsl(219, 9%, 45%)',
            grayishBlue: 'hsl(220, 14%, 75%)',
            lightGrayishBlue: 'hsl(223, 64%, 98%)',
            white: 'hsl(0, 0%, 100%)',
            black: 'hsl(0, 0%, 0%)',
          },
        },
        fontFamily: {
          sans: ['Kumbh Sans', 'sans-serif'],
        },
        fontSize: {
          'body': '16px',
        },
      },
  },
  plugins: [],
};
