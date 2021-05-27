const router = require('express').Router();

router.post('/register',async(req, res, next) => {
    return res.send({ message: "Hello register" });
})

router.post('/login',async(req, res, next) => {
    return res.send({ message: "Hello login" });
})

router.post('/refresh',async(req, res, next) => {
    return res.send({ message: "Hello refresh" });
})

router.post('/logout',async(req, res, next) => {
    return res.send({ message: "Hello logout" });
})

module.exports = router