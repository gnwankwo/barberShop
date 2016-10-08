/*const express = require('express');
const app = express();

// GET method route
app.get('/', function(req, res){
	res.send('GET request to the homepage');
});

// POST method route
app.post('/', function(req, res){
	app.send('POST request to the homepage');
});

// Responding to an /schedule route
app.get('/schedule', function(req, res){
	res.send('In schedule listing page.');
});

app.listen(8000);*/


const express = require('express');
const app = express();

// GET method route
app.get('/barbershops', function(req, res){
    res.send('GET request to the homepage');
});

// POST method route
app.post('/barbershops', function(req, res){
    app.send('POST request to the homepage');
});

// Responding to an /schedule route
app.get('/schedules', function(req, res){
    res.send('In schedule listing page.');
});

// Load and mount the barbershop controller
// var barbershop = require('./controllers/barbershops');
// app.use('/barberShop', barbershop);

module.exports = app;

app.listen(8000);