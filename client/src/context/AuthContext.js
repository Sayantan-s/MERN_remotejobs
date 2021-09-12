import { createContext, useReducer } from 'react';
import React from 'react';
import http from 'utils/http';

export const AuthContext = createContext();

const userMetaData = JSON.parse(localStorage.getItem('user_meta'));

const authState = {
    loading: false,
    data: userMetaData,
    error: ''
};

const reducer = (state = authState, { type, payload }) => {
    switch (type) {
        case 'AUTHENTICATING':
            return {
                ...state,
                loading: true,
                data: null,
                error: ''
            };
        case 'AUTHENTICATION_SUCESSFULL':
            const { access_token } = payload;

            const decodedPayload = JSON.parse(atob(access_token.split('.')[1]));

            http.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

            console.log(decodedPayload);

            //localStorage.setItem('user_meta', JSON.stringify({  expiry, role }));

            return {
                ...state,
                loading: false,
                data: payload,
                error: ''
            };
        case 'AUTHENTICATION_FAILED':
            return {
                ...state,
                loading: false,
                data: null,
                error: payload
            };
        case 'LOGOUT_USER':
            localStorage.removeItem('user_meta');

            return {
                ...state,
                loading: false,
                data: null,
                error: ''
            };
        default:
            return state;
    }
};

const AuthenticationContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, authState);

    const isAuthenticated = () => {
        if (!state.data || !state.data.expiry) return false;
        return new Date().getTime() / 1000 < state.data.expiry;
    };

    return (
        <AuthContext.Provider value={{ state, dispatch, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationContext;
