'use strict';

/**
 * Module dependencies.
 */
var category = require('./category.server.controller.js');

module.exports = function(app) {
	// Category Routes
	app.route('/categories')
		.get(category.list);

	app.route('/categories/:categoryId')
		.get(category.read);

	// Finish by binding the article middleware
	app.param('categoryId', category.categoryByID);
};
