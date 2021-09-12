import { useState } from 'react';

const CREATE_CLIENTSIDE_ERROR = 'CREATE_CLIENTSIDE_ERROR';
const REMOVE_CLIENTSIDE_ERROR = 'REMOVE_CLIENTSIDE_ERROR';
const CREATE_SERVERSIDE_ERROR = 'CREATE_SERVERSIDE_ERROR';
const REMOVE_SERVERSIDE_ERROR = 'REMOVE_SERVERSIDE_ERROR';

const useError = () => {
    const [errors, setErrors] = useState({
        clientSideError: {
            status: false,
            message: ''
        },
        serverSideErrors: {
            status: false,
            message: ''
        }
    });
};
