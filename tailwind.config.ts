import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "#f4f1ea",
        paperDark: "#ebe7dd",
        ink: "#1f1d1a",
        inkSoft: "#4a4640",
        accent: "#1a1a3a",
        sticky: "#fde68a",
        folderBlue: "#7fb8e6",
        folderYellow: "#e9c87a",
        folderGreen: "#9ec6a2",
        folderRed: "#e09b9b",
        folderPurple: "#b8a4d4",
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
        accentUI: {
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
      backgroundImage: {
        'grid-paper': "linear-gradient(to right, rgba(31,29,26,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,29,26,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-cell': '48px 48px',
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
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--tw-rotate, 0deg))" },
          "50%": { transform: "translateY(-8px) rotate(var(--tw-rotate, 0deg))" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        spinSlow: "spinSlow 8s linear infinite",
        blink: "blink 1s steps(2) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
