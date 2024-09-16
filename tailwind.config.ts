import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

    screens: {

      'iphone5': '320px',
      // => @media (min-width: 320px) { ... }
      'medium-phone': '380px',

      'slighty-large-phone': '450px',

      // => @media (min-width: 380px) { ... }
      'large-phone': '520px',
      // => @media (min-width: 480px) { ... }



      'tablet': '640px',
      // => @media (min-width: 640px) { ... }


      'large-tablet': '768px',

      'extra-large-tablet': '968px',

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',

    },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
       "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "autoRun": {
          from: {
            transform: "perspective(1000px)  rotateY(0deg)",
          },
          to: {
            transform: "perspective(1000px)  rotateY(360deg)",
          },
      },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "autoRun": "autoRun 20s linear infinite",
        "autoRunPaused": "autoRun 20s linear infinite paused",
      },
    },

  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
