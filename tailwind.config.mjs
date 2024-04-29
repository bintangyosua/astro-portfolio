/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "blue-primary": "#EDEEF0",
        "gray-darkest": "#B4B4B8",
        "gray-darker": "#C7C8CC",
        "cream-lighter": "#C7C8CC",
        "cream-lightest": "#F2EFE5",
      },
    },
  },
  plugins: [],
};
