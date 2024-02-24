/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      heading: ["Bricolage Grotesque", " sans-serif", "system-ui"],
      casual: ["DM Sans", "sans-serif"],
    },
    plugins: [],
  },
};
