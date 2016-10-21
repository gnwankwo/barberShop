var chai = require('chai');
var chaiHTTP = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHTTP);

descibe('Schedules Controller (Version 1)', function(){
	it('should list ALL Schedules on /schedules GET');
	it('should list a SINGLE schedule on /schedules/:client_id GET');
	it('should add a SINGLE schedule on /schedules POST');
	it('should update a SINGLE schedule on /schedules/:client_id PUT');
	it('should delete a SINGLE schedule on /schedules/:client_id DELETE');
});