import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    return (
        <div>
           <form>
            <input type="email" placeholder="email" value={email} onChange={eve => setEmail(eve.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={eve => setPassword(eve.target.value)} />
           </form>
        </div>
    )
}

export default Login
