const { MongoClient } = require('mongodb');
const { MONGO_URI } = require('../config/index');

let _db;

const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connectDb = async (dbName, cb) => {
    try {
        await client.connect();

        _db = await client.db(dbName);

        console.log('====================================');
        console.log(`Connected to mongodb database --> ${dbName}`);
        console.log('====================================');

        return cb();
    } catch (error) {
        console.log(error);
    } finally {
        process.on('SIGINT', async () => {
            await client.close();
            console.log(`Disconnected from mongodb database --> ${dbName}`);
            process.exit(0);
        });
    }
};

const db = (collection) => {
    if (_db) {
        return _db.collection(collection);
    }
    return new Error('Error connecting to the db...');
};

module.exports = { connectDb, db };
