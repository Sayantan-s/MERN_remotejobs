const Joi = require('joi');

const registerValidator = Joi.object({
    name : Joi.string().required(),

    email : Joi.string().email().required(),

    password : Joi.string().required(),

    phone : Joi.string().required()
})

module.exports =  { registerValidator } 