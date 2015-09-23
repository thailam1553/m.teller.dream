angular.module('heaven.controllers', [])
.controller('storyCtrl', ['$scope', 'storySer', '$stateParams', function($scope, story, $stateParams){
	$scope.stories = story.all();
	$scope.detailstory = story.get($stateParams.storyId);

}])
