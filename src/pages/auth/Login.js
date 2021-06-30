import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const onSubmitHanlder = eve => {
        eve.preventDefault()
    } 

    return (
        <div>
           <form onSubmit={onSubmitHanlder}>
            <input type="email" placeholder="email" value={email} onChange={eve => setEmail(eve.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={eve => setPassword(eve.target.value)} />
            <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default Login
