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

  app.use(app.router);
  app.use(error); 

});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
