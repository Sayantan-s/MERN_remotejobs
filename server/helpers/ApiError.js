class ApiError extends Error{
    constructor(status, message){
        super();
        this.status = status;
        this.message = message;
    }

    static customError(status = 500, message){
        const error = new ApiError(status, 'Something went wrong!' || message);
        return error;
    }

    static notFoundError(status = 404, message = "Page not found"){
        return ApiError.customError(status, message);
    }

}

module.exports = ApiError
