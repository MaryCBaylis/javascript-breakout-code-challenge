var Block = function(blockParams){
	this.x = blockParams.x;
	this.y = blockParams.y;
	this.width = blockParams.width;
	this.height = blockParams.height;
	this.image = new Image();
	this.image.src = data.images.block;
	this.sound = data.sounds.block;
}

Block.prototype = (function(){
	return {
		draw: function(context){
			context.fillStyle = context.createPattern(this.image,"repeat");
			context.fillRect(this.x, this.y, this.width, this.height);
		},

		playSound: function(){
			SoundHelper.play(this.sound)
		}
	}
}());

