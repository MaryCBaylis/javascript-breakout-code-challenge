var Game = (function(){

	//Add the field
	var field = document.createElement("canvas")
	field.width = data.canvasWidth;
	field.height = data.canvasHeight;
	var context = field.getContext('2d')

	//Add the Actors
	var blocks = [];
	var bricks = [];
	var paddle = new Paddle();
	var gameIsActive = false;
	var gameLoop;
	var lastLoopTime = Date.now();

	var loop = function(){
		var currentTime = Date.now()
		var elapsedTime = (currentTime - lastLoopTime)/100;
		lastLoopTime = currentTime;
		context.clearRect(0, 0, field.width, field.height);
		for (var i = 0; i < bricks.length; i++){
			bricks[i].draw(context);
		}
		for (var i = 0; i < blocks.length; i++){
			blocks[i].draw(context);
		}
		paddle.update(elapsedTime);
		paddle.draw(context);
	}

	var start = function(){
		console.log("here i go!")
		gameLoop = window.setInterval(loop, 20);
	}

	$(document).keypress(function(e){
		//If spacebar is pressed when game is not active
		if (e.which == 32 && !gameIsActive) {
			gameIsActive = true;
			start();		}
	})

	return {
		setup: function(){
			$('#game-container').append(field)
			context.clearRect(0, 0, field.width, field.height);

			//Add Bricks - Breakable
			for (var i = 0; i < data.gamePieces.Bricks.length; i++){
				var brick = new Brick(data.gamePieces.Bricks[i]);
				bricks.push(brick);
				brick.draw(context);
			}

			//Add Blocks - Unbreakable
			for (var i = 0; i < data.gamePieces.Blocks.length; i++){
				var block = new Block(data.gamePieces.Blocks[i]);
				blocks.push(block);
				block.draw(context);
			}

			//Add Paddle
			paddle.draw(context);
		},

		start: function(){
			gameIsActive = true;
			gameLoop = window.setInterval(loop, 50);
		},

		movePaddleLeft: function(){
			paddle.move(-1);
		},

		movePaddleRight: function(){
			paddle.move(1);
		},

		stopLeftPaddleMovement: function(){
			paddle.stopLeftMovement();
		},

		stopRightPaddleMovement: function(){
			paddle.stopRightMovement();
		}
	}
}());