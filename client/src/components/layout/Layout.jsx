import React from 'react';
import { Header, Footer, Page } from 'components';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    console.log();

    return (
        <>
            {!(pathname.startsWith('/auth') || /test$/.test(pathname)) && <Header />}
            {children}
            {!(
                pathname.startsWith('/auth') ||
                pathname.startsWith('/jobs') ||
                /test$/.test(pathname)
            ) && <Footer />}
        </>
    );
};

export default Layout;
