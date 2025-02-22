const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '192.168.0.2',
  user: 'ronaldlopez',
  password: 'pW1VfcTO8HQ',
  database: 'fullEcommerce',
});

module.exports = connection;
