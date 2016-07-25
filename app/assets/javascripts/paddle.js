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
	this.top = new Line(x, y, x + this.width, y);
	this.bottom = new Line(x, y + this.height, x + this.width, y + this.height);
	this.left = new Line(x, y, x, y + this.height);
	this.right(x + this.width, y, x + this.width, y + this.height);
}

Paddle.prototype = (function(){

	return {
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
		}
	}
}());