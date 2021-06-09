const { MongoClient } = require('mongodb');
const { MONGO_URI } = require('../config/index');

let db;

const client = new MongoClient(MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const connectDb = async(dbName,cb) => {
    try {
        await client.connect();

        db = await client.db(dbName);

        console.log('====================================');
        console.log(`Connected to mongodb database --> ${dbName}`);
        console.log('====================================');

        cb();

    } catch (error) {
        console.log(error);
    }
    finally {
        process.on('SIGINT', async() => {
            await client.close();
            console.log(`Disconnected from mongodb database --> ${dbName}`);
        })
    }
}

const getDb = () => {
    if(db){
        return db;
    }
    return new Error('Error connecting to the db...')
}

module.exports = { connectDb, getDb }