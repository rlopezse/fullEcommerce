require('dotenv').config();
const redis = require('redis');

async function redisConnection() {
  const client = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
  });

  client.on("error", (err) => console.error("Redis error:", err));

  return client;
}

module.exports = redisConnection;
