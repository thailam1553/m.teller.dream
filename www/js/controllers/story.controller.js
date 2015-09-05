angular.module('heaven.controllers', [])
.controller('storyCtrl', ['$scope', 'storySer', '$stateParams', function($scope, story, $stateParams){
	$scope.stories = story.all();

	$scope.story = story.get($stateParams.storyId);
}])