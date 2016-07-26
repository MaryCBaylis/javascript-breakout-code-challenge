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

	// var sweepCollisions = function(totalDistance, unitDistance){
	// 	var velocityRatio = unitDistance/totalDistance;
	// 	for (var distanceTraveled = unitDistance; unitDistance <= totalDistance; distanceTraveled += unitDistance){

	// 	}
	// }

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


		//Clear field
		// context.clearRect(0, 0, field.width, field.height);

		// var collisions = [];

		// // ball.update(elapsedTime, collidables);
		// for (var i = 0; i < collidables.length; i++){
		// 	var rectangleObject = collidables[i];
		// 	var collision = ball.willCollideWith(rectangleObject, elapsedTime);
		// 	if (collision) {
		// 		// console.log(collision);
		// 		if (rectangleObject.isABrick){
		// 			rectangleObject.fade();
		// 			ball.x = collision.x;
		// 			ball.y = collision.y;
		// 			ball.draw(context);
		// 		}
		// 		// console.log(collision);
		// 		collisions.push(collision);
		// 	}
		// }

		// ball.update(elapsedTime);
		//Add bricks
		// for (var i = 0; i < bricks.length; i++){
		// 	if (bricks[i].active && ball.collidesWith(bricks[i])){
		// 		ball.bounceFrom(bricks[i]);
		// 		bricks[i].fade();
		// 	}
		// 	//check for collision with ball. Inactivate brick and fade out if collision.
		// 	bricks[i].update(elapsedTime);
		// 	bricks[i].draw(context);
		// }

		// //Update and add paddle
		// if (ball.collidesWith(paddle)){
		// 	ball.bounceFrom(paddle);
		// }
		// paddle.update(elapsedTime);
		// paddle.draw(context);

		// //Add blocks
		// for (var i = 0; i < blocks.length; i++){
		// 	if(ball.collidesWith(blocks[i])){
		// 		ball.bounceFrom(blocks[i]);
		// 	}
		// 	blocks[i].draw(context);
		// }

		//Update and add ball
		// ball.update(elapsedTime);
		// ball.draw(context);
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