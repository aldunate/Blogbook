'use strict';

var users = require('../users/users.server.controller.js'),
    blogAnalyzer = require('./blog.analyzer.server.controller.js');

module.exports = function(app) {
	app.route('/blog_analyzer')
		//.post(users.requiresLogin, blogAnalyzer.create);
		.post(blogAnalyzer.create);

	app.route('/blog_analyzer/:blog_analyzerId')
		.get(blogAnalyzer.read);

	app.param('blog_analyzerId', blogAnalyzer.blogAnalyzerByID);
};
