const express = require("express");
const morgan = require("morgan");
const { PORT } = require("./config/index");
const authRoutes = require("./routes/auth.routes");
const jobsRoutes = require("./routes/jobs.routes");

const cors = require("./middlewares/helpers");
const { connectDb } = require("./helpers/connectToDatabase");

const app = express();
const port = PORT || 8000;

const middlewares = [
    morgan('dev'),
    express.urlencoded({ extended : true }),
    express.json(),
    cors
]

app.use(middlewares)

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobsRoutes);
 

connectDb('jobs',() => {
    app.listen(port, _=> {
        console.log('====================================');
        console.log(`we are live on port ${port}`.toUpperCase());
        console.log('====================================');
    }) 
})  