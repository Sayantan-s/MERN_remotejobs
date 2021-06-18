import React, { forwardRef } from 'react'
import { Box } from 'components'
import styled from 'styled-components'

const Page = ({children}, ref) => {
    return (
       <PageLayout isLayout ref={ref}>
           {children}
       </PageLayout>
    )
}

export default forwardRef(Page)

const PageLayout = styled(Box)`
    min-height: 100vh;
`
