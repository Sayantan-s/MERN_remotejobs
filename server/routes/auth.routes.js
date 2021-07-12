const { ObjectID } = require('mongodb');
const ApiError = require('../helpers/ApiError');
const AuthUtils = require('../helpers/AuthUtils');
const User = require('../models/User.model');
const { registerValidator, loginValidator } = require('../validator/auth.validator');

const router = require('express').Router();

router.post('/register',async(req, res, next) => {
    console.log(req.body)
    try {

        const { error,name, email, password, phone } = await registerValidator.validateAsync(req.body);

        if(error){
            return next(error);
        }

        const isAlreadyAUser = await User.exists({ email });

        if(isAlreadyAUser) return next(ApiError.customError(409, "Someone's already using this email!"))

        const hashPassword = await AuthUtils.hashPassword(password);

        const user = await new User(name, email, hashPassword, phone).save();

        if(user.result.ok === 1){   //check 1
            
            const { type, _id } = user.ops[0];

            const { access_token, refresh_token } = await AuthUtils.createAuthTokens({
                payload : {
                    _id : ObjectID(_id),
                    role : type
                }
            })

            const { exp, role } = await AuthUtils.decode_JWT({ token : access_token });

            res.cookie('token', access_token, {
                httpOnly : true
            })
            
            return res.status(201).send({ 
                message : 'user created',
                access_token, 
                refresh_token,
                expiry : exp,
                role 
            });
        
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
        
        const isAlreadyAUser = await User.exists({ email });
        
        if(!isAlreadyAUser) return next(ApiError.customError(403, "Invalid email or password!"))

        const user = await User.findOne({ email }, { projections : { password : 1, type : 1 } });

        const isPasswordValid = await AuthUtils.verifyPassword(password, user.password);

        if(!isPasswordValid) return next(ApiError.customError(403, 'Invalid email or password!'));

        const { access_token, refresh_token } = await AuthUtils.createAuthTokens({
            payload : {
                _id : ObjectID(user._id),
                role : user.type
            }
        })

        const { exp, role } = await AuthUtils.decode_JWT({ token : access_token });

        res.cookie('token', access_token, {
            httpOnly : true
        })

        return res.send({
            message : 'user successfully logged in!', 
            access_token, 
            refresh_token,
            expiry : exp,
            role 
        });   
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