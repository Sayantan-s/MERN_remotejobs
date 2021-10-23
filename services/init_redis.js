const redis = require('redis');
const { REDIS_HOSTNAME, REDIS_PORT, REDIS_PASSWORD } = require('../config');
const { promisify } = require('util');

const client = redis.createClient({
    host: REDIS_HOSTNAME,
    port: REDIS_PORT,
    password: REDIS_PASSWORD
});

client.on('connect', () => console.log('Connecting to redis...'));

client.on('ready', () => console.log('Connected to redis and ready to use...'));

client.on('error', (err) => console.log(err.message));

client.on('end', () => console.log('Disconnected from redis...'));

process.on('SIGINT', () => client.quit());

const GET_ASYNC_CACHE = promisify(client.get).bind(client);
const SET_ASYNC_CACHE = promisify(client.set).bind(client);

module.exports = {  client, GET_ASYNC_CACHE, SET_ASYNC_CACHE };
 