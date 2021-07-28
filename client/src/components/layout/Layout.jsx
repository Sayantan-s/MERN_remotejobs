import React from 'react'
import { Header, Footer, Page } from 'components'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    console.log()

    return (
        <>
            { !(pathname.endsWith('login') || pathname.endsWith('register')) && <Header />}
                {children}
            { !(pathname.endsWith('login') || pathname.endsWith('register')) && <Footer />}
        </>
    )
}

export default Layout
