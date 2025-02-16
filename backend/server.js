require('dotenv').config();
const compression = require('compression');
const mysql = require('mysql2');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(compression());

var connection = mysql.createConnection({
  host: '192.168.0.2',
  user: 'ronaldlopez',
  password: 'pW1VfcTO8HQ',
  database: 'fullEcommerce',
});

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

//obtener todos los equipos
app.get('/api/equipos', (req, res) => {
  if (req.query.year) {
    var query = `SELECT * FROM phonesData WHERE year='${req.query.year}'`;
  } else {
    var query = 'SELECT * FROM phonesData';
  }

  connection.query(query, (err, results) => {
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

//guadar carrito de compras
app.post('/api/store', (req, res) => {
  res.send('Hello World!');
});

//obtener carrito de compras
app.listen(port, () => {
  console.log(`Server running and listening on port ${port}`);
});
