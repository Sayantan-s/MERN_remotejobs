const joi = require('joi');

const company_validate = joi.object({
    
    companyImageUrl: joi.string().required(),

     companyName: joi.string().required(),

     typeOfCorporation:joi.string().required(),

     companySize: joi.string().required(),

     companyAddress:joi.string().required(),

     raised: joi.number().integer().required(),

     isDefault : joi.boolean()
})

module.exports = { company_validate }