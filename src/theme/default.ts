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
  primary: "#FFBD54",
  secondary: "red",
  text: "#d28445",
  background: "#eee",
};

const dark = {
  primary: "#C1804C",
  secondary: "blue",
  text: "orange",
  background: "#111",
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
