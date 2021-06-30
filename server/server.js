const express = require("express");
const morgan = require("morgan");
const cors = require('cors')

const { PORT, MONGODB_DB } = require("./config/index");

const authRoutes = require("./routes/auth.routes");
const jobsRoutes = require("./routes/jobs.routes");
const companyRoutes = require("./routes/company.routes");

const { connectDb } = require("./helpers/connectToDatabase");
const { PageNotFoundError, PageError } = require("./middlewares/error");

const app = express();
const port = PORT || 8000;

const middlewares = [
    morgan('dev'),
    express.json(),
    cors({ origin : 'http://localhost:3000' })
]

app.use(middlewares)

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