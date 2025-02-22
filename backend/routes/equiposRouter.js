const express = require('express');
const router = express.Router();
const db = require('../db/index.js');

router.get('/equipos', function (req, res) {
  if (req.query.year) {
    var query = `SELECT * FROM phonesData WHERE year='${req.query.year}'`;
  } else {
    var query = 'SELECT * FROM phonesData';
  }

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
