import React, { useContext, useEffect, useRef } from 'react';
import { Logo, View, Flex, Link, Stack } from 'components';
import { AuthContext } from 'context';
import { LOGOUT_USER } from 'context/types/Auth.types';
import { NavLink, useHistory } from 'react-router-dom';
import { NavContext } from 'context/NavHeightContext';
import styled from 'styled-components';
import css from '@styled-system/css';

const Header = () => {
    const { dispatch, isAuthenticated } = useContext(AuthContext);

    const heightRef = useRef(null);

    const { setHeight } = useContext(NavContext);

    const history = useHistory();

    const logoutUsers = async (_) => {
        await dispatch({ type: LOGOUT_USER });
        history.push('/');
    };

    useEffect(() => {
        setHeight(heightRef.current.offsetHeight);
    }, []);

    return (
        <View as="header" width={'desktop'} m="0 auto" ref={heightRef} py={5}>
            <Flex>
                <Link to="/">
                    <Logo />
                </Link>
                <Flex alignItems="center" justifyContent="space-between" width="100%" ml="6">
                    <Stack gap={9} ml={4} alignItems="center">
                        <StyledNavLinks to="/" color={'text.3'} exact={true}>
                            Home
                        </StyledNavLinks>
                        <StyledNavLinks to="/jobs" color={'text.3'}>
                            Find Jobs
                        </StyledNavLinks>
                        <Link to="/auth/companies" variant="secondary.normal">
                            Post a job
                        </Link>
                    </Stack>
                    <Stack gap={5}>
                        {!isAuthenticated() ? (
                            <>
                                <Link to="/auth/login" color={'text.3'}>
                                    Login
                                </Link>
                                <Link
                                    to="/auth/register"
                                    variant="outline.normal"
                                    borderRadius={10}
                                    lay="lg"
                                >
                                    Register Now
                                </Link>
                            </>
                        ) : (
                            <button onClick={logoutUsers}> USER </button>
                        )}
                    </Stack>
                </Flex>
            </Flex>
        </View>
    );
};

export default Header;

const StyledNavLinks = styled(NavLink).attrs({ activeClassName: 'active' })(
    css({
        color: 'text.4',
        textDecoration: 'none',
        fontWeight: 'semibold',
        position: 'relative',
        '&.active': {
            color: 'blue.5'
        },
        '&::after': {
            content: ' ',
            position: 'absolute',
            width: '100%',
            height: '3px',
            bg: 'red',
            bottom: 0,
            left: 0
        }
    })
);
