const accessControl = (req, res, next) => {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'POST PUT PATCH DELTE');
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}

module.exports = accessControl;