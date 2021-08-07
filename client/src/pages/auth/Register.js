import Email from 'assets/icons/Email';
import Hide from 'assets/icons/Hide';
import Lock from 'assets/icons/Lock';
import Show from 'assets/icons/Show';
import User from 'assets/icons/User';
import { Input, Button, View, Text, Flex } from 'components';
import { Heading, Link, Logo, Page, StackVertical } from 'components/index';
import { AuthContext } from 'context';
import { AUTHENTICATION_SUCESSFULL } from 'context/types/Auth.types';
import {useForm, useToggle} from 'hooks';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import http from 'utils/http';

const Register = () => {
    const [ form, handleChange, submitHandler ] = useForm({
            email : '',
            name : '',
            password : ''
    })

    const theme = useTheme();

    const [ toggle, handleToggle ] = useToggle();

    const { email, name, password  } = form

    const AuthState = useContext(AuthContext)

    const history = useHistory();

    const onSubmitHanlder = async eve => {
        eve.preventDefault();
        let data = {};
        const formData = new FormData(eve.target);
        for (let [key, value] of formData.entries()) {
            data = {
                ...data,
                [key]: value
            };
        }
        const res = await http({
            url: '/auth/register',
            method : 'POST',
            data
        })

        if(res.status === 201){
            AuthState.dispatch({ type : AUTHENTICATION_SUCESSFULL, payload : {
                expiry: res.data.expiry,
                role : res.data.role,
                token : {
                    access : res.data.access_token,
                    refresh: res.data.refresh_token
                }
            }})
            history.push('/find-jobs');
        }
        //console.log(res)
        //console.log(AuthState.state)
    } 
    return (
       <Page
       maxWidth="100%" 
       position="relative" display="flex" 
       alignItems="center"
       justifyContent="center">
           <Link variant="primary.normal" lay="xl" to="/company" position="absolute" top="5" right="5">
                Create Company Account 
           </Link>
           <View>
                <Link to="/"  m="4rem auto">
                    <Logo />
                    <Text color="text.4" fontSize="m" fontWeight="semibold" ml={3}>
                        LOCOJOBS
                    </Text>
                </Link>
                <View p="7" boxShadow={`0px 10px 20px ${theme.colors.blue[2]}50`} borderRadius={5}>
                    <Heading level={4} textAlign="center">
                        Getting Started
                    </Heading>
                    <Text textAlign="center" mt={6}>
                        Create an account to continue!
                    </Text>
                    <Button variant="secondary" bg={`${theme.colors.blue[1]}50`} mx="auto" mt={7} width="100%">
                        <svg
                            width={24.43}
                            height={25.00}
                            viewBox="0 0 256 262"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid">
                            <path
                                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                fill="#4285F4"
                            />
                            <path
                                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                fill="#34A853"
                            />
                            <path
                                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                fill="#FBBC05"
                            />
                            <path
                                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                fill="#EB4335"
                            />
                        </svg>
                        <Text as={'span'} ml={4} color="text.1">
                            Sign up with Google
                        </Text>
                    </Button>
                    <Text fontSize="ms" color="text.1" textAlign="center" my={7}>
                        OR
                    </Text>
                    <View
                    as="form" onSubmit={onSubmitHanlder} width="m"  >
                            <StackVertical gap={6}>
                                <Input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    name="name" 
                                    value={name} 
                                    onChange={handleChange} 
                                    before
                                    iconBefore={<User size={'2.5rem'} fill={theme.colors.text[1]}/>} 
                                />
                                <Input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    name="email" 
                                    value={email} 
                                    onChange={handleChange}
                                    before
                                    iconBefore={<Email size={'2.5rem'} fill={theme.colors.text[1]}/>} 
                                    />
                                <Input 
                                    type={!toggle ? "password" : "text"} 
                                    placeholder="Create Password" 
                                    name={"password"} 
                                    value={password} 
                                    onChange={handleChange} 
                                    before
                                    iconBefore={<Lock size={'2.5rem'} fill={theme.colors.text[1]}/>}
                                    after
                                    onIconClickAfter={handleToggle}
                                    iconAfter={!toggle ? <Show size={'2.5rem'} fill={theme.colors.text[1]}/> : <Hide size={'2.5rem'} fill={theme.colors.text[1]}/>}
                                />
                            </StackVertical>
                            <Button lay="lg" width="100%" mt={8}>Sign Up</Button>
                    </View>
                    <Flex alignItems="center" justifyContent="center" py={7}>
                        <Text color="text.1">Already have an account? &nbsp;</Text> <Link to="/auth/login" p={0} minWidth={'max-content'}>Sign In</Link>
                    </Flex>
                </View>
           </View>
       </Page>
    )
}

export default Register
