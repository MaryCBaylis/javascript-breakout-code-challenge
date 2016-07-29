var PlayerLives = function(){
	this.livesRemaining = data.numberOfLives;
	this.x = data.canvasWidth/2 - 50;
	this.y = data.canvasHeight - 10;
}

PlayerLives.prototype = (function(){
	return {
		loseLife: function(){
			this.livesRemaining -= 1;
		},

		reset: function(){
			this.livesRemaining = data.numberOfLives;
		},

		outOfLives: function(){
			return this.livesRemaining <= 0;
		},

		draw: function(context, ball){
			context.fillStyle = "rgba(255, 255, 255, 0.75)";
			context.textAlign = "left";
			context.font = "18px Arial";
			context.fillText("Lives: ", this.x, this.y);
			for (var i = 0; i < this.livesRemaining; i++){
				context.fillStyle = "rgba(255, 255, 255, 1)"
				context.beginPath();
				context.arc(this.x + 50 + 2.5 * ball.radius * i + 25, this.y - 5, ball.radius, 0, 2*Math.PI, true);
				context.closePath();
				context.fill();
			}
		}
	}

}());