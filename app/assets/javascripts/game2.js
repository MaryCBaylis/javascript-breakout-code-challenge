var Game = (function(){
	var blocks = [];
	var bricks = [];
	var paddle = new Paddle();
	var ball = new Ball(paddle);
	var collidables = [];
	var gameState = "Unstarted";
	var context;
	var lastLoopTime;
	var dialog = new Dialog();
	var livesRemaining = 2;
	var time = 0;
	var score = 0;
	var bricksRemaining = 0;

	var gameLoop = function(){
		if (bricksRemaining <= 0){
			dialog.draw(context, "Win", null, time, score);
			gameState = "GameOver";
			stop();
			return
		}
		if (ball.isOutOfBounds()){
			if (livesRemaining <= 0){
				dialog.draw(context, "Lose", null, time, score);
				gameState = "GameOver"
				stop();
				return
			}
			dialog.draw(context, "Again", livesRemaining);
			livesRemaining -= 1;
			gameState = "OutOfBounds";
			stop();
			return
		}

		lastLoopTime = lastLoopTime || Date.now()
		var currentTime = Date.now()
		var elapsedTime = (currentTime - lastLoopTime)/16;
		lastLoopTime = currentTime;

		clearScreen();
		
		sweepCollisions(elapsedTime, ball.getUnitTime(elapsedTime));
		for (var i = 0; i < collidables.length; i++){
			if (collidables[i].isABrick || collidables[i].isPaddle){
				collidables[i].update(elapsedTime);
			}
			collidables[i].draw(context);
		}
		ball.draw(context);
		paddle.draw(context);
	}

	var sweepCollisions = function(elapsedTime, unitTime){
		if (elapsedTime > 0){
			for (var i = 0; i < collidables.length; i++){
				var collidableObject = collidables[i];
				if (collidableObject.isABrick && collidableObject.isActive && ball.collidesWith(collidableObject)){
					ball.bounceFrom(collidableObject);
					collidableObject.fade();
					ball.update(unitTime);
					bricksRemaining -= 1;
					sweepCollisions(elapsedTime - unitTime, unitTime);
					return;
				} 
				else if (!collidableObject.isABrick && ball.collidesWith(collidableObject)){
					ball.bounceFrom(collidableObject);
					ball.update(unitTime);
					sweepCollisions(elapsedTime - unitTime, unitTime);
					return;
				}
			}
			ball.update(unitTime);
			sweepCollisions(elapsedTime - unitTime, unitTime);
		}
		return;
	}

	var setup = function(inContext){
		context = inContext;

		livesRemaining = 2;
		collidables = [];
		bricksRemaining = 0;

		for (var i = 0; i < data.gamePieces.Bricks.length; i++){
			var brick = new Brick(data.gamePieces.Bricks[i]);
			collidables.push(brick);
			brick.draw(context);
			bricksRemaining += 1;
		}

		for (var i = 0; i < data.gamePieces.Blocks.length; i++){
			var block = new Block(data.gamePieces.Blocks[i]);
			collidables.push(block);
			block.draw(context);
		}

		collidables.push(paddle);
		paddle.reset();
		paddle.draw(context);
		ball.reset(paddle);
		ball.draw(context);

		if (gameState == "Unstarted"){
			dialog.draw(context, "Start");
		}
	}

	var reset = function(){
		paddle.reset();
		ball.reset(paddle);
	}

	var clearScreen = function(){
		context.clearRect(0, 0, data.canvasWidth, data.canvasHeight);
	}

	var start = function(){
		loop = window.setInterval(gameLoop, 50);
	}

	var stop = function(){
		window.clearInterval(loop);
		lastLoopTime = null;
	}

	return {
		setup: setup,

		toggleGameState: function(){
			switch (gameState){
				case "Unstarted":
				case "Paused":
					start();
					gameState = "Active";
					break;
				case "Active":
					stop();
					gameState = "Paused";
					dialog.draw(context, "Paused");
					break;
				case "OutOfBounds":
					reset();
					start();
					gameState = "Active";
					break;
				case "GameOver":
					setup(context);
					start();
					gameState = "Active";
					break;

			}
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