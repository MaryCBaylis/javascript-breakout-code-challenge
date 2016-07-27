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
}

Block.prototype = (function(){
	return {
		draw: function(context){
			context.fillStyle = context.createPattern(this.image,"repeat");
			context.fillRect(this.x, this.y, this.width, this.height);
		}
	}
}());

