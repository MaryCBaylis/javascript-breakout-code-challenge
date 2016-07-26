var Block = function(blockParams){
	this.x = blockParams.x;
	this.y = blockParams.y;
	this.width = blockParams.width;
	this.height = blockParams.height;
	this.image = new Image();
	this.image.src = data.images.block;
	this.top = new Line(this.x, this.y, this.x + this.width, this.y);
	this.bottom = new Line(this.x, this.y + this.height, this.x + this.width, this.y + this.height);
	this.left = new Line(this.x, this.y, this.x, this.y + this.height);
	this.right = new Line(this.x + this.width, this.y, this.x + this.width, this.y + this.height);
	this.context;
}

Block.prototype = (function(){
	return {
		setup: function(){
			var field = document.createElement("canvas")
			field.width = data.canvasWidth;
			field.height = data.canvasHeight;
			this.context = field.getContext('2d');
			$("#game-container").append(field);
		}, 

		draw: function(context){
			this.context.fillStyle = this.context.createPattern(this.image,"repeat");
			this.context.fillRect(this.x, this.y, this.width, this.height);
		}
	}
}());

