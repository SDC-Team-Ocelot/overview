const { Pool, Client } = require('pg');


const pool = new Pool({
  user: 'andrewhang',
  password: 'password',
  database: 'overview',
  host: 'localhost',
  port: 5432
});


module.exports = pool;

