import axios from "../../node_modules/axios/index";

export default axios.create({
    baseURL : 'http://localhost:7200/api',
    headers : {
        'Content-Type': 'application/json'
    }
})