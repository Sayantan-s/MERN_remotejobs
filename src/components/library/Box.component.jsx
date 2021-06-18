import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { color, letterSpacing, margin, padding } from 'styled-system'

const Box = ({ children,...otherProps },ref) => {
    return (
       <Container ref={ref} {...otherProps}>
           {children}
       </Container>
    )
}

export default forwardRef(Box)

const Container = styled.div`
${color}
${margin}
${padding}
${letterSpacing}

${props => props.isLayout && css`
    max-width: 160rem;
    margin : 0 auto;
    padding : ${props => props.padding || '2'}rem;
`}

${props => props.flex && css`
    display: flex;
`}
`