//created a quick Angular module and controller where we define a list of both Bootstrap
//(we’ll be switching out Bootswatch theme files) on the fly
//we are also defining layouts that are custom CSS files that we have created for this project.

angular.module('linkApp', []).controller('mainController', function ($scope) {

	//set default bootswatch name
	$scope.css= 'cosmo';

	//create a list of bootswatches
	$scope.bootstraps = [
		{name: 'Basic', url: 'cosmo'},
		{name: 'Slate', url: 'slate'},
		{name: 'Cyborg', url: 'cyborg'}
	];

	//set the default layout
	$scope.layout = 'inFace';

	//create the list of layout files
	$scope.layouts = [
		{name: 'Normal', url: 'normal'},
		{name: 'Large', url: 'large'},
		{name: 'IN YOUR FACE!', url: 'inFace'}
	];

	$scope.center = 'centerText';

})