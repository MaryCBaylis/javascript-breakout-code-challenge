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
	var paddleSpeed = 10;
	var ballRadius = 10;
	var ballSpeed = 4;

	var images = {
		"block": "http://img08.deviantart.net/c4e2/i/2010/135/e/f/seamless_metal_rust_02_texture_by_hhh316.jpg",
		"background": "http://cdn.mysitemyway.com/etc-mysitemyway/webtreats/assets/posts/857/thumbs/tileable-classic-nebula-space-patterns-6.jpg"
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
		"Blocks": [
			{"x": 0, "y": 0, "width": 10, "height": canvasHeight},
			{"x": canvasWidth-10, "y": 0, "width": 10, "height": canvasHeight},
			{"x": 0, "y": 0, "width": canvasWidth, "height": 10},
		]
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
		images: images
	}
}());