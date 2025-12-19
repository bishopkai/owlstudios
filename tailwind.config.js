/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

// These aliases trigger warnings in the Vercel console
// We delete them from the object so Tailwind doesn't "see" them
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Move colors into 'extend' if you want to keep Tailwind's default colors 
      // AND your custom primary/secondary
      colors: {
        primary: colors.sky,    // Replaces deprecated lightBlue
        secondary: colors.slate, // Replaces deprecated blueGray
      },
    },
  },
  plugins: [],
};
