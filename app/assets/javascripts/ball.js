function Ball(paddle) {
	this.radius = data.ballRadius;
	this.x = paddle.x + paddle.width/2;
	this.y = paddle.y - this.radius;
	this.xVelocity = 1;
	this.yVelocity = -1;
	this.speed = data.ballSpeed;
	this.closestCollision = null;

	this.collidesWithOnXAxis = function(rectangleObject){
		return (this.radius + rectangleObject.width/2) > Math.abs(this.x - (rectangleObject.width/2 + rectangleObject.x));
	}

	this.collidesWithOnYAxis = function(rectangleObject){
		return (this.radius + rectangleObject.height/2) > Math.abs(this.y - (rectangleObject.height/2 + rectangleObject.y));		
	}

	this.collidesFromAbove = function(rectangleObject){
		return (this.y < rectangleObject.y);
	}

	this.collidesFromBelow = function(rectangleObject){
		return (this.y > rectangleObject.height + rectangleObject.y);
	}

	this.collidesFromRight = function(rectangleObject){
		return (this.x > rectangleObject.width + rectangleObject.x);
	}

	this.collidesFromLeft = function(rectangleObject){
		return (this.x < rectangleObject.x);
	}

}

Ball.prototype = (function(){
	return {
		start: function(){
			this.yVelocity = -this.speed;
		},

		update: function(elapsedTime){
			this.x = this.x + (this.xVelocity * elapsedTime);
			this.y = this.y + (this.yVelocity * elapsedTime);
		},

		draw: function(context){
			context.fillStyle = "rgba(255, 255, 255, 1)"
			context.beginPath();
			context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
			context.closePath();
			context.fill();
		},

		collidesWith: function(rectangleObject){
			return (this.collidesWithOnXAxis(rectangleObject) && this.collidesWithOnYAxis(rectangleObject));
		},

		bounceFrom: function(rectangleObject){
			if (this.collidesFromBelow(rectangleObject) || this.collidesFromAbove(rectangleObject)){
				this.yVelocity = -this.yVelocity;
			}
			if (this.collidesFromLeft(rectangleObject) || this.collidesFromRight(rectangleObject)){
				this.xVelocity = -this.xVelocity;
			}
		},

		willCollideWith: function(rectangleObject, elapsedTime){
			var course = new Line(this.x, this.y, this.x + (this.xVelocity * elapsedTime), this.y + (this.yVelocity * elapsedTime));
			var intersectionTop = course.intersectsAt(rectangleObject.top);
			// console.log(course)
			if (intersectionTop){
				return {
					collidable: rectangleObject,
					x: intersectionTop.x,
					y: intersectionTop.y,
					elapsedTime: elapsedTime * (intersectionTop.x / course.xDiff)
				}
			}
		},

		getUnitTime: function(elapsedTime){
			var newX = this.x + (this.xVelocity * elapsedTime);
			var newY = this.y + (this.yVelocity * elapsedTime);
			var distance = Math.sqrt((this.x - newX) * (this.x - newX) + (this.y - newY) * (this.y - newY));
			var ratio = (this.radius) / distance;
			return elapsedTime * ratio/2;
		}
	}
}());