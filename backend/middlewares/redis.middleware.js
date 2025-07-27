const express = require('express');
const router = express.Router();
//const redis = require('redis');
const redisConnection = require('../redis/index.js');

router.use(async (req, res, next) =>{
  const client = await redisConnection();

  await client.connect();
  await client.set("foo", "we");
  const data = await client.get("foo");
  
  console.log(data);
  /*try {
    // Generate a unique cache key based on the request URL
    const cacheKey = `cache:${req.originalUrl}`;
    console.log('Cache key:', cacheKey);
    // Attempt to get the cached response from Redis
    const cachedResponse = await redis.get(cacheKey)
    
    if (cachedResponse) {
      // If cached response exists, send it
      return res.status(200).send(JSON.parse(cachedResponse));
    }
    
    // If not cached, proceed to the next middleware
    next();
  } catch (error) {
    console.error('Redis middleware error:', error);
    // In case of error, proceed to the next middleware
    next();
  }*/
});

module.exports = router;
