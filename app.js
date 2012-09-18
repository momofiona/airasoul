var express = require('express')
  , routes = require('./routes')
  , config = require('./config/config');
  
var app = module.exports = express.createServer();

app.configure(function(){
  app.set('views', __dirname + config.view_path);
  app.set('view engine', config.view_engine);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + config.public_path));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.listen(config.port);

console.log(config.welcome);
console.log("- airasoul express server listening on port %d in %s mode", app.address().port, app.settings.env);
