const express = require('express');
const router = express.Router();
const db = require('../db/index.js');

router.get('/products', function (req, res) {
  var query = 'SELECT * FROM products';

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error executing query');
    } else if (results.length === 0) {
      res.status(200).send('No data found');
    } else {
      res.set('Cache-Control', 'max-age=300000, must-revalidate');
      res.status(200).json(results);
    }
  });
});

module.exports = router;
