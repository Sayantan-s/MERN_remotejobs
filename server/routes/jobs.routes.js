const { db } = require('../helpers/connectToDatabase');

const router = require('express').Router();

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

    const post = await db('jobs').insertOne({ name : 'Sayantan' })

    res.send({
        response : post
    })
})

module.exports = router;