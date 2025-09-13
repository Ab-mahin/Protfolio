/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        "black-100": "var(--color-black-100)",
        "black-200": "var(--color-black-200)",
        "white-100": "var(--color-white-100)",
        midnight: "var(--color-midnight)",
        navy: "var(--color-navy)",
        indigo: "var(--color-indigo)",
        storm: "var(--color-storm)",
        aqua: "var(--color-aqua)",
        mint: "var(--color-mint)",
        royal: "var(--color-royal)",
        lavender: "var(--color-lavender)",
        fuchsia: "var(--color-fuchsia)",
        orange: "var(--color-orange)",
        sand: "var(--color-sand)",
        coral: "var(--color-coral)",
      },
      boxShadow: {
        card: "0px 35px 120px -12px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      spacing: {
        'c-space': 'clamp(2rem, 5vw, 4rem)',
        'section-spacing': 'clamp(4rem, 10vw, 8rem)',
        '30': '7.5rem',
        '32': '8rem',
      },
      fontSize: {
        'heading': 'clamp(2rem, 5vw, 4rem)',
      },

    },
  },
  plugins: [],
}
