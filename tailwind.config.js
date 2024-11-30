/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      alexana: "Alexana",
      poppins: "Poppins",
      jetBrains: "JetBrains Mono",
      lobster: "Dune Rise",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [
    flowbite.plugin(),
    require("flowbite/plugin")({
      charts: true,
      forms: true,
      tooltips: true,
    }),
  ],
  utils: [],
};
