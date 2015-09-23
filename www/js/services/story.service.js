angular.module('heaven.services', [])
	.factory('storySer', function(){
	  // Some fake testing data
	  var stories = [
	    {
	    	Id: 1,
	    	Title: "Ihieu heaven qwerty1",
	    	Image: "Ian_McCormack_did_not_believe_in_heaven.jpg",
	    	Content : "Ian_McCormack_did_not_believe_in_heaven.jpg As an atheist Ian McCormack didn’t believe in heaven or hell. He lived his life as if God didn’t exist, and spent a lot of time surfing and diving. One day, while he was having a good time in the ocean, he suddenly felt something smash into his forearm. It felt as if thousands of volts of electricity went through his body. He was stung by five deadly box jellyfish. These are so poisonous, that even one can kill a person in four minutes… Ian tried to get to the hospital, but didn’t make it. He died. Just before he passed away he suddenly had a bright vision of his mother, who was a passionate believer in Jesus Christ. Ian saw how she was praying for him with all her heart. Then he died… When Ian opened his eyes, he was in a very dark and fearful place. He tried to touch his face, but noticed that his hands went straight through his body. He couldn’t touch himself.",
	    	Configuration: {
	      		Free : "True",
	      		Read : "False",
	    	}
	  	},
	  	{
	  		Id: 2,
	    	Title: "Ian le did not believe in heaven qwerty2",
	    	Image: "Ian_McCormack_did_not_believe_in_heaven.jpg",
	    	Content : "Ian_McCormack_did_not_believe_in_heaven.jpg As an atheist Ian McCormack didn’t believe in heaven or hell. ",
	    	Configuration: {
	      		Free : "True",
	      		Read : "False",
	    	}
	  	},
	  	{
	  		Id: 3,
	    	Title: "Ian McCormack did not believe in heaven qwerty",
	    	Image: "Ian_McCormack_did_not_believe_in_heaven.jpg",
	    	Content : "Ian_McCormack_did_not_believe_in_heaven.jpg As an atheist Ian McCormack didn’t believe in heaven or hell. ",
	    	Configuration: {
	      		Free : "True",
	      		Read : "False",
	    	}
	  	},
	  	{
	  		Id: 4,
	    	Title: "Ian McCormack did not believe in heaven qwerty",
	    	Image: "Ian_McCormack_did_not_believe_in_heaven.jpg",
	    	Content : "Ian_McCormack_did_not_believe_in_heaven.jpg As an atheist Ian McCormack didn’t believe in heaven or hell. ",
	    	Configuration: {
	      		Free : "True",
	      		Read : "False",
	    	}
	  	}
	  ];

	  return {
	    all: function(){
	      return stories;
	    },
	    get: function(storyId){
	    	for (var i = 0; i < stories.length; i++) {
		        if (stories[i].Id === parseInt(storyId)) {
		          return stories[i];
		        }
		      }
		      return null;
	    	}
	  };
});