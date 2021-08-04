import styled from "styled-components";
import Link from "next/link";
import { darken } from "polished";

export const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 10px 10px;
  background-color: ${props => darken(0.2, props.theme.colors.background)};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
`;

export const Links = styled.div`
  width: 50%;
  padding: 0 10%;
  display: flex;
  justify-content: space-evenly;
`;

export const Mobile = styled.div`
  display: none;

  @media ${props => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const NavLink = styled.a`
  font-size: 22px;
  text-decoration: none;
  color: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  transition: 0.3s;

  &:hover {
    color: #d2e1d2;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
  }
`;

export const Label = styled.div``;

interface ToggleProps {
  readonly lightMode?: boolean;
}

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin: 0 40px;

  @media ${props => props.theme.breakpoints.md} {
    margin: 5px;
  }
`;

export const Toggle = styled.input<ToggleProps>`
  --webkit-appearance: none;
  visibility: hidden;
  display: none;
`;

export const ToggleSpan = styled.span<ToggleProps>`
  position: relative;
  display: block;
  width: 44px;
  height: 24px;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  margin-left: 8px;
  background-color: ${props => props.theme.colors.primary};

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    background-color: white;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: ease-in 0.4s;

    transform: translateX(${props => (props.lightMode ? "20px" : "0")});
  }
`;
