import axios from "../../node_modules/axios/index";

export default axios.create({
    baseURL : 'http://localhost:5000',
    headers : {
        'Content-Type': 'application/json'
    }
})