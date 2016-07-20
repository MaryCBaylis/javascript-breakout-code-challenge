var data = (function(){
	var canvasWidth = 1086;
	var canvasHeight = 768;
	var blockWidth = 60;
	var blockHeight = 20;

	var colors = {
		"red": "255, 0, 0",
		"orange": "255, 128, 0",
		"yellow": "255, 255, 0",
		"green": "0, 200, 0",
		"blue": "0, 0, 255",
		"indigo": "127, 0, 255",
		"purple": "153, 0, 153"
	}


	var grid = {
		"x": [58, 123, 188, 253, 318, 383, 448, 513, 578, 643, 708, 773, 838, 903, 968],
		"y": [80, 110, 140, 170, 200, 230, 260]
	}

	var gamePieces = {
		"Blocks": [
			//Red Row
			{"x": grid.x[0], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[1], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[2], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[3], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[4], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[5], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[6], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[7], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[8], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[9], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[10], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[11], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[12], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[13], "y": grid.y[0], "color": colors.red},
			{"x": grid.x[14], "y": grid.y[0], "color": colors.red},
			//Orange Row
			{"x": grid.x[0], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[1], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[2], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[3], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[4], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[5], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[6], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[7], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[8], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[9], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[10], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[11], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[12], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[13], "y": grid.y[1], "color": colors.orange},
			{"x": grid.x[14], "y": grid.y[1], "color": colors.orange},
			//Yellow Row
			{"x": grid.x[0], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[1], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[2], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[3], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[4], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[5], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[6], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[7], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[8], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[9], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[10], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[11], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[12], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[13], "y": grid.y[2], "color": colors.yellow},
			{"x": grid.x[14], "y": grid.y[2], "color": colors.yellow},
			//Green Row
			{"x": grid.x[0], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[1], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[2], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[3], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[4], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[5], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[6], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[7], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[8], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[9], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[10], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[11], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[12], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[13], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[14], "y": grid.y[3], "color": colors.green},
			//Blue Row
			{"x": grid.x[0], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[1], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[2], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[3], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[4], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[5], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[6], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[7], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[8], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[9], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[10], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[11], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[12], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[13], "y": grid.y[4], "color": colors.blue},
			{"x": grid.x[14], "y": grid.y[4], "color": colors.blue},
			//Indigo Row
			{"x": grid.x[0], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[1], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[2], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[3], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[4], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[5], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[6], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[7], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[8], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[9], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[10], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[11], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[12], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[13], "y": grid.y[5], "color": colors.indigo},
			{"x": grid.x[14], "y": grid.y[5], "color": colors.indigo},
			//Purple Row
			{"x": grid.x[0], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[1], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[2], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[3], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[4], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[5], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[6], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[7], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[8], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[9], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[10], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[11], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[12], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[13], "y": grid.y[6], "color": colors.purple},
			{"x": grid.x[14], "y": grid.y[6], "color": colors.purple},
		],
		"Bricks": [
			{"x": 0, "y": 0, "width": 10, "height": canvasHeight},
			{"x": canvasWidth-10, "y": 0, "width": 10, "height": canvasHeight},
			{"x": 0, "y": 0, "width": canvasWidth, "height": 10},
		]
	}

	return {
		gamePieces: gamePieces,
		canvasWidth: canvasWidth,
		canvasHeight: canvasHeight,
		blockWidth: blockWidth,
		blockHeight: blockHeight
	}
}());