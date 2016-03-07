'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlAnalysisSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    dimensionHeight: {
        type: Number,
        default: -1
    },
    dimensionWidth: {
        type: Number,
        default: -1
    },
    length: {
        type: Number,
        default: -1
    },
    error: String,
    status: {
        type: String,
        default: 'Inserted'
    }
});

module.exports = urlAnalysisSchema;
