const router = require('express').Router();
const Jobs = require('../models/Jobs.models');
const ApiError = require('../helpers/ApiError');
const Company = require('../models/Company.model');

router
    .route('/')
    .get(async (req, res, next) => {
        const { limit, home } = req.query;

        try {
            if (home === 'true') {
                const data = await Jobs.find()
                    .populate('companyInfo', 'logo name tagline')
                    .select(
                        `
                            companyInfo
                            roleInfo.role 
                            roleInfo.location 
                            roleInfo.jobtype
                            createdAt
                             `
                    )
                    .sort({ createdAt: -1 })
                    .limit(+limit);

                return res.status(200).send({ data });
            }

            const data = await Jobs.find().select(`-__v`);

            return res.status(200).send({ data });
        } catch (err) {
            next(err);
        }
    })
    .post(async (req, res, next) => {
        console.log(req.body);
        try {
            const { company, roleInfo } = req.body;

            const comp = await Company.findOne({
                name: company.name
            });

            if (!comp) next(ApiError.customError(404, 'There is no such company registered!'));

            const rolePresence = await Jobs.exists({
                'company.name': company.name,
                'roleInfo.role': roleInfo.role
            });

            if (rolePresence)
                next(ApiError.customError(403, 'Job already exists for the company!'));

            const createJob = await Jobs.create({ company, roleInfo, companyInfo: comp._id });

            if (!createJob) next(ApiError.customError(409, 'Failed to create the job, try again!'));

            comp.jobs.push(createJob._id);

            await comp.save();

            res.status(201).send({ message: 'Job Successfully Created!' });
        } catch (error) {
            next(error);
        }
    });

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    const jobId = id.split('_')[1];

    try {
        const jobData = await Jobs.findOne({ _id: jobId })
            .populate(
                'companyInfo',
                'website typeOfCorporation size established raised name culture.videoThumbnail'
            )
            .select('-company.tagline -tags -createdAt -updatedAt -__v')
            .lean();

        if (!jobData) return next(ApiError.customError(404, 'There is no such job!'));

        const findSimilarJobs = await Jobs.find({
            'roleInfo.dept': jobData.roleInfo.dept,
            _id: {
                $ne: jobData._id
            },
            $expr: { $rand: {} }
        })
            .populate('companyInfo', 'logo name')
            .select('-company -tags -createdAt -updatedAt -__v')
            .limit(2);

        if (!findSimilarJobs) return next(ApiError.customError(401, 'Something went wrong!'));

        res.send({ data: { ...jobData, similarJobs: findSimilarJobs } });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
