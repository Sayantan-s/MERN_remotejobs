const crypto = require('crypto');

const accessControl = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET POST PUT PATCH DELTE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
};

const checkHeaders = (req, res, next) => {
    res.setHeader('X-Requested-Token', crypto.randomBytes(64).toString('hex'));
    next();
};

module.exports = checkHeaders;
