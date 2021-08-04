import { useRef } from "react";
import { useThemeContext } from "context";
import * as S from "./Navbar.style";
import { GiMoon } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {
  const nav = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useThemeContext();

  const isLightTheme = theme === "light";

  return (
    <S.Container ref={nav}>
      <S.NavLink href='/'>Notefy</S.NavLink>

      <S.Links>
        <Link href='/' passHref>
          <S.NavLink>Home</S.NavLink>
        </Link>
        <Link href='/create' passHref>
          <S.NavLink>Create</S.NavLink>
        </Link>
      </S.Links>

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
