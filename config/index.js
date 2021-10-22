require('dotenv').config();

const {
    PORT,
    MONGO_URI,
    MONGODB_DB,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    REDIS_HOSTNAME,
    REDIS_PORT,
    REDIS_PASSWORD
} = process.env;

module.exports = {
    PORT,
    MONGO_URI,
    MONGODB_DB,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    REDIS_HOSTNAME,
    REDIS_PORT,
    REDIS_PASSWORD
};
