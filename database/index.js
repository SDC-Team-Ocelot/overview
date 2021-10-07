const { Pool, Client } = require('pg');
require('dotenv').config();


const pool = new Pool({
  user: process.env.DB_USER, // <-- for docker user for local is andrewhang
  password: process.env.DB_PASSWORD,
  database: process.env.DB, // <-- for docker db for local is overview
  host: '3.19.14.0',
  port: 5432
});


module.exports = pool;


// Docker

// const pool = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: 'overview',
//   host: 'host.docker.internal',
//   port: 1234
// });
