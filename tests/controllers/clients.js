var chai = require('chai');
var chaiHTTP = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHTTP);

descibe('Clients Controller (Version 1)', function(){
	it('should list ALL Clients on /clients GET');
	it('should list a SINGLE client on /clients/:client_id GET');
	it('should add a SINGLE client on /clients POST');
	it('should update a SINGLE client on /clients/:client_id PUT');
	it('should delete a SINGLE client on /clients/:client_id DELETE');
});