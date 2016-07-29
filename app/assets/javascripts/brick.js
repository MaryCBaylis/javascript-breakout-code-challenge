var Brick = function(brickParams){
	this.x = brickParams.x;
	this.y = brickParams.y;
	this.width = data.brickWidth;
	this.height = data.brickHeight;
	this.color = brickParams.color;
	this.fadeLevel = 1;
	this.isActive = true;
	this.top = new Line(this.x, this.y, this.x + this.width, this.y);
	this.bottom = new Line(this.x, this.y + this.height, this.x + this.width, this.y + this.height);
	this.left = new Line(this.x, this.y, this.x, this.y + this.height);
	this.right = new Line(this.x + this.width, this.y, this.x + this.width, this.y + this.height);
	this.isABrick = true;
	this.sound = data.sounds.brick;
}

Brick.prototype = (function(){
	return {
		update: function(){
			if (!this.isActive && this.fadeLevel > 0){
				this.fadeLevel = this.fadeLevel - 0.1;
			}
		}, 

		draw: function(context){
			console.log(this.sound)
			//Draw color brick
			context.fillStyle = "rgba(" + this.color + ", " + this.fadeLevel + ")";
			context.fillRect(this.x, this.y, this.width, this.height)

			//Add horizontal shadow
			var shadow = context.createLinearGradient(this.x, 0, this.x + this.width, 0);
			shadow.addColorStop(0, "rgba(0, 0, 0, " + this.fadeLevel * 0.4 + ")");
			shadow.addColorStop(1, "rgba(255, 255, 255, 0)");

			context.fillStyle = shadow;
			context.fillRect(this.x, this.y, this.width, this.height);

			//Add vertical shadow
			shadow = context.createLinearGradient(0, this.y, 0, this.y + this.height);
			shadow.addColorStop(0, "rgba(0, 0, 0, " + this.fadeLevel * 0.4 + ")");
			shadow.addColorStop(1, "rgba(255, 255, 255, 0)");

			context.fillStyle = shadow;
			context.fillRect(this.x, this.y, this.width, this.height);
		},

		fade: function(){
			this.isActive = false;
		},

		playSound: function(){
			SoundHelper.play("/assets/brick.mp3")
		}
	}
}());