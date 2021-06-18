import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import '../font/fonts.css'

const Styles = ({ theme, children }) => {

    return (
       <ThemeProvider theme={theme}>
           <GlobalStyles />
           {children}
       </ThemeProvider>
    )
}

export default Styles
