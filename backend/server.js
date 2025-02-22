require('dotenv').config();
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//rutas
const equipos = require('./routes/equiposRouter.js');

app.use(cors());
app.use(helmet());
app.use(compression());

app.use('/api', equipos);

//guadar carrito de compras
app.post('/api/store', (req, res) => {
  res.send('Hello World!');
});
