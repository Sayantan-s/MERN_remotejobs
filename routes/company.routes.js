const ApiError = require('../helpers/ApiError');
const Company = require('../models/Company.model');
const { company_validate } = require('../validator/job.validator');

const router = require('express').Router();

router
.route('/')
.get(async(req,res,next) => {

    let companies;

    try {

        if(req.query){

            const { page, skip, limit } = req.query;

            companies = await Company.aggregate([
                { $project : { 
                        logo: 1, 
                        typeOfCorporation: 1, 
                        info: 1, 
                        jobs : { 
                            $size : '$jobs' 
                        } 
                    }
                },
                { $limit : 3 }
            ])
    
        }
        else{
            companies = await Company.find()
            .populate("jobs")
            .select('logo typeOfCorporation info jobs')
        }

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

router.get('/:company', async(req,res, next) => {
    const { company } = req.params;
    const [ name, _id ] = company.split('_');
    try{
        const data = await Company
        .findOne({ name })
        .populate({
            path : 'jobs',
            select : 'roleInfo.role roleInfo.jobtype roleInfo.location roleInfo._id ',
            populate : {
                path : 'companyInfo',
                select : 'logo name'
            }
        }).limit(3)

        if(!data) return next(ApiError.customError(409, "Something went wrong!"))
        res.send({ data })
    }
    catch(err){
        next(err)
    }
})

module.exports = router;