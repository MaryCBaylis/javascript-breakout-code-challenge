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
	var collidables = [];
	var ball = new Ball(paddle);
	var gameIsActive = false;
	var gameLoop;
	var lastLoopTime;
	var dialog = new Dialog();

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
		paddle.draw(context);

		for (var i = 0; i < collidables.length; i++){
			if (collidables[i].isABrick){
				collidables[i].update();
			}
			collidables[i].draw(context);
		}
	}

	return {
		setup: function(){
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
		},

		start: function(){
			if (gameIsActive){
				gameIsActive = false;
				window.clearInterval(gameLoop);
				dialog.draw(context, "Paused");
			} else {
				gameIsActive = true;
				lastLoopTime = null;
				gameLoop = window.setInterval(loop, 50);
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