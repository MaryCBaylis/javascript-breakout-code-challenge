var Timer = function(){
	this.time = 0;
	this.x = 20;
	this.y = data.canvasHeight - 10;
	this.width = 0;
	this.height = 0;
}

Timer.prototype = (function(){

	var formatTime = function(time){
		var hours = Math.floor(time/(100*60*60));
		timeLeft = time % (100 * 60 * 60);
		var minutes = Math.floor(timeLeft/(100*60));
		timeLeft = timeLeft % (100 * 60);
		var seconds = Math.floor(timeLeft/100);
		timeLeft = timeLeft % 100;
		var milleseconds = Math.floor(timeLeft);

		result = hours > 0 ? hours + ":" : "";
		result += minutes > 9 ? minutes + ":" : "0" + minutes + ":";
		result += seconds > 9 ? seconds + ":" : "0" + seconds + ":";
		result += milleseconds > 9 ? milleseconds : "0" + milleseconds;
		return result;
	}

	return {
		reset: function(){
			this.time = 0;
		},

		draw: function(context){
			context.fillStyle = "rgba(255, 255, 255, 0.75)";
			context.textAlign = "left";
			context.font = "18px Arial";
			context.fillText("Time: " + formatTime(this.time), this.x, this.y);
		},

		update: function(elapsedTime){
			this.time += elapsedTime;
		},

		getFormattedTime: function(){
			return formatTime(this.time);
		}
	}
}());