import { useState } from 'react';

const isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

const crudReducer = ({ type, payload: { key, data } }) => {
    switch (type) {
        case 'SET':
        default:
            return localStorage.setItem(key, data);
        case 'GET':
            return localStorage.getItem(key);
        case 'DELETE':
            return localStorage.removeItem(key);
        case 'CLEAR':
            return localStorage.clear();
    }
};

const useLocalStorage = ({ key, initialValue }) => {
    const [persistedState, setPeristedState] = useState(() => {
        try {
            const val = crudReducer({
                type: 'GET',
                payload: { key }
            });
            return isJson(val) ? JSON.parse(val) : val ? val : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    return [persistedState, crudReducer]
};

export default useLocalStorage;
