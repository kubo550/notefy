import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    *, *::before, *::after {
        box-sizing: border-box;
    }


    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        overflow-x: hidden;
        width: 100%;

    }

`;
