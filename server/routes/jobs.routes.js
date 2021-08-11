const router = require('express').Router();
const Jobs = require('../models/Jobs.models');
const ApiError = require('../helpers/ApiError');
const Company = require('../models/Company.model');

router
.route('/')
.get(async (req, res, next) => {
    return res.status(200).send({
        data : [
            {
                role : 'UI/UX designer'
            }
        ]
    })
})
.post(async(req,res, next) => {
    try {

        const { company, roleInfo  } = req.body;

        const rolePresence = await Jobs.exists({ 
            company : {
                name : company.name
            },
            roleInfo : {
                role : roleInfo.role
            }
        })

        if(rolePresence) return next(ApiError.customError(403, 'Job already exists for the company!'));

        const createJob = await Jobs.create({ company, roleInfo })

        if(!createJob) return next(ApiError.customError(409, 'Failed to create the job, try again!'));

        const comp = await Company.findOne({ 
            name : createJob.company.name
        })

        if(!comp){
            await Jobs.findByIdAndDelete(createJob._id);
            return next(ApiError.customError(409, 'Something went wrong, try again!'));
        }

        comp.jobs.push(createJob._id);

        await comp.save();
        
        res.status(201).send({ message : 'Job Successfully Created!' });
    } catch (error) {
        next(error)
    }
})


module.exports = router;