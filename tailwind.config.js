/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/index.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
