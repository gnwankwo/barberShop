var express = require('express');
var router = express.Router();

// Middleware that is specific to this router
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next){
	console.log('Home Page :: Time: ', Date.now());
	next();
});

// define the root index route
router.get('/', function(req, res){
	res.send('Home Page');
});

module.exports = router;