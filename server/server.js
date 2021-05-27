const express = require("express");
const morgan = require("morgan");
const { PORT } = require("./config/index");
const authRoutes = require("./routes/auth.routes");
const http = require('http');

const app = express();
const port = PORT || 8000;

const middlewares = [
    morgan('dev'),
    express.urlencoded({ extended : true }),
    express.json()
]

app.use(middlewares)

app.use('/auth', authRoutes)

console.log(http.STATUS_CODES); 
 
app.listen(port, _=> {
    console.log('====================================');
    console.log(`we are live on port ${port}`.toUpperCase());
    console.log('====================================');
})