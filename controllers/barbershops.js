var express = require('express');
var router = express.Router();

//error: cannot find this module 'models' like this
// ask Ameya how I can call the 'models' folder.

//error: please install mysql package manually
//var models = require('/Volumes/My\ Passport/Workspace/ctp/barbershop/models');

// middleware that is specfic to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
	console.log('Barbershops Controller :: Time: ', Date.now());
	next();
});

// define the root Barbershops route
router.get('/', function(req, res){
	res.send('Barbershops home page');
	/*
	models.Barbershop.findAll({})
		.then(function (barbershops) {
			if (barbershops != null) {
				res.send('Barbershops List: <br /><pre>' + JSON.stringify(barbershops, null, 4) + '</pre>');
			} else {
				res.send('No Barbershops found');
			}
		});
	*/
});

// define the specific Barbershop route
// specific routes are the attributes of the Barbershop model
/*
router.get('/:barbershop_id', function(req, res){
	models.Barbershop.findById(req.params.barbershop_id)
		.then(function(barbershop) {
			if (barbershop != null) {
				res.send('Found Barbershop <br /><pre>' + JSON.stringify(barbershop, null, 4) + '</pre>');
			} else {
				res.send('Did not find Barbershop');
			}
		});
});
*/
// it seems like the /:business_name and such are variable names that are replaced by user inputs 
// the api ex: /barbershops/ramanpreet_chand, would return Barbershop Business Name: ramanpreet_chand
// it seems that the / dictates the position of each attribute.
// it would make sense to have a RESTful api of barbershop/barbershop_id/business_name - ex: barbershop/RC01/ramanpreet_chand

router.get('/:barbershop_username', function(req, res){
	res.send('Barbershop Business Name: ' + req.params.business_name);
});

router.get('/:barbershop_username/:password', function(req, res){
	res.send('Barbershop Password: ' + req.params.password);
});

router.get('/:address', function(req, res){
	res.send('Barbershop Address: ' + req.params.address);
});

router.get('/:contact_first_name', function(req, res){
	res.send('Barbershop Contact first_name: ' + req.params.contact_first_name);
});

router.get('/:contact_last_name', function(req, res){
	res.send('Barbershop Contact last_name: ' + req.params.contact_last_name);
});

router.get('/:email_address', function(req, res){
	res.send('Barbershop Email: ' + req.params.email_address);
});

router.get('/:phone', function(req, res){
	res.send('Barbershop Phone: ' + req.params.phone);
});

router.get('/:bio', function(req, res){
	res.send('Barbershop Bio: ' + req.params.bio);
});

router.get('/:open_time', function(req, res){
	res.send('Barbershop Open Time: ' + req.params.open_time);
});

router.get('/:close_time', function(req, res){
	res.send('Barbershop Close Time: ' + req.params.close_time);
});

module.exports = router;