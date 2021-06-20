import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

const Box = ({ children,...otherProps },ref) => {
    return (
       <Container ref={ref} {...otherProps}>
           {children}
       </Container>
    )
}

export default forwardRef(Box)

const Container = styled.div`

${props => props.isLayout && css`
    max-width: 160rem;
    margin : 0 auto;
    padding : ${props => props.padding || '2'}rem;
`}

${props => props.flex && css`
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-content: ${props => props.alignContent};
    align-items: ${props => props.alignItems};
    justify-items: ${props => props.justifyItems};
`}
`