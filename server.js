const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const cookieParser= require("cookie-parser");
const csrf= require("csurf");
const numCPU = require('os').cpus().length;
const cluster = require('cluster');
const path = require('path')

const crypto = require('crypto');

const { PORT } = require("./config/index");

const { PageNotFoundError, PageError } = require("./middlewares/error");

// DATABASE CONNECTION

require('./helpers/init_mongo');

const app = express();
const port = PORT || 5000;

const middlewares = [
    morgan('dev'),
    express.json(),
    cors(),
    cookieParser(),
    /*csrf({
        cookie : true
    })*/
]

app.use(middlewares)

app.use('/api/auth', require("./routes/auth.routes"));
app.use('/api/jobs', require("./routes/jobs.routes"));
app.use('/api/companies', require("./routes/company.routes"));
app.use('/api/qna', require("./routes/qna.routes"))
app.use('/api/utils', require("./routes/utils.routes"))

//app.use(express.static('client/build'));

app.use(PageNotFoundError);
app.use(PageError); 
  
app.listen(port, _=> {
    console.log('====================================');
    console.log(`server : ${process.pid} @ we are live on port ${port}`.toUpperCase());
    console.log('====================================');
})
