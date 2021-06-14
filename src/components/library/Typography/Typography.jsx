import React from 'react'
import styled from 'styled-components'
import { defaultStyles, H1Styles, H2Styles, H3Styles, H4Styles, H5Styles, H6Styles, PreStyles } from './TypographyStyles'

const Typography = ({ children, ...otherProps }, ref) => {
    return (
       <Text ref={ref} {...otherProps}>
           { children }
       </Text>
    )
}

export default Typography

const Text = styled.p`
${({ as }) => {
    switch(as){
        case 'h1':
            return H1Styles;
        case 'h2':
            return H2Styles;
        case 'h3':
            return H3Styles;
        case 'h4':
            return H4Styles;
        case 'h5':
            return H5Styles;
        case 'h6':
            return H6Styles;
        case 'pre':
            return PreStyles;
        default: 
            return defaultStyles;
    }
}}
`