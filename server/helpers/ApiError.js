const http = require('http');

http.STATUS_CODES

class ApiError extends Error{
    constructor(status, message){
        super();
        this.status = status;
        this.message = message;
    }
}

