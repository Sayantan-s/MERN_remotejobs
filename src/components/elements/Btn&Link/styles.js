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
            return '50%';
        default: return '0rem';
    }
}};
${props => props.as === 'button' && css`
    outline : none;
    border : none;
    padding : 1.5rem 0.8rem;
    font-family : ${props => props.theme.font.family};
    font-weight: 600;
    font-size: 2rem;
    cursor : pointer;
    align-items: center;
    display: flex;
    justify-content: center;
    min-width : ${({ width }) => {
        switch(width){
            case 'sm': 
                return '8rem';
            case 'md': 
                return '12rem';
            case 'lg':
                return '16rem';
            case 'xl':
                return '20rem';
            default:
                return '10rem';
        }
    }}
`}
`

const primaryStyles = css`
background-color: ${props => props.theme.color.blue['600']};
color : ${props => props.theme.color.blue['50']};
`
const secondaryStyles = css`
background-color: ${props => props.theme.color.blue['100']};
color : ${props => props.theme.color.blue['600']};
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