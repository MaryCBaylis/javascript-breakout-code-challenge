var Brick = function(brickParams){
	this.x = brickParams.x;
	this.y = brickParams.y;
	this.width = brickParams.width;
	this.height = brickParams.height;
}

Brick.prototype = (function(){
	return {
		draw: function(context){
			var brick = this;
			var img = new Image();
			img.src= "http://img08.deviantart.net/c4e2/i/2010/135/e/f/seamless_metal_rust_02_texture_by_hhh316.jpg"
			img.onload = function(){
				context.fillStyle = context.createPattern(img,"repeat");
				context.fillRect(brick.x, brick.y, brick.width, brick.height);
			}
		}
	}
}());

