require('dotenv').config();
const compression = require('compression');
const mysql= require('mysql2');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(compression());

var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});


connection.connect((err) => {
  if (err) {
    return;
  }
  console.log('connection', process.env.HOST);
});

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

//obtener todos los equipos
app.get('/api/equipos', (req, res) => {
  connection.query('SELECT * FROM phonesData', (err, results) => {
    if (err) {
      res.status(500).send('Error executing query');
      return;
    } else if(results.length === 0) {
      res.status(200).send('No data found');
      return;
    }

    res.set('Cache-Control', 'max-age=300000, must-revalidate')
    res.status(200).json(results);
  });
});

//guadar carrito de compras
app.post('/api/store', (req, res) => {
  res.send('Hello World!');
});

//obtener carrito de compras
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
