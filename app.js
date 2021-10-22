const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const helmet = require('helmet');

const { PORT } = require('./config');

const { PageNotFoundError, PageError } = require('./middlewares/error');

// DATABASE CONNECTION

require('./helpers/init_mongo');

const app = express();
const port = PORT || 5000;

const middlewares = [
    helmet(),
    morgan('dev'),
    express.json(),
    cors({
        origin: 'http://localhost:3000',
        maxAge: 1000 * 60 * 60 * 24 * 365
    }),
    cookieParser()
    /*csrf({
        cookie: true,
    })*/
];

app.use(middlewares);

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/jobs', require('./routes/jobs.routes'));
app.use('/api/companies', require('./routes/company.routes'));
app.use('/api/qna', require('./routes/qna.routes'));
app.use('/api/utils', require('./routes/utils.routes'));

//app.use(express.static('client/build'));

app.use(PageNotFoundError);
app.use(PageError);

app.listen(port, (_) => {
    console.log('====================================');
    console.log(`server : ${process.pid} @ we are live on port ${port}`.toUpperCase());
    console.log('====================================');
});
