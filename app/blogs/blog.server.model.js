'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	articles = mongoose.model('Article'),
	Schema = mongoose.Schema;

/**
 * Blog Schema
 */
var BlogSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Blog name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	kVisits: {
		type:Number,
		default:0
	},
	imageBlogUrl: {
		type: String,
		default:'http://fotouser.miarroba.st/68731257/300/mr-anonimo.jpg'
	},
	articlesList: [articles],
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Blog', BlogSchema);
