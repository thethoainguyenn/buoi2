const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const http = require('http').Server(app);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var server = http.listen(3000, function () {
	console.log('Server listening on port ' + server.address().port);
});

var connection = require('./DBConnection');
var routes = require('./routes');


app.use('/', routes);

module.exports = app;

// npm install express body-parser mysql
// or
//  npm install express
// npm install body-parser
//  npm install mysql
