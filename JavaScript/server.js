var mysql = require('mysql');
var express = require('express');
var app = express();

//Initialize controllers
//Git Test

var controllers = require('./controllers');
controllers.set(app);
var SERVER_PORT = 8080;
var server = app.listen(SERVER_PORT, function () {
    var port = server.address().port;
    console.log('Listening on port %s', port);
});