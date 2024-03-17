/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "rgb(242, 162, 1)",
      },
      fontFamily: {
        poppins: ["Poppins"],
        pompiere: ["Pompiere"],
        josefin: ["Josefin+Slab"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
