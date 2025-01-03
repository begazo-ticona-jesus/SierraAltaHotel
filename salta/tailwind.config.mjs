/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#B4A064",
        "color-primary-shadow": "#958452",
      },
    },
  },
  plugins: [],
};
