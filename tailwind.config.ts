import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: { DEFAULT: "#092a2a" },
        accent: { DEFAULT: "#c3b792" },
        primary: {DEFAULT: "#242423"},
        secondary: {DEFAULT: "#cfdbd5"},
        "black-rgba": "rgba(0,0,0, .54)",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "12": "3.5rem",
      },
      
    },
    plugins: [],
  },
};
export default config;
