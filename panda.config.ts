import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        scroll: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        blink: {
          from: {
            opacity: 0.5,
          },
          "40%": {
            opacity: 1,
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // for compiler to resolve tsconfigPaths correctly
  importMap: "@panda",
});
