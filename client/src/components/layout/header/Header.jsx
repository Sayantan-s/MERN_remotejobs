import React, { useContext } from 'react'
import { Logo, View, Flex, Link } from 'components'
import { AuthContext } from 'context'
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
       <View as="header"> 
          <Flex>
            <Link to="/">
                <Logo />
            </Link>
            <Flex alignItems="center" justifyContent="space-between" width="100%">
               <View>
                    <Link to="/" type="underline">
                        Home
                    </Link>
                    <Link to="/find-jobs">
                        Find jobs
                    </Link>
                    <Link to="/applied-jobs">
                        Applied jobs
                    </Link>
               </View>
               <View>
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
                        : <button onClick={logoutUsers}> USER </button>
                    }
               </View>
            </Flex>
          </Flex>
       </View>
    )
}

export default Header