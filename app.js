/* jshint node:true */
'use strict';

var express = require('express');
var locale = require('locale');
var nunjucks = require('nunjucks');
var app = express();

app.use(locale(['en-US', 'fr']));

var env = nunjucks.configure(__dirname + '/dist');
env.express(app);

app.get('/data/i18n/:file', function(req, res) {
    res.render('data/i18n/' + req.locale + '/' + req.params.file);
});

app.use(express.static(__dirname + '/dist'));

app.use(function (req, res) {
    res.render('index.html');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
