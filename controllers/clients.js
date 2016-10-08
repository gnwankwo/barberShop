var express = require('express');
var router = express.Router();

// middleware that is specfic to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
	console.log('Clients Controller :: Time: ', Date.now());
	next();
});

// define the root Clients route
router.get('/', function(req, res){
	res.send('Clients home page');
});

// define the specific Client route
router.get('/:client', function(req, res){
	res.send('This is client: ' + req.params.client);
});

module.exports = router;