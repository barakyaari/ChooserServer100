var mysql = require('mysql');
var express = require('express');
var app = express();

//Initialize controllers
//Git Test

var controllers = require('./controllers');
controllers.set(app);
var SERVER_PORT = 8080;
process.env['accountname'] = 'chooserstorage';
process.env['accountkey'] = 'rFb94KokcSFjPQJflCWmy9t8AqAM7rWdeUNYzGfiaEPKsY8kO2Lm2tF8fgEHsLIVCjGMYlYVP++vQ78+tYpV5A==';

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/getPosts', function (req, res) {
    var sql = 'SELECT id, title, image1, description1, image2, description2 from posts';

    connection.query(sql, function(err, rows, fields) {
        if (!err) {
            console.log('Request Received');

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(JSON.stringify(rows));
        }
        else {
            console.log('Error while performing Query: %s', sql);
        }
    });
});
var controllers = require('./controllers');
controllers.set(app);
var SERVER_PORT = 8080;
process.env['accountname'] = 'chooserstorage';
process.env['accountkey'] = 'rFb94KokcSFjPQJflCWmy9t8AqAM7rWdeUNYzGfiaEPKsY8kO2Lm2tF8fgEHsLIVCjGMYlYVP++vQ78+tYpV5A==';
var server = app.listen(SERVER_PORT, function () {
    var port = server.address().port;
    console.log('Listening on port %s', port);
});