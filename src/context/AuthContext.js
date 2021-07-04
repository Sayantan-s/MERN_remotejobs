import { createContext, useEffect, useReducer } from "react";
import React from 'react'
import { AUTHENTICATION_SUCESSFULL } from "./types/Auth.types";

export const AuthContext = createContext();

const userMetaData = JSON.parse(localStorage.getItem('user_meta'));

const authState = {
    loading : false,
    data : userMetaData,
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

            console.log(payload);
    
            localStorage.setItem('user_meta', JSON.stringify(payload));

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
                data : null,
                error : payload
            }
        default : return state;
    }
}

const AuthenticationContext = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, authState);

    const isAuthenticated = () => {
        if(!state.data || (!state.data.token.access || !state.data.expiry)) return false;
        return new Date().getTime() / 1000 < state.data.expiry;
    }

    console.log(isAuthenticated());

    return (
       <AuthContext.Provider value={{ state, dispatch, isAuthenticated }}>
           {children}
       </AuthContext.Provider>
    )
}

export default AuthenticationContext
