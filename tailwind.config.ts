import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        brick: {
          default: "#EB4813",
          light: "#f06e42",
        },
        gray: {
          default: "#7B7B74",
          light: "#8A8A83",
          ultralight: "#dbdbd9",
        },
        navy: {
          default: "#008fb3",
          light: "#19ACD1",
        },
        mustard: {
          default: "#cc8800",
          light: "#e69900",
        },
        red: {
          default: "#e63900",
          light: "#ff4000",
        },
        green: {
          default: "#669900",
          light: "#77b300",
        },
        purple: {
          default: "#ac3973",
          light: "#c6538c",
        },
        rose: {
          default: "#cf5b3e",
          light: "#f2715a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
