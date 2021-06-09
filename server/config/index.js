require('dotenv').config()

const { PORT, MONGO_URI, MONGODB_DB } = process.env;

module.exports = { PORT, MONGO_URI, MONGODB_DB }