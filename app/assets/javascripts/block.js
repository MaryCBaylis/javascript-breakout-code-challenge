var Block = function(blockParams){
	this.x = blockParams.x;
	this.y = blockParams.y;
	this.width = blockParams.width;
	this.height = blockParams.height;
	this.image = new Image();
	this.image.src = data.images.block;
	this.top = new Line(x, y, x + this.width, y);
	this.bottom = new Line(x, y + this.height, x + this.width, y + this.height);
	this.left = new Line(x, y, x, y + this.height);
	this.right(x + this.width, y, x + this.width, y + this.height);
}

Block.prototype = (function(){
	return {
		draw: function(context){
			context.fillStyle = context.createPattern(this.image,"repeat");
			context.fillRect(this.x, this.y, this.width, this.height);
		}
	}
}());

