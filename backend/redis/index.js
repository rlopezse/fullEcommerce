const redis = require('redis');
//require('dotenv').config();

async function redisConnection() {
  const client = redis.createClient({
    url: "redis://127.0.0.1:6379"
  });

  client.on("error", (err) => console.error("Redis error:", err));

  return client;
}

module.exports = redisConnection;
