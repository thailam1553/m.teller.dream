angular.module('heaven.services', [])

.factory('storySer', function(){
  // Some fake testing data
  var stories = [
    {
    Title: "Ian McCormack did not believe in heaven",
    Content : "Ian_McCormack_did_not_believe_in_heaven.jpg As an atheist Ian McCormack didn’t believe in heaven or hell. ",
    Configuration: {
      Free : "True",
      Read : "False",
    }
  }];

  return {
    all: function(){
      return stories;
    }
  };
});
