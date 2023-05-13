/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6687FF",
          base: "#5271E0",
          dark: "#405BBF",
          darkest: "#130047",
        },
        accent: {
          base: "#F5B800",
          dark: "#B28600",
        },
      },
      boxShadow: {
        primary: "0px 0px 80px rgba(82, 113, 224, 0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
