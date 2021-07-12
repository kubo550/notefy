import styled from "styled-components";

interface TypoProps {
  readonly center?: boolean;
}

export const Title = styled.h1<TypoProps>`
  font-size: 3rem;
  margin: 1rem 0;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: ${props => (props.center ? "center" : "left")};
`;

export const Subtitle = styled.h2<TypoProps>`
  width: 100%;
  font-size: 24px;
  text-align: ${props => (props.center ? "center" : "left")};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 26px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #f9eca0;
  background: linear-gradient(to bottom, #f0c911 5%, #f2ab1e 100%);
  background-color: #f0c911;
  border-radius: 6px;
  border: 1px solid #e65f44;
  display: inline-block;
  cursor: pointer;
  color: #c92200;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 2px 14px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ded17c;
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  svg {
    margin-left: 5px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 90vw;
  max-height: 55vh;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px 5px;
  font-family: Arial, Helvetica, sans-serif;

  @media ${props => props.theme.breakpoints.md} {
    margin: 10px 2px;
    padding: 2px;
  }
`;
