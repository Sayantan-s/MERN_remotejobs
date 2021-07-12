const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const cookieParser= require("cookie-parser");


const { PORT, MONGODB_DB } = require("./config/index");

const authRoutes = require("./routes/auth.routes");
const jobsRoutes = require("./routes/jobs.routes");
const companyRoutes = require("./routes/company.routes");

const { connectDb } = require("./helpers/connectToDatabase");
const { PageNotFoundError, PageError } = require("./middlewares/error");
const AuthUtils = require("./helpers/AuthUtils");
const ApiError = require("./helpers/ApiError");
const csrf= require("csurf");

const app = express();
const port = PORT || 8000;

const middlewares = [
    morgan('dev'),
    express.json(),
    cors({ origin : 'http://localhost:3000' }),
    cookieParser(),
    csrf({
        cookie : true
    })
]

app.use(middlewares)

app.use(async (req, res, next) => {
    console.log(req.cookies.token)
    const { token } = req.cookies;
    const metaData = await AuthUtils.decode_JWT({ token })
    if(!metaData){
        return next(ApiError.customError(401, 'User unAuthorized!'))
    }
    req.user = metaData;
    next();
})

app.get('/api/csrf', (req, res ) => {
    res.send({ csrfToken : req.csrfToken() });
})

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/companies', companyRoutes);

app.use(PageNotFoundError);
app.use(PageError);
 

connectDb(MONGODB_DB,() => {
    app.listen(port, _=> {
        console.log('====================================');
        console.log(`we are live on port ${port}`.toUpperCase());
        console.log('====================================');
    }) 
})  