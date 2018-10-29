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

	function roundedRectangle(context, x, y, w, h, color) {
	  var mx = x + w / 2;
	  var my = y + h / 2;
	  context.beginPath(); 
	  context.lineWidth="1";   
	  context.moveTo(x,my);
	  context.quadraticCurveTo(x, y, mx, y);
	  context.quadraticCurveTo(x+w, y, x+w, my);
	  context.quadraticCurveTo(x+w, y+h, mx, y+h);
	  context.quadraticCurveTo(x, y+h, x, my);
	  context.closePath();      
	  
	  context.stroke();
	  context.fillStyle = "rgba(" + color + ", 1)";
	  context.fill();
	}

	this.draw = function(context) {
		roundedRectangle(context, this.x, this.y, this.width, this.height, this.color);
	}
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

		draw: this.draw,

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