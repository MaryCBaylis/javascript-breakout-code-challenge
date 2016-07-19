var data = (function(){
	var canvasWidth = 1086;
	var canvasHeight = 768;
	var blockWidth = 100;
	var blockHeight = 10;

	var colors = {
		"red": "255, 0, 0, 1",
		"green": "0, 255, 0, 1",
		"blue": "0, 0, 255, 1"
	}

	var gamePieces = {
		"Blocks": [
			{"x": 10, "y": 10, "color": colors.red},
			{"x": 200, "y": 0, "color": colors.blue}
		],
		"Bricks": [
			{"x": 0, "y": 0, "width": canvasWidth, "height": canvasHeight}
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