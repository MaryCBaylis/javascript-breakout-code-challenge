var Game = (function(){

	//Add the field
	var field = document.createElement("canvas")
	field.width = data.canvasWidth;
	field.height = data.canvasHeight;
	var context = field.getContext('2d')

	//Add the Actors
	var paddle;
	var collidables;
	var ball;
	var gameIsActive;
	var resetNeeded;
	var gameLoop;
	var lastLoopTime;
	var dialog = new Dialog();
	var livesLeft = 3;

	var setup = function(){
		blocks = [];
		bricks = [];
		paddle = new Paddle();
		collidables = [];
		ball = new Ball(paddle);
		gameIsActive = false;
		resetNeeded = false;

		$('#game-container').append(field)
		context.clearRect(0, 0, field.width, field.height);

		//Add Bricks - Breakable
		for (var i = 0; i < data.gamePieces.Bricks.length; i++){
			var brick = new Brick(data.gamePieces.Bricks[i]);
			collidables.push(brick);
			brick.draw(context);
		}

		//Add Blocks - Unbreakable
		for (var i = 0; i < data.gamePieces.Blocks.length; i++){
			var block = new Block(data.gamePieces.Blocks[i]);
			collidables.push(block);
			block.draw(context);
		}

		//Add Paddle
		collidables.push(paddle);
		paddle.draw(context);

		//Add Ball
		ball.draw(context);

		// dialog.setup("Start");
		dialog.draw(context, "Start");
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

	var loop = function(){
		if (ball.isOutOfBounds()) {
			livesLeft -= 1;
			gameIsActive = false;
			window.clearInterval(gameLoop);
			if (livesLeft <= 0){
				dialog.draw(context, "Lose", null, 100, 100)
			} else {
				console.log("lives left", livesLeft);
				dialog.draw(context, "Again", livesLeft);
				resetNeeded = true;
			}
			return;
		}
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
	}

	return {
		setup: setup,

		startOrPause: function(){
			if (gameIsActive){
				gameIsActive = false;
				window.clearInterval(gameLoop);
				dialog.draw(context, "Paused");
			} else if (resetNeeded) {
				resetNeeded = false;
				setup();
				start()
			} else {
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