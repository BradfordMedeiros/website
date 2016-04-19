var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var location_services = new (require('./location_services.js'))();



// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/location',location_services.get_router(express));
app.get('/', function(req,res, next){
  res.sendFile('views/main.html',{root: path.join(__dirname)});
});


app.listen(3000, function(){

});

module.exports = app;
