require('dotenv').config();
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//routes
const products = require('./routes/productsRouter.js');

app.use(cors());
app.use(helmet());
app.use(compression());
app.use('/api', products);

//store products
app.post('/api/store', (req, res) => {
  res.send('Hello World!');
});

//server init
app.listen(port, () => {
  console.log(`Server running and listening on port ${port}`);
});
