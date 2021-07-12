import styled from "styled-components";
import Link from "next/link";

export const Container = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const NavLink = styled(Link)`
  font-size: 32px;

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
