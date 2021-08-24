import { useState } from "react";

const useFetch = ({
    initialState : []
}) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        (async() => {
            const { data, status, headers } = await http.get('/jobs');
            if (status === 200) setData(data.data);
        })()
    },[])
}