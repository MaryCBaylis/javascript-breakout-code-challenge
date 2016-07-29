var Game = (function(){

	//Add the field
	var field = document.createElement("canvas")
	field.width = data.canvasWidth;
	field.height = data.canvasHeight;
	var context = field.getContext('2d')

	//Add the Actors
	var paddle = new Paddle();
	var collidables = [];
	var ball;
	var gameIsActive;
	var resetNeeded;
	var gameLoop;
	var lastLoopTime;
	var dialog = new Dialog();
	var maxLives = 3;
	var livesLeft = maxLives;
	var gameOver = true;
	var bricksRemaining = 0;
	var timer = new Timer();

	var clearBoard = function(){
		context.clearRect(0, 0, field.width, field.height);
	}

	var setupPlayer = function(){
		gameOver = false;
		bricksRemaining = 0;
		livesLeft = maxLives;

		paddle.setup();
		paddle.draw(context);

		//Add Ball
		ball = new Ball(paddle);
		ball.draw(context);
	}

	var setupGame = function(){
		gameOver = false;
		blocks = [];
		bricks = [];
		// paddle = new Paddle();
		// collidables = [];
		// ball = new Ball(paddle);
		gameIsActive = false;
		resetNeeded = false;

		$('#game-container').append(field)
		// context.clearRect(0, 0, field.width, field.height);

		//Add Bricks - Breakable
		for (var i = 0; i < data.gamePieces.Bricks.length; i++){
			var brick = new Brick(data.gamePieces.Bricks[i]);
			collidables.push(brick);
			brick.draw(context);
			bricksRemaining += 1;
		}

		//Add Blocks - Unbreakable
		for (var i = 0; i < data.gamePieces.Blocks.length; i++){
			var block = new Block(data.gamePieces.Blocks[i]);
			collidables.push(block);
			block.draw(context);
		}

		//Add Paddle
		collidables.push(paddle);
		timer.draw(context);

	}

	var start = function(){
		gameIsActive = true;
		lastLoopTime = null;
		gameLoop = window.setInterval(loop, 50);
	}

	var sweepCollisions = function(elapsedTime, unitTime){
		if (elapsedTime > 0){
			for (var i = 0; i < collidables.length; i++){
				var collidableObject = collidables[i];
				if (collidableObject.isABrick && collidableObject.isActive && ball.collidesWith(collidableObject)){
					ball.bounceFrom(collidableObject);
					collidableObject.fade();
					ball.update(unitTime);
					sweepCollisions(elapsedTime - unitTime, unitTime);
					bricksRemaining -= 1;
					return
				} 
				else if (!collidableObject.isABrick && ball.collidesWith(collidableObject)){
					ball.bounceFrom(collidableObject);
					ball.update(unitTime);
					sweepCollisions(elapsedTime - unitTime, unitTime);
					return
				}
			}
			ball.update(unitTime);
			sweepCollisions(elapsedTime - unitTime, unitTime);
		} else {
			return
		}
	}

	var gameShouldBeStopped = function(){
		if (bricksRemaining <= 0){
			gameIsActive = false;
			gameOver = true;
			dialog.draw(context, "Win", null, 100, 200);
			return true;
		}
		else if (ball.isOutOfBounds()) {
			livesLeft -= 1;
			gameIsActive = false;
			if (livesLeft <= 0){
				gameOver = true;
				dialog.draw(context, "Lose", null, 100, 100);
				return true;
			} else {
				dialog.draw(context, "Again", livesLeft);
				resetNeeded = true;
				return true;
			}
			return false;
		}
	}

	var loop = function(){
		if (gameShouldBeStopped()) {
			window.clearInterval(gameLoop);
			return;
		} 
		else {
			//Get time passed since last iteration for smoother animation
			lastLoopTime = lastLoopTime || Date.now()
			var currentTime = Date.now()
			var elapsedTime = (currentTime - lastLoopTime)/16;
			lastLoopTime = currentTime;

			sweepCollisions(elapsedTime, ball.getUnitTime(elapsedTime));

			//Clear field
			context.clearRect(0, 0, field.width, field.height);
			ball.draw(context);
			paddle.update(elapsedTime);

			for (var i = 0; i < collidables.length; i++){
				if (collidables[i].isABrick){
					collidables[i].update();
				}
				collidables[i].draw(context);
			}

			timer.update(elapsedTime);
			timer.draw(context);
		}
	}

	return {
		create: function(){
			setupPlayer();
			setupGame();
			dialog.draw(context, "Start");
		},

		toggleGame: function(){
			if (gameIsActive){
				gameIsActive = false;
				window.clearInterval(gameLoop);
				dialog.draw(context, "Paused");
			} else if (resetNeeded) {
				resetNeeded = false;
				clearBoard();
				setupPlayer();
				setupGame();
				start();
			} else if (gameOver){
				clearBoard();
				setupPlayer();
				setupGame();
				start();
			} else {
				clearBoard();
				start();
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