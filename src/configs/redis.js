const Redis = require('redis');
const RedisStore = require("connect-redis").default;

const RedisClient = Redis.createClient({
    url: 'redis://localhost:6379'
});

RedisClient.on('connect', () => {
    console.log('Connected to Redis')
})

RedisClient.on('error', () => {
    console.log('Error connect to Redis')
})

// RedisClient.connect();

// const redisStore = new RedisStore({ client: RedisClient })

module.exports = {
    RedisClient,
    // RedisStore: redisStore,
}