import { useThemeContext } from "context";
import * as S from "./Navbar.style";
import { GiMoon } from "react-icons/gi";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();

  const isLightTheme = theme === "light";

  return (
    <S.Container>
      <S.NavLink href='/'>Notefy</S.NavLink>

      <div>
        <S.NavLink href='/'>Home</S.NavLink>
        <S.NavLink href='/create'>Create</S.NavLink>
      </div>

      <S.ToggleContainer>
        <GiMoon />
        <S.Label>
          <S.Toggle type='checkbox' defaultChecked={isLightTheme} />
          <S.ToggleSpan
            onClick={toggleTheme}
            lightMode={isLightTheme}
          ></S.ToggleSpan>
        </S.Label>
      </S.ToggleContainer>
    </S.Container>
  );
};

export default Navbar;
