import css from '@styled-system/css';
import Email from 'assets/icons/Email';
import TextField from 'components/library/TextField.component';
import useToggle from 'hooks/useToggle';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled, { useTheme } from 'styled-components'



const Company = () => {

    const theme = useTheme();

    const [ toggle, handleToggle ] = useToggle();

    const [ email, setEmail ] = useState();
    
    const handleChange = eve => setEmail(eve.target.value);

    return (
        <div>
            <svg onClick={handleToggle} width={60} height={60} viewBox="0 0 24 24" fill={toggle ? theme.colors.blue[6] : theme.colors.blue[0]} xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12.96V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={toggle ? theme.colors.blue[6] : theme.colors.text[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                { 
                    toggle && 
                    <>
                        <path d="M15 10.38L16.12 9.25" stroke={theme.colors.blue[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.88086 12L10.6209 14.75L13.1709 12.21" stroke={theme.colors.blue[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                }
            </svg>
            <svg width={60} height={60} viewBox="0 0 24 24" fill={theme.colors.blue[6]} xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"  stroke={theme.colors.blue[6]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 10.38L16.12 9.25"  stroke={theme.colors.blue[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.88086 12L10.6209 14.75L13.1709 12.21"  stroke={theme.colors.blue[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <TextField 
                variant="normal"
                type="email" 
                placeholder="Your Email" 
                name="email" 
                value={email} 
                onChange={handleChange} 
                before
                danger={""}
                iconBefore={Email}
            />
        </div>
    )
}

export default Company

