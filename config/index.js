require('dotenv').config();

const {
    PORT,
    MONGO_URI,
    MONGODB_DB,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
} = process.env;

module.exports = {
    PORT,
    MONGO_URI,
    MONGODB_DB,
    ACCESS_TOKEN,
    REFRESH_TOKEN
};
