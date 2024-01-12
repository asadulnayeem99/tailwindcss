/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./output/**/*.html"],
  content: ["./output/**/*.html"],
  // darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
