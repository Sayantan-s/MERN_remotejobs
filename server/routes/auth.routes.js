const ApiError = require('../helpers/ApiError');
const AuthUtils = require('../helpers/AuthUtils');
const User = require('../models/user.model');
const { registerValidator, loginValidator } = require('../validator/auth.validator');

const router = require('express').Router();

router.post('/register',async(req, res, next) => {
    try {

        const { error,name, email, password, phone } = await registerValidator.validateAsync(req.body);

        if(error){
            return next(error);
        }

        const isAlreadyAUser = await User.exists({ email });

        if(isAlreadyAUser) return next(ApiError.customError(409, "Someone's already using this email!"))

        const user = await User.create({ name, email, password, phone });

        if(!user) return next(ApiError.customError(400, 'Failed to create your account!')); 

        const { access_token } = await AuthUtils.createAuthTokens({
            payload : { 
                _id : user._id,
                role : user.type
            }
        })

        const { exp, role } = await AuthUtils.decode_JWT({ token : access_token });

        res.cookie('token', access_token, {
            httpOnly : true
        })
        
        return res.status(201).send({ 
            message : 'user created',
            access_token, 
            expiry : exp,
            role 
        });    

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

        const user = await User.findOne({ email }).select('password type -__v').lean();

        const isPasswordValid = await AuthUtils.verifyPassword(password, user.password);

        if(!isPasswordValid) return next(ApiError.customError(403, 'Invalid email or password!'));

        const { access_token } = await AuthUtils.createAuthTokens({
            payload : {
                _id : user._id,
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
            expiry : exp,
            role 
        });   
    } catch (error) {
        next(error);
    }
})

router.post('/logout',async(req, res, next) => {
    return res.send({ message: "Hello logout" });
})

module.exports = router 