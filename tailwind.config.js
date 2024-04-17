/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // important tailwind has a darkMode property in this there is two property meadia, and class bases by default class base
  darkMode: "class",

  theme: {
    extend: {},
  },
  plugins: [],
};
