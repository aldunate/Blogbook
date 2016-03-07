'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend user's controller
 */
module.exports = _.extend(
	require('./users.authentication.server.controller.js'),
	require('./users.authorization.server.controller.js'),
	require('./users.password.server.controller.js'),
	require('./users.profile.server.controller.js')
);
