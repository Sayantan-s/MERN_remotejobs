import { useState } from "react";

const useFetch = ({
    initialState : [],
    forAuth = false,
    url = '/jobs'
}) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        (async() => {
            const { data, status, headers } = await http.get(url);
            if(forAuth) setData
            if (status === 200){
                setData(data.data)
            }
        })()
    },[])
}