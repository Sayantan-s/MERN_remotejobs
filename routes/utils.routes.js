const router = require('express').Router();

router.use(async (req, res, next) => {
    console.log(req.cookies.token)
    const { token } = req.cookies;
    const metaData = await AuthUtils.decode_JWT({ token })
    if(!metaData){
        return next(ApiError.customError(401, 'User unAuthorized!'))
    }
    req.user = metaData;
    next();
})

router.get('/api/csrf', (req, res ) => {
    res.send({ csrfToken : req.csrfToken() });
})