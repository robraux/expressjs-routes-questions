
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var error = require(__dirname + '/error.js');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 9999);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  require(__dirname + '/router.js')(app)

//sends the request to the right resource controller to build the response
//    app.get('/ping', function(req,res,next) {
//        return next(new Error('josh'))
//    })

  app.use(app.router);
  app.use(error); //error handler for "next(err)" calls in any of the prior middleware

});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
