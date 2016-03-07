'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Categories', ['$resource',
    function($resource) {
        return $resource('categories/:categoriesId', {
            categoriesId: '@_id'
        },{
            get: {
                method: 'GET',
                isArray: true
            }
        });
    }
]);
