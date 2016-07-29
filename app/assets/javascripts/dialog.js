var Dialog = function(){
	this.width = data.dialogWidth;
	this.height = data.dialogHeight;
	this.x = data.canvasWidth/2 - this.width/2;
	this.y = data.canvasHeight/2 - this.height/2;
}

Dialog.prototype = (function(){

	var startDialog = function(context){
		context.font = "30px Arial";
		context.fillText("Break All the Bricks!", data.canvasWidth/2, 200);

		context.font = "18px Arial";
		context.fillText("Use the LEFT and RIGHT arrows to move the paddle.", data.canvasWidth/2, 400);

		context.font = "18px Arial";
		context.fillText("Press SPACE to begin", data.canvasWidth/2, 600);
	}

	var pausedDialog = function(context){
		context.font = "30px Arial";
		context.fillText("PAUSED", data.canvasWidth/2, 200);

		context.font = "18px Arial";
		context.fillText("Press SPACE to continue", data.canvasWidth/2, 400);
	}

	var tryAgainDialog = function(context, livesRemaining){
		context.font = "30px Arial";
		context.fillText("OUCH!", data.canvasWidth/2, 200);

		context.font = "18px Arial";
		if (livesRemaining === 1){
			context.fillText("You have " + livesRemaining + " life left.", data.canvasWidth/2, 400);
		} else {
			context.fillText("You have " + livesRemaining + " lives left.", data.canvasWidth/2, 400);
		}

		context.font = "18px Arial";
		context.fillText("Press SPACE to give it another shot!", data.canvasWidth/2, 600);		
	}

	var gameOverDialog = function(context, score, time){
		context.font = "30px Arial";
		context.fillText("You're out of lives! Bummer.", data.canvasWidth/2, 200);

		context.font = "18px Arial";
		context.fillText("Score: " + score, data.canvasWidth/2, 300);
		context.fillText("Time: " + time, data.canvasWidth/2, 350);

		context.fillText("Press SPACE to start over!", data.canvasWidth/2, 450);
	}

	var winDialog = function(context, score, time){
		context.font = "30px Arial";
		context.fillText("Winner!", data.canvasWidth/2, 200);

		context.font = "18px Arial";
		context.fillText("Score: " + score, data.canvasWidth/2, 300);
		context.fillText("Time: " + time, data.canvasWidth/2, 350);

		context.fillText("Press SPACE to start over!", data.canvasWidth/2, 450);
	}

	return {
		draw: function(context, type, livesRemaining, score, time){
			//Create background rectangle
			context.fillStyle = "rgba(255, 255, 255, 0.75)";
			context.fillRect(this.x, this.y, this.width, this.height)

			context.fillStyle = "rgba(0,0,0,1)";
			context.textAlign = "center";
			switch(type){
				case "Start":
					startDialog(context);
					break;
				case "Paused":
					pausedDialog(context);
					break;
				case "Again":
					tryAgainDialog(context, livesRemaining);
					break;
				case "Lose":
				gameOverDialog(context, score, time);
					break;
				case "Win":
					winDialog(context, score, time);
					break;
			}
		}
	}
}());