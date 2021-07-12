import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
    };

    fonts: {
      main: string;
    };

    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
