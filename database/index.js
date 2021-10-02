const { Pool, Client } = require('pg');
require('dotenv').config();


const pool = new Pool({
  user: 'postgres', // <-- for docker user for local is andrewhang
  password: process.env.DB_PASSWORD,
  database: 'postgres', // <-- for docker db for local is overview
  host: 'localhost',
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
