/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
        Orbitron: ['Orbitron', 'sans-serif'],
        unbounded: ['Unbounded', 'cursive'],
        syne: ['Syne', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        montserrat: ['Montserrat Alternates', 'sans-serif'],
        archivo: ['Archivo Black', 'sans-serif'],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
          500: "#00FFFF", // Neon cyan
          700: "#00B8D9", // Bright cyan
        },
        violet: {
          300: "#5724ff",
          500: "#9B4DFF", // Neon violet
          700: "#6A3AB2", // Dark violet
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
          500: "#F4FF00", // Neon yellow
        },
        neon: {
          pink: "#FF00B3", // Neon pink
          green: "#00FF80", // Neon green
          blue: "#00BFFF", // Electric blue
          purple: "#9B00FF", // Electric purple
        },
        dark: {
          900: "#121212", // Very dark background for contrast
        },
        gray: {
          100: "#F7F7F7", // Soft gray for accents
          500: "#444444", // Dark gray for text
        },
      },
    },
  },
  plugins: [],
};
