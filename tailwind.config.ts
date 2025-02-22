import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      boxShadow: {
        custom:
          "1px 1px 2px 0 rgba(60,64,67,0.1), 0 2px 6px 2px rgba(60,64,67,0.15)"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s cubic-bezier(.165,.84,.44,1) forwards"
      }
    }
  },
  plugins: []
};
export default config;
