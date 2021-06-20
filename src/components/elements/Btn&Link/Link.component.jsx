import { defaultStyles } from 'components/library/Typography/TypographyStyles'
import React, { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { commonStyles, outlineStyles, primaryStyles, secondaryStyles, underlineStyles } from './styles'
const Link = ({ children, ...otherProps }, ref) => {
    return (
       <Anchor {...otherProps} ref={ref}>
           {children}
       </Anchor>
    )
}

export default forwardRef(Link)

const Anchor = styled(NavLink)`
${commonStyles};
${({ type }) => {
    switch(type){
        case 'primary':
            return primaryStyles;
        case 'secondary':
            return secondaryStyles;
        case 'outline':
            return outlineStyles;
        case 'underline':
            return underlineStyles;
        default: return defaultStyles;
    }
}}
`