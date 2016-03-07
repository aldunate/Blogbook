'use strict';

var request = require('request'),
    cheerio = require('cheerio');

var getImagesUrls = function(htmlString){
    var urls = [];
    var $ = cheerio.load(htmlString);
    $('img').each(function() {
        var url = $(this).attr('src');
        urls.push(url);
    });
    return urls;
};

exports.getUrls = function(urlToAnalyze, cb) {
    if(!cb) return;

    request(urlToAnalyze, function (error, response, body) {
        if(error || response.statusCode !== 200){
            cb({ message: 'Impossible to reach the url. statusCode ' + response.statusCode, error: error});
        }
        cb(null, getImagesUrls(body));
    });
};


