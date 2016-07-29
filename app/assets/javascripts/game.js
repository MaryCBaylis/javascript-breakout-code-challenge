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
	var player = new PlayerLives();
	var score = new Score();
	var bricksRemaining = 0;
	var timer = new Timer();

	var gameLoop = function(){
		//Check game state
		if (bricksRemaining <= 0){
			dialog.draw(context, "Win", null, score.score, timer.getFormattedTime());
			gameState = "GameOver";
			stop();
			return
		}
		if (ball.isOutOfBounds()){
			// player.loseLife();
			if (player.outOfLives()){
				dialog.draw(context, "Lose", null, score.score, timer.getFormattedTime());
				gameState = "GameOver"
				stop();
				return
			}
			dialog.draw(context, "Again", player.livesRemaining);
			gameState = "OutOfBounds";
			stop();
			return
		}

		//Grab time elapsed since last loop
		lastLoopTime = lastLoopTime || Date.now()
		var currentTime = Date.now()
		var elapsedTime = (currentTime - lastLoopTime)/16;
		lastLoopTime = currentTime;

		clearScreen();
		
		//Check collisions
		sweepCollisions(elapsedTime, ball.getUnitTime(elapsedTime));
		for (var i = 0; i < collidables.length; i++){
			if (collidables[i].isABrick || collidables[i].isPaddle){
				collidables[i].update(elapsedTime);
			}
			collidables[i].draw(context);
		}
		ball.draw(context);
		paddle.draw(context);
		timer.update(elapsedTime);
		timer.draw(context);
		score.draw(context);
		player.draw(context, ball);
	}

	var sweepCollisions = function(elapsedTime, unitTime){
		if (elapsedTime > 0){
			for (var i = 0; i < collidables.length; i++){
				var collidableObject = collidables[i];
				if (collidableObject.isABrick && collidableObject.isActive && ball.collidesWith(collidableObject)){
					ball.bounceFrom(collidableObject);
					collidableObject.fade();
					collidableObject.playSound();
					ball.update(unitTime);
					bricksRemaining -= 1;
					score.update(10);
					sweepCollisions(elapsedTime - unitTime, unitTime);
					return;
				} 
				else if (!collidableObject.isABrick && ball.collidesWith(collidableObject)){
					collidableObject.playSound();
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

		player.reset();
		collidables = [];
		bricksRemaining = 0;
		timer.reset();
		score.reset();

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
		timer.draw(context);
		score.draw(context);
		player.draw(context, ball);

		if (gameState == "Unstarted"){
			dialog.draw(context, "Start");
		}
	}

	var reset = function(){
		player.loseLife();
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
					player.loseLife();
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