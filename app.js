var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var location_services = new (require('./location_services.js'))();
var port = 80;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/location',location_services.get_router(express));
app.get('/', function(req,res, next){
  console.log('got request');
  res.sendFile('public/main.html',{root: path.join(__dirname)});
});


app.listen(port, function(){
    console.log('listening on port: '+port);
});

module.exports = app;
