//dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');						//////
var methodOverride = require('method-override');	//////

//enviroment
app.set('port', process.ENV.PORT || 8000); //run as $ PORT=1234 node server.js


//configuration
mongoose.connect('mongodb://localhost:27017/todoApp'); //already existing todoApp collection

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json




//routes
app.get('/api/test', function (req, res) {
	res.json({'message':'Success'});
});

//binding to port
app.listen(app.get('port'), function () {
	console.log("Magic has begun at port " + app.get('port') + "!");
});