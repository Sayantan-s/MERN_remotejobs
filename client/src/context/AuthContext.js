import { createContext, useEffect, useReducer } from 'react';
import React from 'react';
import http from 'utils/http';
import axios from 'axios';

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

            return {
                ...state,
                loading: false,
                data: decodedPayload,
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

    useEffect(() => {
        if (isAuthenticated()) {
            http.interceptors.request.use(
                async (config) => {
                    try {
                        const res = await axios.get('/utils/refresh');
                        console.log(res);
                    } catch (err) {
                        console.log(err.response);
                    }
                    return config;
                },
                (error) => Promise.reject(error)
            );
        }
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ state, dispatch, isAuth: isAuthenticated() }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationContext;
