// we have to CREATE A MODULE, CREATE A CONTROLLER, and DEFINE FUNCTIONS TO HANDLE TODOS. Then we can APPLY TO VIEW.

var todoApp = angular.module('todoApp', []);

function mainController($scope, $http) {
	$scope.formData = {};

	//when landing on the page, get all todos and show them
	$http.get('/api/todos')
		.success(function(data) {$scope.todo = data; console.log(data)})
		.error(function(data) {console.log("Error: " + data)});

}