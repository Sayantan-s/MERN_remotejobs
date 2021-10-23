const ApiError = require('../helpers/ApiError');
const AuthUtils = require('../helpers/AuthUtils');
const User = require('../models/user.model');
const { registerValidator, loginValidator } = require('../validator/auth.validator');
const { getGoogleOAuthURL, getGoogleUser } = require('../services/init_GoogleOAuth');
const client = require('../helpers/helper');
const router = require('express').Router();

router.post('/register', async (req, res, next) => {
    try {
        const { error, name, email, password } = await registerValidator.validateAsync(req.body);

        if (error) {
            return next(error);
        }

        const isAlreadyAUser = await User.exists({ email });

        if (isAlreadyAUser)
            return next(ApiError.customError(409, "Someone's already using this email!"));

        const user = await User.create({ name, email, password });

        if (!user) return next(ApiError.customError(400, 'Failed to create your account!'));

        const { access_token, refresh_token } = await AuthUtils.createAuthTokens({
            payload: {
                _id: user._id,
                role: user.type,
                name: user.name
            }
        });

        client.set(refresh_token, user._id, (err, reply) => {
            if (err) return ApiError.customError(400, 'Failed to create account!');
            console.log(reply);
            res.setHeader(`x-access-token`, access_token);
            res.cookie('refresh', refresh_token);
            res.status(201).send({ message: 'Your account has been created successfully!' });
        });
    } catch (error) {
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const { error, email, password } = await loginValidator.validateAsync(req.body);

        if (error) return next(error);

        const user = await User.findOne({ email }).select('password type').lean();

        if (!isAlreadyAUser) return next(ApiError.customError(403, 'Invalid email or password!'));

        const isPasswordValid = await AuthUtils.verifyPassword(password, user.password);

        if (!isPasswordValid) return next(ApiError.customError(403, 'Invalid email or password!'));

        const { access_token, refresh_token } = await AuthUtils.createAuthTokens({
            payload: {
                _id: user._id,
                role: user.type,
                name: user.name
            }
        });

        client.set(refresh_token, user._id, (err, reply) => {
            if (err) return ApiError.customError(400, 'Failed to create account!');
            console.log(reply);
            res.setHeader(`x-access-token`, access_token);
            res.cookie('refresh', refresh_token);
            res.status(200).send({ message: 'You are successfully logged in!' });
        });
    } catch (error) {
        next(error);
    }
});

router.post('/logout', async (req, res, next) => {
    console.log(req.cookie);
    return res.send({ message: 'Hello logout' });
});

router.get('/google-auth', async (req, res, next) => {
    res.status(200).send({
        url: getGoogleOAuthURL()
    });
});

router.get(`/google/callback`, async (req, res, next) => {
    const { code } = req.query;

    const userInfo = await getGoogleUser({ code });

    console.log(userInfo);

    res.redirect('http://localhost:3000/jobs');
});

module.exports = router;
