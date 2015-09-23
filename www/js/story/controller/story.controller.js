.controller('Story', ['', function($scope, Stories){
	$scope.stories = Stories.all();
}])