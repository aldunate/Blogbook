'use strict';

var request = require('request'),
    size = require('request-image-size');

exports.getSizes = function(url, position, cb) {
    if(!cb) return;

    size(url, function(err, dimensions, length) {
        if(err) cb(url, position, err);
        var sizes = {};
        if(dimensions){
            if(dimensions.height) sizes.dimensionHeight = dimensions.height;
            if(dimensions.width) sizes.dimensionWidth = dimensions.width;
        }
        if(length) sizes.length = length;
        cb(url, position, null, sizes);
    });
};


