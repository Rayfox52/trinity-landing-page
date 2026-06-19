/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "outline": "#988e90",
        "primary-fixed-dim": "#c6c6c6",
        "primary-fixed": "#e2e2e2",
        "on-secondary-fixed": "#1c1b1d",
        "tertiary-fixed-dim": "#c6c6c6",
        "surface-dim": "#131313",
        "primary": "#c6c6c6",
        "surface-container-low": "#1b1b1b",
        "on-primary-fixed-variant": "#474747",
        "surface-container-highest": "#353535",
        "surface-bright": "#393939",
        "on-error-container": "#ffdad6",
        "on-surface-variant": "#cfc4c5",
        "inverse-primary": "#5e5e5e",
        "on-error": "#690005",
        "secondary-fixed-dim": "#c8c6c8",
        "surface-container": "#1f1f1f",
        "tertiary-fixed": "#e2e2e2",
        "surface-variant": "#353535",
        "on-tertiary-fixed-variant": "#474747",
        "secondary-container": "#474649",
        "tertiary": "#c6c6c6",
        "on-secondary": "#313032",
        "on-tertiary-fixed": "#1b1b1b",
        "inverse-on-surface": "#303030",
        "outline-variant": "#4c4546",
        "on-tertiary-container": "#757575",
        "inverse-surface": "#e2e2e2",
        "on-surface": "#e2e2e2",
        "on-background": "#e2e2e2",
        "primary-container": "#000000",
        "tertiary-container": "#000000",
        "background": "#000000",
        "surface-container-high": "#2a2a2a",
        "on-secondary-container": "#b7b4b7",
        "secondary": "#c8c6c8",
        "on-primary-container": "#757575",
        "error": "#ffb4ab",
        "on-primary": "#303030",
        "on-secondary-fixed-variant": "#474649",
        "on-primary-fixed": "#1b1b1b",
        "on-tertiary": "#303030",
        "surface": "#131313",
        "surface-tint": "#c6c6c6",
        "error-container": "#93000a",
        "secondary-fixed": "#e5e1e4",
        "surface-container-lowest": "#0e0e0e",
        "cyber-cyan": "#00e5ff",
        "neon-rose": "#ff007f"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "1.5rem",
        "container-padding-mobile": "1rem",
        "container-padding-desktop": "2.5rem",
        "stack-sm": "0.5rem",
        "stack-lg": "2rem",
        "stack-md": "1rem",
        "unit": "4px"
      },
      fontFamily: {
        "display-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "mono-data": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"]
      }
    }
  }
}
