const crypto = require('crypto');

const checkHeaders = (req, res, next) => {
    res.setHeader('X-Requested-Token', crypto.randomBytes(64).toString('hex'));
    next();
};

module.exports = checkHeaders;
