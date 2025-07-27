const express = require('express');
const router = express.Router();
//const mysql = require('../mysql/index.js');
const redisMiddleware = require('../middlewares/redis.middleware.js');

router.get('/products', redisMiddleware, function (req, res, next) {
  var query = 'SELECT * FROM products';

  /*mysql.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error executing query');
      } else if (results.length === 0) {
        res.status(200).send('No data found');
    } else {
      res.set('Cache-Control', 'max-age=300000, must-revalidate');
      res.status(200).json(results);
    }
  });*/
});

module.exports = router;
