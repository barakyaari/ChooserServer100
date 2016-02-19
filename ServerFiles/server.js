var mysql = require('mysql');
var express = require('express');
var app = express();
var path = require('path');
global.appRoot = path.resolve(__dirname);


//Initialize controllers
//Git Test

var controllers = require('./controllers');
controllers.set(app);
var SERVER_PORT = process.env.PORT || 1337;
var server = app.listen(SERVER_PORT, function () {
    var port = server.address().port;
    console.log('Listening on port %s', port);
});