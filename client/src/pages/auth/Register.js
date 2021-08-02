import { Input, Button } from 'components';
import { Page, StackVertical } from 'components/index';
import { AuthContext } from 'context';
import { AUTHENTICATION_SUCESSFULL } from 'context/types/Auth.types';
import {useForm} from 'hooks';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import http from 'utils/http';

const Register = () => {
    const [ form, handleChange, submitHandler ] = useForm({
            email : '',
            name : '',
            password : '',
            phone : '',
            confPassword : ''
    })

    const theme = useTheme();

    const { email, name, password, phone, confPassword  } = form

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
        console.log(res)
        console.log(AuthState.state)
    } 
    return (
       <Page position="relative" display="flex" 
       alignItems="center"
       justifyContent="center">
            <StackVertical
            gap={4}
            p="5"
            as="form" onSubmit={onSubmitHanlder} width="m"  boxShadow={`0px 10px 20px ${theme.colors.blue[2]}50`}>
                    <Input 
                        type="text" 
                        placeholder="name" 
                        name="name" 
                        value={name} 
                        onChange={handleChange} 
                    />
                    <Input 
                        type="email" 
                        placeholder="email" 
                        name="email" 
                        value={email} 
                        onChange={handleChange} />
                    <Input 
                        type="numeric" 
                        placeholder="phone" 
                        name="phone" 
                        value={phone} 
                        onChange={handleChange} />
                    <Input 
                        type="password" 
                        placeholder="password" 
                        name="password" 
                        value={password} 
                        onChange={handleChange} />
                    <Input 
                        type="password" 
                        placeholder="confirm password" 
                        name="confPassword" 
                        value={confPassword} 
                        onChange={handleChange} 
                    />
                    <Button lay="lg" width="100%">Register</Button>
            </StackVertical>
       </Page>
    )
}

export default Register
