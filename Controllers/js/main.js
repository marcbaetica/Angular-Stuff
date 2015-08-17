var myApp = angular.module('myApp', []);

myApp.controller('FirstCtrl', ['$scope', function($scope){
	$scope.data = {'message': 'panel'};


}]);


// function FirstCtrl ($scope) { //scope that we pass in is the scope of the elements contained in div with the controller attribute
// 	$scope.data = {message: "panel"};
// 	//$scope.data = {buttonWarning: "button right large round warning", buttonSuccess: "button right large round success", buttonNormal: "button right large round"};

// 	//inside of here we can do lots of things like service calls to get data and push into our view
// };