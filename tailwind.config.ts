import type { Config } from "tailwindcss";

// Design language inspired by getdesign.md's ElevenLabs analysis:
// off-white editorial canvas, ink pill CTAs, pastel gradient orbs as
// the only color moments (never used as fills or text colors).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f5f5",
        canvasSoft: "#fafafa",
        surfaceCard: "#ffffff",
        surfaceStrong: "#f0efed",
        ink: "#0c0a09",
        copy: "#4e4e4e",
        mute: "#777169",
        muteSoft: "#a8a29e",
        line: "#e7e5e4",
        lineStrong: "#d6d3d1",
        orbMint: "#a7e5d3",
        orbPeach: "#f4c5a8",
        orbLavender: "#c8b8e0",
        orbSky: "#a8c8e8",
        orbRose: "#e8b8c4",
        // kept for shared component compat
        amber: "#292524",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
