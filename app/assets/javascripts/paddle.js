var Paddle = function(){
	this.x = data.paddleX;
	this.y = data.paddleY;
	this.width = data.paddleWidth;
	this.height = data.paddleHeight;
	this.xVelocity = 0;
	this.maxVelocity = data.maxPaddleVelocity;
	this.color = data.paddleColor;
	this.speed = data.paddleSpeed;
}

Paddle.prototype = (function(){
	return {
		update: function(elapsedTime){
			this.x += this.xVelocity * elapsedTime;
		},

		draw: function(context){
			context.fillStyle = "rgba(" + this.color + ", 1)";
			context.fillRect(this.x, this.y, this.width, this.height);
		},

		move: function(velocity){
			// var newVelocity = this.xVelocity + velocity
			// if (newVelocity <= this.maxVelocity && newVelocity >= -this.maxVelocity){
			// 	this.xVelocity += velocity;
			// }
			this.xVelocity = velocity * this.speed;
			// this.x += velocity * this.speed;
			console.log(this.xVelocity);
		},

		stopLeftMovement: function(){
			this.xVelocity = Math.max(this.xVelocity, 0)
		},

		stopRightMovement: function(){
			this.xVelocity = Math.min(this.xVelocity, 0)
		}
	}
}());