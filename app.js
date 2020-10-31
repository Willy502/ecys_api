const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Express Framework
const app = express();
app.use(cors());

// Log requests to console
app.use(logger(process.env.ENVIRONMENT));

// Parse incoming requiest data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Catch-all route
require('./server/routes')(app);
app.get('*', (req, res) => res.status(404).send({
    success : false,
        error : {
            code: 404,
            message: 'Route not found'
        },
}));

module.exports = app;