import React, { useContext, useState } from 'react';
import http from 'utils/http';
import { Input, Button, View, Text, Flex, TextField } from 'components';
import { Heading, Link, Logo, Page, StackVertical } from 'components/index';
import { AUTHENTICATION_SUCESSFULL } from 'context/types/Auth.types';
import { useForm, useToggle } from 'hooks';
import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Formik, Form } from 'formik';
import { AlertContext, AuthContext } from 'context';
import * as Yup from 'yup';
import Lock from 'assets/icons/Lock';
import Show from 'assets/icons/Show';
import Hide from 'assets/icons/Hide';
import Email from 'assets/icons/Email';
const Login = () => {
    const theme = useTheme();

    const history = useHistory();

    const AuthState = useContext(AuthContext);

    const { dispatchToast } = useContext(AlertContext);

    const [toggle, handleToggle] = useToggle();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const res = await http({
                url: '/auth/login',
                method: 'POST',
                data
            });

            if (res.status === 200) {
                AuthState.dispatch({
                    type: AUTHENTICATION_SUCESSFULL,
                    payload: {
                        access_token: res.headers['x-access-token']
                    }
                });
                history.push('/find-jobs');
            }

            console.log(res);
        } catch (err) {
            dispatchToast({
                variant: 'danger',
                text: err.response.data.message,
                hasIcon: true
            });
        }
    };

    return (
        <Page
            maxWidth="100%"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Link to="/" m="4rem auto" position="absolute" top="0">
                <Logo />
                <Text color="text.4" ml={4} letterSpacing="2px">
                    <Text as="span" fontSize="m" fontWeight="bold" color="text.4">
                        Job
                    </Text>
                    <Text as="span" fontSize="m" fontWeight="normal" color="text.4">
                        Seek.
                    </Text>
                </Text>
            </Link>
            <View>
                <View p="7" boxShadow={`0px 10px 20px ${theme.colors.blue[2]}50`} borderRadius={5}>
                    <Heading level={4} textAlign="center">
                        Sign In
                    </Heading>
                    <Text textAlign="center" mt={6}>
                        Welcome back, you have been missed!
                    </Text>
                    <Button
                        variant="secondary"
                        bg={`${theme.colors.blue[1]}50`}
                        mx="auto"
                        mt={7}
                        width="100%"
                    >
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 16.1C0 10.4051 0 7.55764 1.12587 5.39026C2.07462 3.56382 3.56382 2.07462 5.39026 1.12587C7.55764 0 10.4051 0 16.1 0H31.9C37.5949 0 40.4424 0 42.6097 1.12587C44.4362 2.07462 45.9254 3.56382 46.8741 5.39026C48 7.55764 48 10.4051 48 16.1V31.9C48 37.5949 48 40.4424 46.8741 42.6097C45.9254 44.4362 44.4362 45.9254 42.6097 46.8741C40.4424 48 37.5949 48 31.9 48H16.1C10.4051 48 7.55764 48 5.39026 46.8741C3.56382 45.9254 2.07462 44.4362 1.12587 42.6097C0 40.4424 0 37.5949 0 31.9V16.1Z"
                                fill="#1265BF"
                            />
                            <path
                                d="M10.7738 14.9066C13.0735 14.9066 14.9378 13.0423 14.9378 10.7426C14.9378 8.44289 13.0735 6.57861 10.7738 6.57861C8.4741 6.57861 6.60982 8.44289 6.60982 10.7426C6.60982 13.0423 8.4741 14.9066 10.7738 14.9066Z"
                                fill="white"
                            />
                            <path
                                d="M18.7513 17.9839H25.6524V21.1453C25.6524 21.1453 27.5251 17.3999 32.6204 17.3999C37.1657 17.3999 40.931 19.639 40.931 26.464V40.856H33.7795V28.2079C33.7795 24.1818 31.63 23.739 29.9921 23.739C26.593 23.739 26.011 26.671 26.011 28.7331V40.856H18.7513V17.9839Z"
                                fill="white"
                            />
                            <path
                                d="M7.14395 17.9839H14.4037V40.856H7.14395V17.9839Z"
                                fill="white"
                            />
                        </svg>

                        <Text as={'span'} ml={4} color="text.1">
                            Sign in with LinkedIn
                        </Text>
                    </Button>
                    <Text fontSize="ms" color="text.1" textAlign="center" my={7}>
                        OR
                    </Text>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email('Invalid email')
                                .required(`Your email should'nt be empty`),
                            password: Yup.string()
                                .min(7, `Password strength too low`)
                                .required(`Password should'nt be empty`)
                        })}
                        onSubmit={onSubmit}
                    >
                        <View as={Form} width={'m'} autoComplete="new-password">
                            <StackVertical gap={6}>
                                <TextField
                                    variant={'primary.normal'}
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    before
                                    iconBefore={Email}
                                />
                                <TextField
                                    variant={'primary.normal'}
                                    type={!toggle ? 'password' : 'text'}
                                    placeholder="Password"
                                    name="password"
                                    before
                                    iconBefore={Lock}
                                    after
                                    onIconClickAfter={handleToggle}
                                    iconAfter={toggle ? Hide : Show}
                                />
                            </StackVertical>
                            <Flex justifyContent="flex-end" mt={5}>
                                <Link to="/auth/forgotpassword" p="0" color="text.1">
                                    Forgot password?
                                </Link>
                            </Flex>
                            <Button lay="lg" width="100%" mt={6}>
                                Login
                            </Button>
                        </View>
                    </Formik>

                    <Flex alignItems="center" justifyContent="center" py={7}>
                        <Text color="text.1">Don't have an account yet? &nbsp;</Text>{' '}
                        <Link to="/auth/register" p={0} minWidth={'max-content'}>
                            Sign Up
                        </Link>
                    </Flex>
                </View>
            </View>
        </Page>
    );
};

export default Login;
