"use strict"

var express = require('express')

module.exports = function (parent) {
  var app = express()

  parent.get('/ping', function(req,res,next) {
    return next(new Error('error going to middleware processor'))
  })
    
  parent.use(app)

}

