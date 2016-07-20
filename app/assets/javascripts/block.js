function Block(blockParams){
	this.x = blockParams.x;
	this.y = blockParams.y;
	this.color = blockParams.color;
	this.fadeLevel = 1;
}

Block.prototype.draw = function(context){
	context.fillStyle = "rgba(" + this.color + ", " + this.fadeLevel + ")";
	context.fillRect(this.x, this.y, data.blockWidth, data.blockHeight)

	var grd = context.createLinearGradient(this.x, 0, this.x + data.blockWidth, 0);
	grd.addColorStop(0, "rgba(0, 0, 0, 0.4)");
	grd.addColorStop(1, "rgba(255, 255, 255, 0)");

	context.fillStyle = grd;
	context.fillRect(this.x, this.y, data.blockWidth, data.blockHeight);

	var grd = context.createLinearGradient(0, this.y, 0, this.y + data.blockHeight);
	grd.addColorStop(0, "rgba(0, 0, 0, " + this.fadeLevel * 0.4 + ")");
	grd.addColorStop(1, "rgba(255, 255, 255, 0)");

	context.fillStyle = grd;
	context.fillRect(this.x, this.y, data.blockWidth, data.blockHeight);
}