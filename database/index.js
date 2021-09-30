const { Pool, Client } = require('pg');
require('dotenv').config();


const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'overview',
  host: 'localhost',
  port: 5432
});


module.exports = pool;

