import { useState } from "react";

const useForm = (state) => {
    const [form, setForm] = useState(state);

    let handleChange;

    if(typeof form === "object"){
        handleChange = eve => {

            const { name, value } = eve.target;

            setForm(prevState => ({
                ...prevState,
                [name] : value
            }))

        }
        const formSubmitHandler = (eve, cb) => {
            eve.preventDefault();
            return cb();
        }

        return [ form, handleChange, formSubmitHandler ];
    }

    handleChange = eve => eve.target.value;

    return [form, handleChange];
}

export default useForm;