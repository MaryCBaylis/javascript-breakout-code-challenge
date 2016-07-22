var Brick = function(brickParams){
	this.x = brickParams.x;
	this.y = brickParams.y;
	this.color = brickParams.color;
	this.fadeLevel = 1;
}

Brick.prototype = (function(){
	return {
		update: function(){

		}, 
		
		draw: function(context){
			//Draw color brick
			context.fillStyle = "rgba(" + this.color + ", " + this.fadeLevel + ")";
			context.fillRect(this.x, this.y, data.brickWidth, data.brickHeight)

			//Add horizontal shadow
			var shadow = context.createLinearGradient(this.x, 0, this.x + data.brickWidth, 0);
			shadow.addColorStop(0, "rgba(0, 0, 0, " + this.fadeLevel * 0.4 + ")");
			shadow.addColorStop(1, "rgba(255, 255, 255, 0)");

			context.fillStyle = shadow;
			context.fillRect(this.x, this.y, data.brickWidth, data.brickHeight);

			//Add vertical shadow
			shadow = context.createLinearGradient(0, this.y, 0, this.y + data.brickHeight);
			shadow.addColorStop(0, "rgba(0, 0, 0, " + this.fadeLevel * 0.4 + ")");
			shadow.addColorStop(1, "rgba(255, 255, 255, 0)");

			context.fillStyle = shadow;
			context.fillRect(this.x, this.y, data.brickWidth, data.brickHeight);
		}
	}
}());