var Score = function(){
	this.score = 0;
	this.x = data.canvasWidth - 150;
	this.y = data.canvasHeight - 10;
}

Score.prototype = (function(){
	return {
		update: function(increment){
			this.score += increment;
		},

		reset: function(){
			this.score = 0;
		},

		draw: function(context){
			context.fillStyle = "rgba(255, 255, 255, 0.75)";
			context.textAlign = "left";
			context.font = "18px Arial";
			context.fillText("Score: " + this.score, this.x, this.y);
		}
	}

}());