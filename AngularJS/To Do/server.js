//dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');			// pull information from HTML POST (express4)
var mongoose = require('mongoose');
var methodOverride = require('method-override');	//////// simulate DELETE and PUT (express4)
var morgan = require('morgan');						//////// log all requests to the console (express4)


//enviroment
app.set('port', process.env.PORT || 8000); //run as $ PORT=1234 node server.js


//configuration
mongoose.connect('mongodb://localhost:27017/test', function() {console.log('Succesfully connected to database!')}); //already existing todoApp collection
app.use(express.static(__dirname + '/public'));	// set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(morgan('dev'));		// log every request to the console
app.use(methodOverride());


//model definition
var Todo = mongoose.model('Todo', {	//MongoDB will automatically generate an _id for each todo
	text: String
});


//routes
//GET		/api/todos				Get all of the todos
//POST		/api/todos				Create a single todo
//DELETE	/api/todos/:todo_id		Delete a single todo
//GET 		*						Load page index.html
app
	.get('/api/todos', function (req, res) {
		Todo.find(function (e, todos) {
			if (e) return console.log('There was an error getting the list of files.');
			res.json(todos);
		});
	})
	.post('/api/todos', function (req, res) {
		//create a todo, information comes from AJAX request from Angular
		Todo.create({
			text: req.body.text,
			done: false
		}, function (e, todo) {
			if (e) console.log('There was an error posting the element to the DB.');
			//get and return all the todos after creating another
			Todo.find(function (e, todos) {
				if (e) console.log('Could not return all info after posting the info to the DB.');
				res.json(todos);
			});
		});
	})
	.delete('/api/todos/:todo_id', function (req, res) {
		Todo.findByIdAndRemove(req.params.todo_id, function (e, deleredTodo) {
			if (e) console.log('There was an error with removing the document with id: ' + req.params.todo_id);
			Todo.find(function (e, todos) {
				if (e) console.log('There was an error returning all info after deleting the last element from the DB.');
				res.json(todos);
			});
		});
	})
	.get('*', function (req, res) {
		res.sendfile(__dirname + '/public/index.html');
	});


//binding to port
app.listen(app.get('port'), function () {
	console.log("Magic is happening at port " + app.get('port') + "!");
});