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
	var ball = new Ball(paddle);
	var gameIsActive = false;
	var gameLoop;
	var lastLoopTime;

	var loop = function(){

		//Get time passed since last iteration for smoother animation
		lastLoopTime = lastLoopTime || Date.now()
		var currentTime = Date.now()
		var elapsedTime = (currentTime - lastLoopTime)/3;
		lastLoopTime = currentTime;

		//Clear field
		context.clearRect(0, 0, field.width, field.height);

		//Add bricks
		for (var i = 0; i < bricks.length; i++){
			if (bricks[i].active && ball.collidesWith(bricks[i])){
				ball.bounceFrom(bricks[i]);
				bricks[i].fade();
			}
			//check for collision with ball. Inactivate brick and fade out if collision.
			bricks[i].update(elapsedTime);
			bricks[i].draw(context);
		}

		//Update and add paddle
		if (ball.collidesWith(paddle)){
			ball.bounceFrom(paddle);
		}
		paddle.update(elapsedTime);
		paddle.draw(context);

		//Add blocks
		for (var i = 0; i < blocks.length; i++){
			if(ball.collidesWith(blocks[i])){
				ball.bounceFrom(blocks[i]);
			}
			blocks[i].draw(context);
		}

		//Update and add ball
		ball.update(elapsedTime);
		ball.draw(context);
	}

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

			//Add Ball
			ball.draw(context);
		},

		start: function(){
			gameIsActive = true;
			gameLoop = window.setInterval(loop, 50);
			ball.start();
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