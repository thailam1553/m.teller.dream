angular.module('heaven.controllers', [])

.controller('storyCtrl', ['$scope', 'storySer', function($scope, story){
	$scope.stories = story.all();
}])