/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./app.vue`,
    // `./src/**/*.{vue,js,ts,jsx,tsx}` // If you have a src directory
  ],
  theme: {
    extend: {
      // Add custom theme settings here if needed (colors, fonts, etc.)
      // Example:
      // colors: {
      //   'primary': '#007bff',
      // }
    },
  },
  plugins: [
    // Add any Tailwind plugins here
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
} 