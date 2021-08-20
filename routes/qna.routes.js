const router = require('express').Router();
const Qna = require('../models/Qna.model')

router.route('/')
.get(async (req, res, next) => {
    try {
        const getQuestions = await Qna.find()

        res.send({ data : getQuestions });
    } catch (error) {
        next(error)
    }

})
.post(async (req, res) => {

})

module.exports = router 

