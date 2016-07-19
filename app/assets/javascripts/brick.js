function Brick(brickParams) {
	this.x = brickParams.x;
	this.y = brickParams.y;
	this.width = brickParams.width;
	this.height = brickParams.height;
}

Brick.prototype.draw = function(context){
	context.fillStyle = "black";
	context.fillRect(this.x, this.y, this.width, this.height)
}