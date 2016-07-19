function Block(blockParams){
	this.x = blockParams.x;
	this.y = blockParams.y;
	this.color = blockParams.color;
}

Block.prototype.width = data.blockWidth;
Block.prototype.height = data.blockHeight;

Block.prototype.draw = function(context){
	context.fillStyle = "rgba(" + this.color + ")";
	context.fillRect(this.x, this.y, this.width, this.height)
}