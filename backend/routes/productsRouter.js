const express = require('express');
const router = express.Router();
const mysql = require('../mysql/index.js');
const redisConnection = require('../redis/index.js');
const redisMiddleware = require('../middlewares/redis.middleware.js');

router.get('/products', redisMiddleware, async function (req, res) {
  var query = 'SELECT * FROM products';

  mysql.query(query, async (err, results) => {
    if (err) {
      res.status(500).send('Error executing query');
      } else if (results.length === 0) {
        res.status(200).send('No data found');
    } else {
      try {
        const client = await redisConnection();
        await client.connect();
        const data = JSON.stringify(results);
        await client.set("products", data);
        res.status(200).json({ message: 'Data retrieved from Mysql', data: JSON.parse(data)});
      } catch (error) {
        res.status(500).send('Error connecting to Redis');
      } 
    }
  });

});

module.exports = router;
