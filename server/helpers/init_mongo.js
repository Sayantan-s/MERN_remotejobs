const { MONGO_URI } = require('../config/index');
const mongoose = require("mongoose");

mongoose.connect(MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex: true,
    useFindAndModify : true
})

const db = mongoose.connection;

db.on('connected',_ => {
    console.log(`connected to db...`)
})

db.on('error', err => {
    console.log(err)
})

db.on('disconnected',_ => {
    console.log(`Disconnected from db`)
})


process.on('SIGINT', async () => { 
    await db.close();
    console.log("Byeeeeee.....");
    process.exit(0);
})