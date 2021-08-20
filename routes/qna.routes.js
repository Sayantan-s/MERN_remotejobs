const { db } = require('../helpers/connectToDatabase');

const router = require('express').Router();

router.route('/')
.get(async (req, res) => {
    try {
        const getQuestions = await db('questions').aggregate([
            {
                $project : {
                    company : 0,
                    correct : 0
                }
            }
        ]).toArray() 

        res.send({ data : getQuestions });
    } catch (error) {
        next(error)
    }

})
.post(async (req, res) => {

})

module.exports = router 

