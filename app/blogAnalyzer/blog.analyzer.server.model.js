'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
    UrlAnalysisSchema = require('./blog.urlAnalysis.schema.server.js');

var BlogAnalyzerSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
    blogUrl: {
		type: String
	},
	imageUrls: {
		type: [UrlAnalysisSchema]
	},
    bloggerName: {
        type: String
    },
    shortText: {
        type: String
    },
    blogTitle: {
        type: String
    },
    state: {
        type: String
    },
    error: String,
    errorMessage: String,
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('BlogAnalyzer', BlogAnalyzerSchema);
