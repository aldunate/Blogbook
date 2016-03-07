'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
    Category = require('./../category/category.server.model.js');

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	content: String,
	contentUrl: {
		type: String
	},
	imageUrls: [String],
	tags: [String],
    categories: [String],
    kViews: Number,
    kLikes: Number,
    kShared: Number,
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Article', ArticleSchema);
