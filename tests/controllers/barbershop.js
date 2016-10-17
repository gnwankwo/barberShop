var chai = require('chai');
var chaiHTTP = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHTTP);

descibe('Barbershops Controller (Version 1)', function(){
	it('should list ALL Barbershops on /barbershops GET');
	it('should list a SINGLE barbershop on /barbershops/:business_name GET');
	it('should add a SINGLE barbershop on /barbershops POST');
	it('should update a SINGLE barbershop on /barbershops/:business_name PUT');
	it('should delete a SINGLE barbershop on /barbershops/:business_name DELETE');
});
