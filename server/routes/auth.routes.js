const { ObjectID } = require('mongodb');
const { REFRESH_TOKEN } = require('../config/index');
const AuthUtils = require('../helpers/AuthUtils');
const User = require('../models/User.model');
const { registerValidator } = require('../validator/auth.validator');

const router = require('express').Router();

router.post('/register',async(req, res, next) => {
    try {

        const { error,name, email, password, phone } = await registerValidator.validateAsync(req.body);

        if(error){
            return next(error);
        }

        const user = await new User(name, email, password, phone).save();

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

            return res.send({ access_token, refreshToken });
        
        }

        else return next(error); //check 2
    

    } catch (error) {
        next(error);
    }
})

router.post('/login',async(req, res, next) => {
    return res.send({ message: "Hello login" });
})

router.post('/refresh',async(req, res, next) => {
    return res.send({ message: "Hello refresh" });
})

router.post('/logout',async(req, res, next) => {
    return res.send({ message: "Hello logout" });
})

module.exports = router