const express = require('express');
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

app.listen(8000);