var Rectangle = function(x, y, width, height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.topLine = new Line(x, y, x + this.width, y);
	this.bottomLine = new Line(x, y + this.height, x + this.width, y + this.height);
	this.rightLine = new Line(x + this.width, y, x + this.width, y + this.height);
	this.leftLine = new Line(x, y, x, y + this.height);
}

Rectangle.prototype = (function(){
	return {
		collidesWith: function(line){
			return 
		},

		collidesWithTop: function(line){
			return this.topLine.intersectsAt(line);
		}, 

		collidesWithBottom: function(line){
			return this.bottomLine.intersectsAt(line);
		},

		collidesWithRight: function(line){
			return this.rightLine.intersectsAt(line);
		}, 

		collidesWithLeft: function(line) {
			return this.leftLine.intersectsAt(line);
		}
	}

}());