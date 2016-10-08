var express = require('express');
var router = express.Router();

// middleware that is specfic to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
	console.log('Barbershops Controller :: Time: ', Date.now());
	next();
});

// define the root Barbershops route
router.get('/', function(req, res){
	res.send('Barbershops home page');
});

// define the specific Client route
router.get('/:barbershop-title', function(req, res){
	res.send('This is barbershop: ' + req.params.barbershop-title);
});

module.exports = router;