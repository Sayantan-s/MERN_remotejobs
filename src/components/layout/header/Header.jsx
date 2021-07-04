import React, { useContext } from 'react'
import { Box as Head } from 'components'
import { Logo, Box, Link } from 'components'
import styled from 'styled-components'
import { AuthContext } from 'context'
import { UserProfileButton } from 'components'

const Header = () => {

    const { isAuthenticated } = useContext(AuthContext)

    console.log(isAuthenticated());

    return (
       <Head as="header">
          <Wrapper isLayout flex>
            <Link to="/">
                <Logo />
            </Link>
            <Navbar flex alignItems="center" justifyContent="space-between">
               <Box className="nav_links">
                    <Link to="/" type="underline">
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
                    {
                        !isAuthenticated() ?
                        <>
                            <Link to="/auth/login">
                                Login
                            </Link>
                            <Link to="/auth/register" type="outline" rounded="md">
                                Register Now
                            </Link>
                        </>
                        : <UserProfileButton />
                    }
               </Box>
            </Navbar>
          </Wrapper>
       </Head>
    )
}

export default Header

const Wrapper = styled(Box)`
align-items: center;
padding: 2rem;
`
const Navbar = styled(Box)`
width: 100%;
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