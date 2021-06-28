const { ObjectID } = require('mongodb');
const { REFRESH_TOKEN } = require('../config/index');
const { default: ApiError } = require('../helpers/ApiError');
const AuthUtils = require('../helpers/AuthUtils');
const User = require('../models/User.model');
const RefreshToken = require('../models/utility models/RefreshToken.model');
const { registerValidator, loginValidator } = require('../validator/auth.validator');

const router = require('express').Router();

router.post('/register',async(req, res, next) => {
    try {

        const { error,name, email, password, phone } = await registerValidator.validateAsync(req.body);

        if(error){
            return next(error);
        }

        const hashPassword = await AuthUtils.hashPassword(password);

        const user = await new User(name, email, hashPassword, phone).save();

        if(user.result.ok === 1){   //check 1
            
            const { type, _id } = user.ops[0];

            const access_token = await AuthUtils.generate_JWT({
                payload : {
                    _id : ObjectID(_id),
                    role : type
                }
            })

            const refreshToken = await AuthUtils.generate_JWT({
                payload : {
                    _id : ObjectID(_id),
                    role : type
                },
                expiry : '1yr',
                SECRET : REFRESH_TOKEN
            })

            await RefreshToken.create({ token : refreshToken });

            return res.send({ access_token, refreshToken });
        
        }

        else return next(ApiError.customError(400, 'Failed to create your account!')); //check 2
    

    } catch (error) {
        next(error);
    }
})

router.post('/login',async(req, res, next) => {
    try {

        const { error, email, password } = await loginValidator.validateAsync(req.body);

        if(error)
            return next(error);

        const user = await User.findOne({ email }, { projections : { password : 1, type : 1 } });

        console.log(user);

        const isPasswordValid = await AuthUtils.verifyPassword(password, user.password);

        if(!isPasswordValid) return next(ApiError.customError(422, 'Invalid email or password!'));

        const access_token = await AuthUtils.generate_JWT({
            payload : {
                _id : ObjectID(user._id),
                role : user.type
            }
        })

        const refreshToken = await AuthUtils.generate_JWT({
            payload : {
                _id : ObjectID(user._id),
                role : user.type
            },
            expiry : '1yr',
            SECRET : REFRESH_TOKEN
        })

        await RefreshToken.create({ token : refreshToken });

        return res.send({ access_token, refreshToken });   
    } catch (error) {
        next(error);
    }
})

router.post('/refresh',async(req, res, next) => {
    return res.send({ message: "Hello refresh" });
})

router.post('/logout',async(req, res, next) => {
    return res.send({ message: "Hello logout" });
})

module.exports = router