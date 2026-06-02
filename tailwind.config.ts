import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1320px" } },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        ember: "hsl(var(--ember))",
        plasma: "hsl(var(--plasma))",
      },
      fontFamily: {
        sans: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 4px)", sm: "calc(var(--radius) - 8px)" },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--ember)/0.25), 0 0 40px -8px hsl(var(--ember)/0.45)",
        plasma: "0 0 0 1px hsl(var(--plasma)/0.25), 0 0 40px -8px hsl(var(--plasma)/0.4)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        drift: { "0%": { transform: "translateY(0) translateX(0)" }, "50%": { transform: "translateY(-24px) translateX(12px)" }, "100%": { transform: "translateY(0) translateX(0)" } },
        scanline: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100%)" } },
        pulseGlow: { "0%,100%": { opacity: "0.4" }, "50%": { opacity: "1" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        drift: "drift 14s ease-in-out infinite",
        scanline: "scanline 6s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
