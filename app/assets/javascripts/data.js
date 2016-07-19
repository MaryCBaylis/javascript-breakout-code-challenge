var data = (function(){
	var canvasWidth = 1086;
	var canvasHeight = 768;
	var blockWidth = 100;
	var blockHeight = 20;

	var colors = {
		"red": "255, 0, 0",
		"green": "0, 255, 0",
		"blue": "0, 0, 255"
	}

	var gamePieces = {
		"Blocks": [
			{"x": 10, "y": 10, "color": colors.red},
			{"x": 200, "y": 0, "color": colors.blue}
		],
		"Bricks": [
			{"x": 0, "y": 0, "width": 10, "height": canvasHeight},
			{"x": canvasWidth-10, "y": 0, "width": 10, "height": canvasHeight},
			{"x": 0, "y": 0, "width": canvasWidth, "height": 10}
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