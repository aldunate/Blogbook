'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	agent = request.agent(app),
    blogAnalyzerService = require('../blogAnalyzer/blog.analyzer.server.service.get.urls');

describe('BlogAnalyzer service tests', function() {
	beforeEach(function(done) {
			done();
		});

	it('should be able to get a url', function(done) {
        blogAnalyzerService.startAnalyze(
            1,
            'http://blogs.vogue.es/el-blog-de-blanca-suarez/',
            function(blog, err){
                should.not.exist(err);
                should.exist(blog);
                should.exist(blog.imageUrls);
                done();
            });
	});

	it('should not be able to get a url', function(done) {
        blogAnalyzerService.startAnalyze(
            'hp://unaurlquenoexiste',
            function(blog, err){
                should.exist(err);
                should.not.exist(blog);
                console.log(blog);
                console.log(err);
                done();
            });
	});

	afterEach(function(done) {
		done();
	});

});
