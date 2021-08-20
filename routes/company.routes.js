const ApiError = require('../helpers/ApiError');
const { db } = require('../helpers/connectToDatabase');
const Company = require('../models/Company.model');
const { company_validate } = require('../validator/job.validator');

const router = require('express').Router();

router
.route('/')
.get(async(req,res,next) => {
    try {
        const companies = await Company
        .find()
        .populate("jobs")
        .select('logo typeOfCorporation info jobs')
        .limit(3);
        if(!companies.length) return next(ApiError.customError(400, 'Sorry something went wrong!'));
        res.send({ data : companies })
    } catch (error) {
        next(error)
    }
})
.post(async(req, res, next) => {
    try{
        const result = await Company.create({ ...req.body });
        if(!result) return next(ApiError.customError(400, 'Failed to create a company!'));
        return res.status(201).send({ message : 'Company created successfully!' })
    }
    catch(err){
        next(err);
    }
})

module.exports = router;