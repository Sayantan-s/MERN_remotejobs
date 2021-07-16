import React from 'react'
import { Header, Footer, Page } from 'components'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
                <Page as={"main"} isLayout>
                    {children}
                </Page>
            <Footer />
        </>
    )
}

export default Layout
