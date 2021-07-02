const Joi = require('joi');

const registerValidator = Joi.object({
    name : Joi.string().required(),

    email : Joi.string().email().required(),

    password : Joi.string().required(),

    phone : Joi.string().required(),

    confirm_password: Joi.ref('password')
});

const loginValidator = Joi.object({

    email : Joi.string().email().required(),

    password : Joi.string().required()
})

module.exports =  { registerValidator, loginValidator } 