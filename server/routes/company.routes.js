const ApiError = require('../helpers/ApiError');
const { db } = require('../helpers/connectToDatabase');
const { company_validate } = require('../validator/job.validator');

const router = require('express').Router();

router
.route('/')
.get(async(req, res, next) => {
    try {
        const response = await db('jobs').find().toArray();
        
        return res.send({ data : response })

    } catch (error) {
        next(error);
    }
})
.post(async (req, res, next) => {
    console.log(req.body);
    try {
        const { error, ...data } = await company_validate.validateAsync(req.body);

        if(error){
            return next(ApiError.customError(400));
        }

        await db('jobs').insert(data);

        res.send({ message : "Sent!" })
    } catch (error) {
        next(error);
    }

})

module.exports = router;