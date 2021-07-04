import { AuthContext } from 'context';
import { AUTHENTICATION_SUCESSFULL } from 'context/types/Auth.types';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import http from 'utils/http';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [phone, setPhone] = useState('');

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
        <div>
           <form onSubmit={onSubmitHanlder}>
                <input type="text" placeholder="name" name="name" value={name} onChange={eve => setName(eve.target.value)} />
                <input type="email" placeholder="email" name="email" value={email} onChange={eve => setEmail(eve.target.value)} />
                <input type="numeric" placeholder="phone" name="phone" value={phone} onChange={eve => setPhone(eve.target.value)} />
                <input type="password" placeholder="password" name="password" value={password} onChange={eve => setPassword(eve.target.value)} />
                <input type="password" placeholder="confirm password" name="confirm_password" value={confPassword} onChange={eve => setConfPassword(eve.target.value)} />
                <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default Register
