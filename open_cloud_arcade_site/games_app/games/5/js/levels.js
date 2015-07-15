var map = [

	// EASY, 1 -> 6
	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 1, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 2, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]],

	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 2, 0, 1, 0, 0, 0, 0],
	 [0, 0, 0, 0, 1, 0, 2, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]],

	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 1, 1, 0, 2, 2, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]],

	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 2, 0, 0, 0, 0],
	 [0, 0, 0, 0, 1, 2, 0, 0, 0],
	 [0, 0, 0, 0, 1, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]],

	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 1, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 2, 0, 0, 0, 3, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]],

	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 2, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 1, 0, 0, 0, 0],
	 [0, 0, 0, 0, 1, 0, 0, 0, 0],
	 [0, 0, 3, 0, 2, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]],

	// MEDIUM, 7 -> 10
	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 3, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 1, 1, 1, 0, 0, 0],
	 [0, 0, 0, 2, 0, 0, 0, 0, 0],
	 [0, 2, 0, 3, 0, 0, 2, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]],

	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 2, 0, 0, 3, 0, 0],
	 [0, 0, 2, 1, 1, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 1, 3, 0, 2, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]], 

	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 2, 0, 0, 0, 0, 0, 0],
	 [0, 0, 1, 0, 0, 0, 1, 0, 0],
	 [0, 2, 1, 0, 0, 0, 1, 2, 0],
	 [0, 0, 2, 0, 0, 0, 0, 3, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]], 

	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 2, 0, 0, 2, 0, 0, 0, 0],
	 [0, 2, 0, 0, 1, 1, 3, 0, 0],
	 [0, 0, 0, 0, 1, 1, 0, 0, 0],
	 [0, 3, 0, 2, 0, 0, 0, 3, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]],

	// HARD, 10 -> 15

	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 3, 0, 2, 0, 0, 0, 0],
	 [0, 2, 0, 1, 1, 1, 0, 0, 0],
	 [0, 0, 0, 1, 1, 0, 2, 2, 0],
	 [0, 0, 0, 0, 2, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]],

	[[0, 2, 0, 0, 0, 0, 0, 0, 2],
	 [0, 0, 0, 1, 3, 1, 0, 3, 0],
	 [0, 3, 0, 3, 1, 0, 0, 0, 0],
	 [0, 0, 0, 1, 3, 1, 0, 0, 0],
	 [0, 0, 0, 0, 2, 0, 0, 0, 3],
	 [3, 0, 2, 0, 0, 2, 0, 0, 0]],

	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 2, 0, 0, 0],
	 [0, 0, 0, 1, 1, 1, 0, 2, 0],
	 [0, 0, 0, 1, 1, 1, 0, 2, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 2, 2, 2, 0, 0, 0]], 

	[[0, 0, 0, 0, 2, 0, 0, 0, 0],
	 [3, 0, 0, 0, 0, 1, 0, 3, 0],
	 [2, 0, 0, 1, 1, 1, 0, 0, 3],
	 [2, 0, 0, 0, 1, 1, 0, 0, 0],
	 [0, 0, 0, 0, 1, 0, 0, 0, 0],
	 [2, 0, 0, 0, 0, 2, 0, 2, 2]],

	[[0, 0, 0, 0, 2, 0, 0, 0, 3],
	 [0, 0, 0, 2, 1, 0, 0, 0, 0],
	 [2, 2, 0, 1, 1, 1, 0, 3, 0],
	 [0, 0, 0, 1, 1, 1, 0, 0, 0],
	 [3, 2, 0, 0, 1, 0, 0, 0, 2],
	 [0, 0, 0, 0, 2, 0, 2, 0, 3]], 


	/*
	[[0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0]],
	*/
];

var text = [

	// easy
	["fill the hole by clicking on the up arrow in the box"],
	["this time, fill two holes"],
	["once a hole is filled, you can slide over it"],
	["choose the right order"],
	["the block on the right is a wall, you can use it"],
	["now let's mix everything you learned"],

	// medium
	["nice, now you are on your own"],
	[],
	[],
	[],

	// hard
	["you're quite good, so let's put more holes"],
	["and even more holes..."],
	["and even more..."],
	["and more!"],
	["do you want to give up now?"]
];


