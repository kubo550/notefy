const breakpoints = {
  sm: "screen and (max-width: 640px)",
  md: "screen and (max-width: 768px)",
  lg: "screen and (max-width: 1024px)",
  xl: "screen and (max-width: 1280px)",
};

const fonts = {
  main: "Space Grotesk, sans-serif",
};

const light = {
  primary: "#219ebc",
  secondary: "#8ecae6",
  text: "#000814",
  background: "#d8e2dc",
  extra: "#023047",
};

const dark = {
  primary: "#C1804C",
  secondary: "blue",
  text: "orange",
  background: "#111",
  extra: "#00296b",
};

const theme = {
  light: {
    colors: light,
    fonts,
    breakpoints,
  },

  dark: {
    colors: dark,
    fonts,
    breakpoints,
  },
};

export default theme;
