const ApiError = require("../helpers/ApiError")

const PageError = (err,req, res, next) => {
    const status = err.status || 500; 
    return res.status(status).send({ message : err.message || 'Internal Server Error', status })
}

const PageNotFoundError = (req, res, next) => {
    const error = ApiError.notFoundError();
    next(error);
}

module.exports = { PageNotFoundError, PageError }