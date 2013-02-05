"use strict"
/**
 * Routing for API
 */
var express = require('express')

module.exports = function (parent) {
    var app = express()

    parent.get('/ping', function(req,res,next) {
	return next(new Error('josh'))
     })

    
    parent.use(app)

}

