function Block(blockParams){
	this.x = blockParams.x;
	this.y = blockParams.y;
	this.color = blockParams.color;
	this.fadeLevel = 1;
}

Block.prototype.draw = function(context){
	context.fillStyle = "rgba(" + this.color + ", " + this.fadeLevel + ")";
	context.fillRect(this.x, this.y, data.blockWidth, data.blockHeight)
}