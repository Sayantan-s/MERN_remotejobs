import React, { forwardRef } from 'react'
import { Box } from 'components'
import styled from 'styled-components'

const Page = ({children}, ref) => {
    return (
       <Box as={'section'} isLayout ref={ref}>
           {children}
       </Box>
    )
}

export default forwardRef(Page)

const PageLayout = styled(Box)`
min-height: 100vh;
`
