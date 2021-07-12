import { createContext, useContext, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import type { Theme } from "types";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const cookies = parseCookies();

  const [theme, setTheme] = useState<Theme>((cookies.theme as Theme) || "dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setCookie(null, "theme", "dark", {
        maxAge: 30 * 24 * 60 * 60,
      });
    } else {
      setTheme("light");
      setCookie(null, "theme", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
