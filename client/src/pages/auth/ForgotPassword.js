import ArrowLeft from 'assets/icons/ArrowLeft';
import Email from 'assets/icons/Email';
import { Button, Heading, Input, Link, Logo, Page, Text, View } from 'components/index'
import { useForm } from 'hooks';
import React from 'react'
import { useTheme } from 'styled-components'

const ForgotPassword = () => {

    const [ email, handleChange, onSubmitHandler ] = useForm({
        state : ''
    });

    const theme = useTheme();

    return (
        <Page
        maxWidth="100%" 
        position="relative" display="flex" 
        alignItems="center"
        justifyContent="center">
             <Link to="/"  m="4rem auto" position="absolute" top="0">
                     <Logo />
                     <Text color="text.4" ml={4}>
                         <Text as="span" fontSize="m" fontWeight="bold" color='text.4'>Job</Text> 
                         <Text as="span" fontSize="m" fontWeight="normal" color='text.4'>Seek.</Text>
                     </Text>
            </Link>
            <View>
                 <View p="7" boxShadow={`0px 10px 20px ${theme.colors.blue[2]}50`} borderRadius={5}>
                     <Heading level={4} textAlign="center">
                         Forgot Password?
                     </Heading>
                     <Text textAlign="center" mt={6}>
                         Enter your details to receive a reset link
                     </Text>
                     <View
                     as="form" onSubmit={onSubmitHandler} width="m" mt={6}>
                                <Input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    name="email" 
                                    value={email} 
                                    onChange={handleChange} 
                                    before
                                    iconBefore={<Email size={'2.5rem'} fill={theme.colors.text[1]}/>} 
                                />
                            <Button lay="lg" width="100%" mt={6}>Login</Button>
                     </View>
                    <Link to="/auth/login" m="0 auto" mt={3} color="blue.4">
                        <ArrowLeft size="1.6rem" fill={theme.colors.blue[4]} />
                        <Text color="blue.4" ml={2}> Back to Sign In </Text>
                    </Link>    
                 </View>
            </View>
        </Page>
    )
}

export default ForgotPassword
