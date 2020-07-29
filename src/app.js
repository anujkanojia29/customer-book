const express = require('express');

const { CUSTOMERS_PATH } = require('./app/helpers/constants');

//app
const customer = require('./app/routes/customer');
const errorHandler = require('./app/middleware/errorHandler');

//Create Express App
const app = express();

//body parser
app.use(express.json());


//Default content to check app working
app.get('/', (req, res) => {
    res.send("Welcome to the App...!");
});

app.use( CUSTOMERS_PATH, customer);

app.use(errorHandler);

module.exports = app;