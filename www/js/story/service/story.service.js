.factory('Stories', ['', function(){
	// Data
	var Stories = [
		{
			Title:"Ian McCormack did not believe in heaven",
			Content : "<Ian_McCormack_did_not_believe_in_heaven.jpg>
			As an atheist Ian McCormack didn’t believe in heaven or hell. He lived his life as if God didn’t exist, and spent a lot of time surfing and diving. One day, while he was having a good time in the ocean, he suddenly felt something smash into his forearm. It felt as if thousands of volts of electricity went through his body. He was stung by five deadly box jellyfish. These are so poisonous, that even one can kill a person in four minutes…
			Ian tried to get to the hospital, but didn’t make it. He died.
			Just before he passed away he suddenly had a bright vision of his mother, who was a passionate believer in Jesus Christ. Ian saw how she was praying for him with all her heart. Then he died… When Ian opened his eyes, he was in a very dark and fearful place. He tried to touch his face, but noticed that his hands went straight through his body. He couldn’t touch himself.
			In the darkness he heard angry voices screaming at him. Ian realized he was in hell…
			But while he tried to look around in this agonizing place, a bright light suddenly shined down and pulled him up. Jesus Christ took Ian and brought him to heaven. There he had an overwhelming experience of the wonderful love of God. Ian felt waves of love wash over him, and knew for the first time in His life that God is indeed love – true love. Ian wasn’t allowed to stay in heaven and God sent him back, to share his experience with others and tell them about Jesus Christ.
			",
		},
		Configuration: {
			Free : "True",
			Read : "False",
			}
		},
	]

	return {
		all: function(){
			return Stories;
		}
	};
}])