import { useThemeContext } from "context";
import { ThemeProvider } from "styled-components";
import themes from "./default";

const Theme: React.FC = ({ children }) => {
  const { theme } = useThemeContext();

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
