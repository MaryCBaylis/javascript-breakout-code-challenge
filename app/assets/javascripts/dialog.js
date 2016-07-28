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

	var gameOver = function(context, time, score){
		context.font = "30px Arial";
		context.fillText("You're out of lives! Bummer.", data.canvasWidth/2, 200);

		context.font = "18px Arial";
		context.fillText("Score: " + score, data.canvasWidth/2, 300);
		context.fillText("Time: " + time, data.canvasWidth/2, 350);

		context.fillText("Press SPACE to give it another shot!", data.canvasWidth/2, 450);
	}

	return {
		draw: function(context, type, livesRemaining, score, time){
			console.log("lives remianing", livesRemaining);
			var params = this.dialogs[type];

			// //Create background rectangle
			context.fillStyle = "rgba(255, 255, 255, 0.75)";
			context.fillRect(this.x, this.y, this.width, this.height)

			context.fillStyle = "rgba(0,0,0,1)";
			context.textAlign = "center";
			// startDialog(context);
			console.log("type is ", type)
			switch(type){
				case "Start":
					startDialog(context);
					break;
				case "Paused":
					console.log("hi")
					pausedDialog(context);
					break;
				case "Again":
					tryAgainDialog(context, livesRemaining);
					break;
				case "Lose":
				gameOver(context, score, time);
					break;
			}
			// for (var i = 0; i < params.lines.length; i++){
			// 	console.log(params.lines[i])
			// 	console.log()
			// 	context.font = params.lines[i].size + "px " + params.lines[i].font;
			// 	context.textAlign = "center";
			// 	context.fillText(params.lines[i].text, data.canvasWidth/2, (this.y + params.lines[i].size) * i + 200);
			// }
		}
	}
}());