var Dialog = function(){
}

Dialog.prototype = (function(){
	return {
		setup: function(type){
			switch (type) {
				case "Start":
					console.log("starting");
					break;
			}
		},

		draw: function(context, type){
			// switch (type){
			// 	case: "Start":

			// }
			var params = data.dialogs[type];

			//Center background
			var x = data.canvasWidth/2 - params.width/2;
			var y = data.canvasHeight/2 - params.height/2;

			//Create background rectangle
			context.fillStyle = "rgba(255, 255, 255, 0.75)";
			context.fillRect(x, y, params.width, params.height)

			context.fillStyle = "rgba(0,0,0,1)";
			for (var i = 0; i < params.lines.length; i++){
				console.log(params.lines[i])
				console.log()
				context.font = params.lines[i].size + "px " + params.lines[i].font;
				context.textAlign = "center";
				context.fillText(params.lines[i].text, data.canvasWidth/2, (y + params.lines[i].size) * i + 200);
			}
		}
	}
}());