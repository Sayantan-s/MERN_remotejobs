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
    font-family: ${props => props.theme.fonts.body};
    overflow-x : hidden;
    max-width: 100vw;
    color: ${props => props.theme.colors.text[3]};
    background-color: ${props => props.theme.colors.background};
    font-size:${props => props.theme.fontSizes.base};
    font-weight:${props => props.theme.fontWeights.regular};
    #root{
        overflow-x : inherit;
        max-width: inherit;
    }
}
`
export default GlobalStyles;