import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding : 0;
    margin : 0;
    box-sizing : border-box;
}
html{
    font-size: 62.5%;
}
body{
    font-family: ${props => props.theme.font.family};
    overflow-x : hidden;
    max-width: 100vw;
    color: ${props => props.theme.color.grey["300"]};
    background-color: ${props => props.theme.color.backgroundColor};
    font-size: 1.6rem;
    font-weight: 500;
    #root{
        overflow-x : inherit;
        max-width: inherit;
    }
}
`
export default GlobalStyles;