import { createContext, useReducer } from "react";
import React from 'react'

export const AuthContext = createContext();

const authState = {
    loading : false,
    data : null,
    error : ''
}

const reducer = (state = authState, { type, payload }) => {
    switch(type){
        case "AUTHENTICATING":
            return {
                ...state,
                loading : true,
                data : null,
                error : ''
            };
        case "AUTHENTICATION_SUCESSFULL":
            return {
                ...state,
                loading : false,
                data : payload,
                error : ''
            };
        case "AUTHENTICATION_FAILED":
            return {
                ...state,
                loading : false,
                isAuth : false,
                error : payload
            }
        default : return state;
    }
}

const AuthenticationContext = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, authState)
    return (
       <AuthContext.Provider value={{ state, dispatch }}>
           {children}
       </AuthContext.Provider>
    )
}

export default AuthenticationContext
