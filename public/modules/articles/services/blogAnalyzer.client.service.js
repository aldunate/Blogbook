'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('BlogAnalyzer', ['$resource',
    function($resource) {
        return $resource('blog_analyzer/:blog_analyzerId', {
            blog_analyzerId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        },
        {
            get: {
                method: 'GET'
            }
        }
        );
    }
]);
