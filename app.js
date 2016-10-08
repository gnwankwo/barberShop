const express = require('express');
const app = express();

// Load and mount the Index controller
const index = require('./controllers/index');
app.use('/index', index);

// Load and mount the barbershop controller
const barbershops = require('./controllers/barbershops');
app.use('/barbershops', barbershops);

// Load and mount the clients controller
const clients = require('./controllers/clients');
app.use('/clients', clients);

// Load and mount the schedules controller
const schedules = require('./controllers/schedules');
app.use('/schedules', schedules);


module.exports = app;
app.listen(8000);