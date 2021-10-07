require('newrelic')
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');
const router = require('./routes/routes.js')

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`Server currently listening on http://localhost:${process.env.PORT}`)
})

