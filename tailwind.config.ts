import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        nigeria: {
          50: "#eef8f1",
          100: "#d5eedd",
          200: "#abdcbf",
          300: "#7dc79c",
          400: "#49ac73",
          500: "#238a53",
          600: "#1b6f43",
          700: "#155738",
          800: "#12462e",
          900: "#103b28"
        },
        road: {
          50: "#f8f8f8",
          100: "#efefef",
          200: "#dbdbdb",
          300: "#bfbfbf",
          400: "#9f9f9f",
          500: "#808080",
          600: "#666666",
          700: "#4e4e4e",
          800: "#3f3f3f",
          900: "#2f2f2f"
        },
        alert: {
          50: "#fff2f2",
          100: "#ffe0e0",
          200: "#ffc6c6",
          300: "#ff9d9d",
          400: "#ff6464",
          500: "#fa3333",
          600: "#e11d1d",
          700: "#be1515",
          800: "#9d1616",
          900: "#811919"
        }
      },
      boxShadow: {
        civic: "0 18px 40px -24px rgba(16, 59, 40, 0.45)"
      },
      backgroundImage: {
        "civic-gradient": "linear-gradient(145deg, rgba(16,59,40,0.08), rgba(129,25,25,0.08))"
      }
    }
  },
  plugins: []
};

export default config;
