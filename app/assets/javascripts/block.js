var Block = function(blockParams){
	this.x = blockParams.x;
	this.y = blockParams.y;
	this.width = blockParams.width;
	this.height = blockParams.height;
	this.imgLoaded = false
}

Block.prototype = (function(){
	return {
		draw: function(context){
			var block = this;
			var img = new Image()
			img.src = data.images.block;
			if (!block.imgLoaded){
				img.onload = function(){
					block.imgLoaded = true;
					context.fillStyle = context.createPattern(img,"repeat");
					context.fillRect(block.x, block.y, block.width, block.height);
				}
			} else {
				context.fillStyle = context.createPattern(img,"repeat");
				context.fillRect(block.x, block.y, block.width, block.height);
			}
		}
	}
}());

