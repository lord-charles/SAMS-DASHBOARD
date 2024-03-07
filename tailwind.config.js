const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(87,190,187)",
          100: "#E6FFFF",
          200: "#CCF7F6",
          300: "#B2EEED",
          400: "#85DDDB",
          500: "#57BEBB",
          600: "#3DAAA8",
          700: "#2C8E8C",
          800: "#1A6B69",
          900: "#232E66",
        },

        button: "rgb(50,136,124)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-l-to-r": "linear-gradient(to right, #008080, #007070)",
      },
      screens: {
        xxxs: "20px",
        xxs: "360px",
        xs: "480px",
        s: "640px",
        sm: "1000px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
