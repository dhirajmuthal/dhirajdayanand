import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        display: ['Anton', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
        },
        "float-tag-1": {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        "float-tag-2": {
          "0%, 100%": { transform: "translateY(0px) rotate(2deg)" },
          "50%": { transform: "translateY(-20px) rotate(-2deg)" },
        },
        "float-tag-3": {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        "float-tag-4": {
          "0%, 100%": { transform: "translateY(0px) rotate(1deg)" },
          "50%": { transform: "translateY(-12px) rotate(-1deg)" },
        },
        "hero-title": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "hero-subtitle": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "hero-buttons": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 8s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "float-tag-1": "float-tag-1 5s ease-in-out infinite",
        "float-tag-2": "float-tag-2 6s ease-in-out infinite 0.5s",
        "float-tag-3": "float-tag-3 5.5s ease-in-out infinite 1s",
        "float-tag-4": "float-tag-4 7s ease-in-out infinite 1.5s",
        "hero-title": "hero-title 0.8s ease-out forwards",
        "hero-subtitle": "hero-subtitle 0.8s ease-out 0.3s forwards",
        "hero-buttons": "hero-buttons 0.8s ease-out 0.6s forwards",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
      boxShadow: {
        "purple-lg": "0 25px 50px -12px hsl(var(--primary) / 0.35)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
