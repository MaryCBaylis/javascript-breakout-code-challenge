var Paddle = function(){
	this.x = data.paddleX;
	this.y = data.paddleY;
	this.width = data.paddleWidth;
	this.height = data.paddleHeight;
	this.xVelocity = 0;
	this.maxVelocity = data.maxPaddleVelocity;
	this.color = data.paddleColor;
	this.speed = data.paddleSpeed;
	this.isPaddle = true;
	this.top = new Line(this.x, this.y, this.x + this.width, this.y);
	this.bottom = new Line(this.x, this.y + this.height, this.x + this.width, this.y + this.height);
	this.left = new Line(this.x, this.y, this.x, this.y + this.height);
	this.right = new Line(this.x + this.width, this.y, this.x + this.width, this.y + this.height);
}

Paddle.prototype = (function(){

	return {

		setup: function(){
			this.x = data.paddleX;
			this.y = data.paddleY;
			this.xVelocity = 0;
		},

		reset: function(){
			this.x = data.paddleX;
			this.y = data.paddleY;
			this.xVelocity = 0;
		},

		update: function(elapsedTime){
			var newX = this.x + (this.xVelocity * elapsedTime);
			if (newX < 0){
				this.x = 0;
			} else if (newX > data.canvasWidth - this.width){
				this.x = data.canvasWidth - this.width;
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
		}
	}
}());