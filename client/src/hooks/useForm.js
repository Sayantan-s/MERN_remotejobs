const useForm = ({ state }) => {
    const [form, setForm] = useForm(state);

    let handleChange;

    if(typeof form === "object"){
        handleChange = eve => {

            const { name, value } = eve.target;

            setForm(prevState => ({
                ...prevState,
                [name] : value
            }))

        }
        const forSubmitHandler = (eve, cb) => {
            eve.preventDefault();
            return cb();
        }

        return [ form, handleChange, forSubmitHandler ];
    }

    handleChange = eve => eve.target.value;

    return [form, handleChange];
}

export default useForm;