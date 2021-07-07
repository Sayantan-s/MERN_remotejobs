import { AuthContext } from 'context';
import { AUTHENTICATION_SUCESSFULL } from 'context/types/Auth.types';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import http from 'utils/http';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const history = useHistory();

    const AuthState = useContext(AuthContext);

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
            url: '/auth/login',
            method : 'POST',
            data
        })

        if(res.status === 200){
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

        console.log(res);
    } 

    return (
        <div>
           <form onSubmit={onSubmitHanlder}>
            <input type="email" name="email"placeholder="email" value={email} onChange={eve => setEmail(eve.target.value)} />
            <input type="password" name="password"placeholder="password" value={password} onChange={eve => setPassword(eve.target.value)} />
            <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default Login
