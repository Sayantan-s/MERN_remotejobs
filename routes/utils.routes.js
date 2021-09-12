const ApiError = require('../helpers/ApiError');
const AuthUtils = require('../helpers/AuthUtils');
const { promisify } = require('util');
const redis = require('redis');
const User = require('../models/user.model');

const client = redis.createClient();

client.get = promisify(client.get).bind(client);

const router = require('express').Router();

router.use('/refresh', async (req, res, next) => {
    const { refresh } = req.cookies;

    let access_token;

    try {
        if (!refresh) {
            next(ApiError.customError(401, 'You are not logged in!'));
        }
        const userId = await client.get(refresh + '');
        if (!userId) {
            return next(ApiError.customError(401, 'You are not logged in!'));
        }

        const getPayloadFromCache = await client.get(userId + '');

        if (!getPayloadFromCache) {
            const user = await User.findOne({ _id: userId }).select('role name').lean();

            if (!user) {
                return next(ApiError.customError(401, 'You are not logged in!'));
            }

            access_token = await AuthUtils.generate_JWT({
                payload: {
                    _id: user._id,
                    role: user.type,
                    name: user.name
                }
            });

            console.log('USING MONGO');

            client.set(userId + '', JSON.stringify(user));
        } else {
            access_token = await AuthUtils.generate_JWT({
                payload: JSON.parse(getPayloadFromCache)
            });

            console.log('USING CACHE FROM REDIS');
        }

        res.setHeader(`x-access-token`, access_token);

        res.status(201).send({ message: 'Generated new access tokens!' });
    } catch (err) {
        next(err);
    }
});

router.get('/csrf', (req, res) => {
    res.send({ csrfToken: req.csrfToken() });
});

module.exports = router;
