/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b6e6f9",

          secondary: "#fcabda",

          accent: "#63a8ce",

          neutral: "#181925",

          "base-100": "#FFFFFF",

          info: "#63A4CF",

          success: "#3DD6C7",

          warning: "#AF8F0D",

          error: "#F1135D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};