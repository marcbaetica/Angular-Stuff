// we have to CREATE A MODULE, CREATE A CONTROLLER, and DEFINE FUNCTIONS TO HANDLE TODOS. Then we can APPLY TO VIEW.

var todoApp = angular.module('todoApp', []);

function mainController ($scope, $http) {
	$http.formData = {};	//create an empty object (node for josh: x = {} is a object, x = [] is an array ^^)

	//landing on the page and get all todos and show them
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function(e) {
			console.log('Error: ' + e);
		});

	//when submitting the add from, send the text to the node API
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {};	//clear the form so our user is ready to enter another 
				$scope.todos = data;
				console.log(data);
			})
			.error(function(e) {
				console.log('Error: ' + e);
			});
	};

	//deleting a todo after checking it
	$scope.deleteTodo = function (id) {
		$http.delete('/api/todos/' + id)
			.success(function (data) {
				$scope.todos = data;
				console.log(data);
			})
			.erro(function (e) {
				console.log('Error: ' + e);
			});
	};
}