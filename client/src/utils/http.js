import axios from 'axios';

const http = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

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

export default http;
