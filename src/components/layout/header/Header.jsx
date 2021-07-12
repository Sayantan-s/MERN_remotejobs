import React, { useContext } from 'react'
import { View as Head } from 'components'
import { Logo, View, Link } from 'components'
import styled from 'styled-components'
import { AuthContext } from 'context'
import { UserProfileButton } from 'components'
import { LOGOUT_USER } from 'context/types/Auth.types'
import { useHistory } from 'react-router-dom'

const Header = () => {

    const { dispatch, isAuthenticated } = useContext(AuthContext);

    const history = useHistory();

    const logoutUsers = async _ => {
        await dispatch({ type : LOGOUT_USER });
        history.push('/');
    }

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
                        : <UserProfileButton onClick={logoutUsers}/>
                    }
               </Box>
            </Navbar>
          </Wrapper>
       </Head>
    )
}

export default Header