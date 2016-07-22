function Ball(paddle) {
	this.diameter = data.ballDiameter;
	this.x = paddle.x + paddle.width/2;
	this.y = paddle.y - this.diameter;
}

Ball.prototype = (function(){
	return {
		draw: function(context){
			context.fillStyle = "rgba(255, 255, 255, 1)"
			context.beginPath();
			context.arc(this.x, this.y, this.diameter, 0, 2*Math.PI, true);
			context.closePath();
			context.fill();
		}
	}
}());