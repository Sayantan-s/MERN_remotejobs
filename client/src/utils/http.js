import axios from "../../node_modules/axios/index";

export default axios.create({
    baseURL : '/api',
    headers : {
        'Content-Type': 'application/json'
    }
})