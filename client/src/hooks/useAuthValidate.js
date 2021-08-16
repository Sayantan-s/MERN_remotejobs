import { useState } from "react";

const useAuthValidate = ({ requirements }) => {

    let errorState = {};

    Object.keys(requirements).forEach(prop => {
        errorState = {
            ...errorState,
            [prop] : ''
        }
    });

    const [ danger, setDanger ] = useState(errorState);

    const validator = ({ key, val }) => {
        let error = '';

        const req = requirements[key]

        if(req.shouldNotBeEmpty && val.trim() === ''){
            error = req.errorMsg || `${key} cannot be empty!`
        }

        else if(req.len && req.len.min && val < req.len.min){
            error = req.errorMsg || `${key} should not be lesser than ${req.len.min}`; 
        }

        else if(req.len && req.len.max && val > req.len.max){
            error = req.errorMsg || `${key} should not be more than ${req.len.max}`; 
        }

        else if((req.len && req.len.min && val < req.len.min) && (req.len && req.len.max && val > req.len.max)){
            error = req.errorMsg || `${key} should be ${req.len.min}-${req.len.max} long.`
        }
    
        else if(req.contains && !val.includes(req.contains)){
            error = req.errorMsg || `Please enter your ${key} correctly!`
        }

        return error;
    }

    return [ danger, setDanger, validator ]

}

export default useAuthValidate;