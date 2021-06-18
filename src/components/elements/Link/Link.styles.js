import { css } from "styled-components";

const commonStyles = css`
text-decoration: none;
font-weight: 600;
color : ${props => props.theme.color.grey['400']};
border-radius:  ${({ rounded }) => {
    switch(rounded){
        case 'sm':
            return '1rem';
        case 'md':
            return '3rem';
        case 'xl': 
            return '5rem';
        case 'full': 
            return '100%';
        default: return '0rem';
    }
}};
`

const primaryStyles = css`

`
const secondaryStyles = css`

`
const outlineStyles = css`
color : ${props => props.theme.color.blue['600']};
padding : 1.2rem 2rem;
border: 2px solid ${props => props.theme.color.blue['300']};
`
const underlineStyles = css`

`

const defaultStyles = css`

`

export { commonStyles, primaryStyles, secondaryStyles, outlineStyles, underlineStyles, defaultStyles}