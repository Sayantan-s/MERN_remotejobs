const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const cookieParser= require("cookie-parser");
const csrf= require("csurf");
const crypto = require('crypto');



const { PORT } = require("./config/index");

const authRoutes = require("./routes/auth.routes");
const jobsRoutes = require("./routes/jobs.routes");
const companyRoutes = require("./routes/company.routes");

const { PageNotFoundError, PageError } = require("./middlewares/error");
const qnaRoute = require("./routes/qna.routes");


// DATABASE CONNECTION

require('./helpers/init_mongo');

const app = express();
const port = PORT || 8000;

app.use((req,res,next) => {
    console.log(req.headers);
    next();
})

const middlewares = [
    morgan('dev'),
    express.json(),
    cors({ origin : 'http://localhost:3000' }),
    cookieParser(),
    /*csrf({
        cookie : true
    })*/
]

app.use(middlewares)

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/qna', qnaRoute)

app.use(PageNotFoundError);
app.use(PageError);
 
app.listen(port, _=> {
    console.log('====================================');
    console.log(`we are live on port ${port}`.toUpperCase());
    console.log('====================================');
}) 