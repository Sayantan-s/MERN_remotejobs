const ApiError = require("../helpers/ApiError")

const PageError = (err,req, res, next) => {
    const { message, code } = ApiError.customError();
    return res.send({ message, status : code })
}

const PageNotFoundError = (req, res, next) => {
    const error = ApiError.notFoundError();
    next(error);
}

module.exports = { PageNotFoundError, PageError }