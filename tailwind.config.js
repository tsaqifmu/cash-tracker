/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["cash.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
