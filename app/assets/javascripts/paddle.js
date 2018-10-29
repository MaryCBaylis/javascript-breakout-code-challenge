var Paddle = function(paddleParams){
	this.startX = paddleParams.x;
	this.startY = paddleParams.y;
	this.x = this.startX;
	this.y = this.startY;
	this.width = paddleParams.width;
	this.height = paddleParams.height;
	this.xVelocity = 0;
	this.maxVelocity = data.maxPaddleVelocity;
	this.maxX = paddleParams.maxX;
	this.minX = paddleParams.minX;
	this.color = paddleParams.color;
	this.speed = paddleParams.speed;
	this.isPaddle = true;
	this.sound = paddleParams.sound;
}

Paddle.prototype = (function(){

	return {

		reset: function(){
			this.x = this.startX;
			this.y = this.startY;
			this.xVelocity = 0;
		},

		update: function(elapsedTime){
			var newX = this.x + (this.xVelocity * elapsedTime);
			if (newX < this.minX){
				this.x = this.minX;
			} else if (newX > this.maxX){
				this.x = this.maxX;
			} else {
				this.x = newX;
			}
		},

		draw: function(context){
			context.fillStyle = "rgba(" + this.color + ", 1)";
			context.fillRect(this.x, this.y, this.width, this.height);
		},

		move: function(velocity){
			this.xVelocity = velocity * this.speed;
		},

		stopLeftMovement: function(){
			this.xVelocity = Math.max(this.xVelocity, 0)
		},

		stopRightMovement: function(){
			this.xVelocity = Math.min(this.xVelocity, 0)
		},

		getMidPoint: function(){
			return this.x + this.width/2;
		},

		playSound: function(){
			this.sound.play();
		}
	}
}());