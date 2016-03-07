'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	Category = require('../category/category.server.model.js'),
	agent = request.agent(app);

/**
 * Globals
 */
var category = new Category();

/**
 * Category routes tests
 */
describe('Categories getting tests', function() {

	it('should be able to get a list of categories if not signed in', function(done) {
        request(app).get('/categories')
            .end(function(req, res) {
                res.body.should.be.an.Array.with.lengthOf(category.length);
                done();
            });
	});


	it('should be able to get a single category if not signed in', function(done) {
        request(app).get('/categories/' + 'politics')
            .end(function(req, res) {
                res.body.should.be.an.Object.with.property('id', 'politics');
                done();
            });
	});

});
