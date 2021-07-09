import { css } from "styled-components";

const H1Styles = css`
font-size: ${({ fontSize }) => fontSize || '8'}rem;
color : ${props => props.color || props.theme.color.grey['500']};
line-height: 1;
`

const H2Styles = css`
font-size: ${({ fontSize }) => fontSize || '6'}rem;
color : ${props => props.color || props.theme.color.grey['300']};
line-height: 1;
`

const H3Styles = css`
font-size: ${({ fontSize }) => fontSize || '5'}rem;
color : ${props => props.color || props.theme.color.grey['300']};

line-height: 1;
`

const H4Styles = css`
font-size: ${({ fontSize }) => fontSize || '3'}rem;
color : ${props => props.color || props.theme.color.grey['300']};

line-height: 1;
`

const H5Styles = css`
font-size: ${({ fontSize }) => fontSize || '1.5'}rem;
color : ${props => props.color || props.theme.color.grey['300']};
line-height: 1;
`
const PreStyles = css`
font-size: ${({ fontSize }) => fontSize || '2'}rem;
color : ${props => props.color || props.theme.color.grey['300']};

line-height: 1;
font-family: ${props => props.theme.font.family};
`

const H6Styles = css`
font-size: ${({ fontSize }) => fontSize || '1'}rem;
color : ${props => props.color || props.theme.color.grey['300']};

line-height: 1;
`
const defaultStyles = css`
font-size: ${({ fontSize }) => fontSize || '1.6'}rem;
color : ${props => props.color || props.theme.color.grey['300']};

line-height: 1;
`
export { H1Styles, H2Styles, H3Styles, H4Styles, H5Styles, H6Styles, PreStyles ,defaultStyles }