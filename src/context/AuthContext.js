import { createContext, useEffect, useReducer } from "react";
import React from 'react'
import { AUTHENTICATION_SUCESSFULL } from "./types/Auth.types";

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
            const { isAuth, token } = payload;

            if(!isAuth){
                localStorage.setItem('isAuthenticated', isAuth);
                localStorage.setItem('access_token', token.access);
                localStorage.setItem('refresh_token', token.refresh)
            }

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

    useEffect(() => {
        if(state.data){
                return dispatch({ type : AUTHENTICATION_SUCESSFULL, payload : {
                    isAuth : localStorage.getItem('isAuthenticated'),
                    token : {
                        access : localStorage.getItem('access_token'),
                        refresh : localStorage.getItem('refresh_token')
                    }
                }   
            })
        }
    },[])

    return (
       <AuthContext.Provider value={{ state, dispatch }}>
           {children}
       </AuthContext.Provider>
    )
}

export default AuthenticationContext
