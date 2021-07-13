module.exports = {
  purge: {
    enabled: true,
    content: ["./layout/*.liquid", "./templates/*.liquid", "./sections/*.liquid", "./snippets/*.liquid"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1" }],
      sm: ["0.875rem", { lineHeight: "1" }],
      base: ["1rem", { lineHeight: "1" }],
      lg: ["1.125rem", { lineHeight: "1" }],
      xl: ["1.25rem", { lineHeight: "1" }],
      "2xl": ["1.5rem", { lineHeight: "1" }],
      "3xl": ["1.875rem", { lineHeight: "1" }],
      "4xl": ["2.25rem", { lineHeight: "1" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
