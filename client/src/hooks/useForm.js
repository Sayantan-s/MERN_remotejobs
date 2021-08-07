import { useState } from "react";

const useForm = (state) => {
    const [form, setForm] = useState(state);

    if(typeof form === "object"){
        const handleChange = eve => {

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

    const handleChange = eve => eve.target.value;

    return [form, handleChange];
}

export default useForm;