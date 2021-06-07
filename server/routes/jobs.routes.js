const router = require('express').Router();

router
.get('/jobs',async (req, res, next) => {
    return res.status(200).send({
        data : [
            {
                role : 'UI/UX designer'
            }
        ]
    })
})

module.exports = router;