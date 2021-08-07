import React from 'react'
import { Header, Footer, Page } from 'components'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    console.log()

    return (
        <>
            { !pathname.startsWith('/auth') && <Header />}
                {children}
            { !pathname.startsWith('/auth') && <Footer />}
        </>
    )
}

export default Layout
