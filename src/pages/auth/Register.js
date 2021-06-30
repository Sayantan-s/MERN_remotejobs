import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [phone, setPhone] = useState('')

    const onSubmitHanlder = eve => {
        eve.preventDefault()
        const data = new FormData(eve.target);
        for(let i of data.entries()){
            console.log(i);
        }
    } 
    return (
        <div>
           <form onSubmit={onSubmitHanlder}>
                <input type="text" placeholder="name" value={name} onChange={eve => setName(eve.target.value)} />
                <input type="email" placeholder="email" value={email} onChange={eve => setEmail(eve.target.value)} />
                <input type="numeric" placeholder="phone" value={phone} onChange={eve => setPhone(eve.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={eve => setPassword(eve.target.value)} />
                <input type="password" placeholder="confirm password" value={confPassword} onChange={eve => setConfPassword(eve.target.value)} />
                <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default Register
