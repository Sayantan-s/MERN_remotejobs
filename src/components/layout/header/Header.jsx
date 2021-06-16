import React from 'react'
import { Box as Head } from 'components'
import { Box as Navbar } from 'components'
import { Logo, Box } from 'components'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
       <Head as="header">
          <Box isLayout>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <Navbar>
               <Box>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/find-jobs">
                        Find jobs
                    </NavLink>
                    <NavLink to="/applied-jobs">
                        Applied jobs
                    </NavLink>
               </Box>
               <Box>
                   
               </Box>
            </Navbar>
          </Box>
       </Head>
    )
}

export default Header
