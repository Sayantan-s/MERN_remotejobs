import React from 'react'
import { Box as Head } from 'components'
import { Logo, Box, Link } from 'components'
import styled from 'styled-components'

const Header = () => {
    return (
       <Head as="header">
          <Wrapper isLayout flex>
            <Link to="/">
                <Logo />
            </Link>
            <Navbar flex>
               <Box className="nav_links">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/find-jobs">
                        Find jobs
                    </Link>
                    <Link to="/applied-jobs">
                        Applied jobs
                    </Link>
               </Box>
               <Box className="nav_auth">
                    <Link to="/auth/login">
                        Login
                    </Link>
                    <Link to="/auth/register">
                        Register
                    </Link>
               </Box>
            </Navbar>
          </Wrapper>
       </Head>
    )
}

export default Header

const Wrapper = styled(Box)`
align-items: center;
padding: 2rem 0;
`
const Navbar = styled(Box)`
width: 100%;
justify-content: space-between;
margin-left : 2rem;
.nav{
    &_links{
        a:not(:first-child){
            margin-left : 2rem;
        }
    }
    &_auth{
        a:not(:first-child){
            margin-left : 2rem;
        }
    }
}
`