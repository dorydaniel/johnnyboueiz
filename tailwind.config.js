module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: (theme) => ({
        ...theme("colors"),
        yellowor: "#FFDC25",
        yellowish: "#FFCB00",
        grayish: "#939393",
        grayed: "#646464",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        yellowor: "#FFDC25",
        yellowish: "#FFCB00",
        grayish: "#939393",
        grayed: "#646464",
      }),
    },
  },
  variants: {},
  plugins: [],
};
