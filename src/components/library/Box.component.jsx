import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Box = ({ children,...otherProps },ref) => {
    return (
       <Container ref={ref} {...otherProps}>
           {children}
       </Container>
    )
}

export default forwardRef(Box)

const Container = styled.div`

`