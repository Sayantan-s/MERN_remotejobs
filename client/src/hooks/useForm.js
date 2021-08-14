import { useState } from "react";
import useAuthValidate from "./useAuthValidate";

const useForm = ({ state, validation }) => {
    const [form, setForm] = useState(state);

    const [ err, setErr, validator ] = useAuthValidate({
        requirements : validation || {}
     });

    let handleChange;

    if(typeof form === "object"){
        handleChange = eve => {

            const { name, value } = eve.target;

            setForm(prevState => ({
                ...prevState,
                [name] : value
            }))

            setErr(prevState => ({
                ...prevState,
                [name] : ''
            }))

        }
        const formSubmitHandler = (eve, cb) => {
            eve.preventDefault();
            let data = {};
            const formData = new FormData(eve.target);

            let errorStatus;

            for (let [key, value] of formData.entries()) {
                errorStatus = false;
                data = {
                    ...data,
                    [key]: value
                };
                const error = validator({ key, val: value });
                if(error) errorStatus = true;
                setErr(prevState => ({
                    ...prevState,
                    [key] : error
                }))

            }
            return cb(data, errorStatus);
        }

        return [ form, handleChange, formSubmitHandler, err ];
    }

    handleChange = eve => eve.target.value;

    return [form, handleChange];
}

export default useForm;