var Paddle = function(){
	this.x = data.paddleX;
	this.y = data.paddleY;
	this.width = data.paddleWidth;
	this.height = data.paddleHeight;
	this.xVelocity = 0;
	this.maxVelocity = data.maxPaddleVelocity;
	this.color = data.paddleColor;
	this.speed = data.paddleSpeed;
	this.isPaddle = true ;
}

Paddle.prototype = (function(){

	return {
		update: function(elapsedTime){
			var newX = this.x + (this.xVelocity * elapsedTime);
			if ((newX > 0) && (newX < data.canvasWidth - this.width)){
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