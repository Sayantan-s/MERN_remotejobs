import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [phone, setPhone] = useState('')


    return (
        <div>
           <form>
                <input type="text" placeholder="name" value={name} onChange={eve => setName(eve.target.value)} />
                <input type="email" placeholder="email" value={email} onChange={eve => setEmail(eve.target.value)} />
                <input type="numeric" placeholder="phone" value={phone} onChange={eve => setPhone(eve.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={eve => setPassword(eve.target.value)} />
                <input type="password" placeholder="confirm password" value={confPassword} onChange={eve => setConfPassword(eve.target.value)} />
           </form>
        </div>
    )
}

export default Register
