'use strict';

var mongoose = require('mongoose'),
	errorHandler = require('../errors/errors.server.controller.js'),
	BlogAnalyzer = mongoose.model('BlogAnalyzer'),
	getUrlsService = require('./blog.analyzer.server.service.get.urls'),
	getSizesService = require('./blog.analyzer.server.service.get.sizes'),
	_ = require('lodash');


var getSizes = function(urls, blogAnalyzerId){
    for(var j = 0; j < urls.length; j++){
        getSizesService.getSizes(urls[j], j, function(url, position, err, sizes){
            BlogAnalyzer.findById(blogAnalyzerId, function(errToFind, blogAnalyzerResp) {
                if (errToFind) {
                    console.log(errToFind);
                    return;
                }

                if(err){
                    blogAnalyzerResp.imageUrls[position].status = 'UrlImagesError';
                    blogAnalyzerResp.imageUrls[position].error = err;
                } else {
                    blogAnalyzerResp.imageUrls[position].dimensionHeight = sizes.dimensionHeight;
                    blogAnalyzerResp.imageUrls[position].dimensionWidth = sizes.dimensionHeight;
                    blogAnalyzerResp.imageUrls[position].length = sizes.length;
                    blogAnalyzerResp.imageUrls[position].status = 'SizeReached';
                }

                blogAnalyzerResp.save(function(errToSave) {
                    if (errToSave) console.log(errToSave);
                });
            });
        });
    }
};

exports.create = function(req, res) {
	var blogAnalyzer = new BlogAnalyzer(req.body);
    blogAnalyzer.user = req.user;
    blogAnalyzer.state = 'Processing';
    blogAnalyzer.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json({id: blogAnalyzer._id});

            getUrlsService.getUrls(
                blogAnalyzer.blogUrl,
                function(err, urls){

                    BlogAnalyzer.findById(blogAnalyzer._id, function(errToFind, blogAnalyzerResp) {
                        if (errToFind) {
                            console.log(errToFind);
                            return;
                        }

                        if(err){
                            blogAnalyzerResp.state = 'UrlImagesError';
                            blogAnalyzerResp.error = err;
                            blogAnalyzerResp.errorMessage = err.message;
                        } else {
                            for(var i = 0; i < urls.length; i++){
                                blogAnalyzerResp.imageUrls.push({url: urls[i], status: 'Obtenida'});
                            }
                            blogAnalyzerResp.state = 'ImagesUrlReached';
                        }
                        blogAnalyzerResp.save(function(errToSave) {
                            if (errToSave) console.log(errToSave);
                            getSizes(urls, blogAnalyzer._id);
                        });
                    });
            });
        }
	});
};

exports.read = function(req, res) {
	res.json({
        imageUrls: req.blogAnalyzer.imageUrls,
        state: req.blogAnalyzer.state
    });
};

exports.blogAnalyzerByID = function(req, res, next, id) {
    BlogAnalyzer.findById(id).populate('user', 'displayName').exec(function(err, blogAnalyzer) {
		if (err) return next(err);
		if (!blogAnalyzer) return next(new Error('Failed to load blogAnalyzer ' + id));
		req.blogAnalyzer = blogAnalyzer;
		next();
	});
};

exports.hasAuthorization = function(req, res, next) {
	if (req.blogAnalyzer.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
