import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  padding: 30px;
  background-color: ${props => darken(0.2, props.theme.colors.background)};
  width: 100%;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);

  @media ${props => props.theme.breakpoints.sm} {
    padding: 4px 14px;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};

  a {
    color: ${props => darken(0.2, props.theme.colors.text)};
    margin-left: 5px;

    svg {
      transform: translateY(2px);
    }
  }
`;
