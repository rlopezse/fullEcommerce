const express = require('express');
const router = express.Router();
const redisConnection = require('../redis/index.js');

router.use(async (req, res, next) =>{
  try {
    const client = await redisConnection();
    await client.connect();
    const data = await client.get("products");
    if(data) {
      return res.status(200).json({ message: 'Data retrieved from Redis', data: JSON.parse(data) }); 
    }
    next();
  } catch (error) {
    next();
  }
});

module.exports = router;
