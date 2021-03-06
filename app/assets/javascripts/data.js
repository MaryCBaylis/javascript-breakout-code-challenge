var data = (function(){
	var colors = {
		"red": "255, 0, 0",
		"orange": "255, 128, 0",
		"yellow": "255, 255, 0",
		"green": "0, 200, 0",
		"blue": "0, 0, 255",
		"indigo": "127, 0, 255",
		"purple": "153, 0, 153",
		"gray": "200, 200, 200"
	}

	var canvasWidth = 1086;
	var canvasHeight = 768;
	var brickWidth = 60;
	var brickHeight = 20;
	var paddleWidth = 100;
	var paddleHeight = 20;
	var paddleX = (canvasWidth - paddleWidth)/2;
	var paddleY = 700;
	var paddleColor = colors.gray;
	var paddleSpeed = 5;
	var ballRadius = 10;
	var ballSpeed = 4.5;
	var dialogWidth = 800;
	var dialogHeight = 600;
	var numberOfLives = 3;

	var images = {
		"block": "/assets/block.jpg",
		"background": "/assets/background.jpg"
	}

	var sounds = {
		"block": "/assets/block.mp3",
		"brick": "/assets/brick.mp3"
	}


	var grid = {
		"x": [58, 123, 188, 253, 318, 383, 448, 513, 578, 643, 708, 773, 838, 903, 968],
		"y": [80, 110, 140, 170, 200, 230, 260]
	}

	var gamePieces = {
		"Bricks": [
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
			// {"x": grid.x[5], "y": grid.y[1], "color": colors.orange},
			// {"x": grid.x[6], "y": grid.y[1], "color": colors.orange},
			// {"x": grid.x[7], "y": grid.y[1], "color": colors.orange},
			// {"x": grid.x[8], "y": grid.y[1], "color": colors.orange},
			// {"x": grid.x[9], "y": grid.y[1], "color": colors.orange},
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
			// {"x": grid.x[3], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[4], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[5], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[6], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[7], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[8], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[9], "y": grid.y[3], "color": colors.green},
			{"x": grid.x[10], "y": grid.y[3], "color": colors.green},
			// {"x": grid.x[11], "y": grid.y[3], "color": colors.green},
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
		"Blocks": [
			{"x": 0, "y": 0, "width": 10, "height": canvasHeight},
			{"x": canvasWidth-10, "y": 0, "width": 10, "height": canvasHeight},
			{"x": 0, "y": 0, "width": canvasWidth, "height": 10},
			{"x": grid.x[3], "y": grid.y[3], "width": brickWidth, "height": brickHeight},
			{"x": grid.x[11], "y": grid.y[3], "width": brickWidth, "height": brickHeight},
			{"x": grid.x[5], "y": grid.y[1], "width": brickWidth * 5 + 20, "height": brickHeight},
			// {"x": grid.x[6], "y": grid.y[5], "width": brickWidth * 3 + 10, "height": brickHeight},
		],
		"Paddle": {
			"width": 100,
			"height": 20,
			"x": (canvasWidth-paddleWidth)/2,
			"y": 700,
			"color": colors.gray,
			"speed": 5,	
			"maxX": canvasWidth - paddleWidth - 10,
			"minX": 10
		}
	}

	return {
		gamePieces: gamePieces,
		canvasWidth: canvasWidth,
		canvasHeight: canvasHeight,
		brickWidth: brickWidth,
		brickHeight: brickHeight,
		paddleX: paddleX,
		paddleY: paddleY,
		paddleWidth: paddleWidth,
		paddleHeight: paddleHeight,
		paddleColor: paddleColor,
		paddleSpeed: paddleSpeed,
		ballRadius: ballRadius,
		ballSpeed: ballSpeed,
		images: images,
		sounds: sounds,
		dialogHeight: dialogHeight,
		dialogWidth: dialogWidth,
		numberOfLives: numberOfLives
	}
}());