import { createContext } from "react";
import React from 'react'

export const AuthContext = createContext();

const authState = {
    loading : false,
    isAuth : false,
    error : ''
}

const reducer = (state = authState, { type, payload }) => {
    switch(type){
        case ""
    }
}

const AuthenticationContext = ({ children }) => {
    return (
       <AuthContext.Provider>
           {children}
       </AuthContext.Provider>
    )
}

export default AuthenticationContext
