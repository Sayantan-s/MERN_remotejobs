const ApiError = require('../helpers/ApiError');
const AuthUtils = require('../helpers/AuthUtils');

const isAuth = (req, res, next) => {
    const { token } = req.cookies;
    const metaData = await AuthUtils.decode_JWT({ token });
    if (!metaData) {
        return next(ApiError.customError(401, 'User unAuthorized!'));
    }
    req.user = metaData;
    next();
};

exports.isAuth = isAuth;
