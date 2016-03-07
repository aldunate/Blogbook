'use strict';

var Categories = require('./category.server.model.js'),
	_ = require('lodash'),
    categories = new Categories();

exports.read = function(req, res) {
    res.json(req.category);
};

exports.list = function(req, res) {
    res.json(categories);
};

exports.categoryByID = function(req, res, next, id) {
    var cat = {};
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === id) {
            cat = categories[i];
        }
    }

    if (!cat) return next(new Error('Failed to load category ' + id));
    req.category = cat;
    next();
};

exports.hasAuthorization = function(req, res, next) {
    next();
};
