const { default: User } = require('../models/User.model');
const { registerValidator } = require('../validator/auth.validator');

const router = require('express').Router();

router.post('/register',async(req, res, next) => {
    try {

        const { error,name, email, password, phone } = await registerValidator.validateAsync(req.body);

        //console.log(error);

        if(error){
            return next(error);
        }

        const user = new User(name, email, password, phone);

        await user.save();
        
        return res.send({ message: "Hello register" });

    } catch (error) {
        console.log(error);
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