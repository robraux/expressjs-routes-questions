"use strict"

module.exports = function router(app) {
  return function router(req, res, next) {

    app.get('/ping', function(req,res,next) {
      return next(new Error('error going to middleware processor'))
    })
      
    next()

  }
}

