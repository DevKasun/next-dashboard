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
        background: "var(--background)",
        foreground: "var(--foreground)",
        kBlack: "#222831",
        kBrightGray: "#393E46",
        kBlue: "#00ADB5",
        foregroundColor: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
export default config;
