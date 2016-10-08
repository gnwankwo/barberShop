var express = require('express');
var router = express.Router();

// middleware that is specific to this router
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next){
	console.log('Schedules Controller :: Time: ', Date.now());
	next();
});

// define the root schedules route
router.get('/', function(req, res){
	res.send('Schedules home page');
});

// define the specific schedule route
router.get('/:barbershop-name', function(req, res){
	res.send('This is the schedule for: ' + req.params.barbershop-name);
});

module.exports = router;