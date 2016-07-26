var Line = function(x1, y1, x2, y2){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
}

Line.prototype = (function(){
	return {
		intersectsAt: function(line){
		  var denominator = ((this.x2 - this.x1) * (line.y2 - line.y1)) - ((this.y2 - this.y1) * (line.x2 - line.x1));
		  var numerator1 = ((this.y1 - line.y1) * (line.x2 - line.x1)) - ((this.x1 - line.x1) * (line.y2 - line.y1));
		  var numerator2 = ((this.y1 - line.y1) * (this.x2 - this.x1)) - ((this.x1 - line.x1) * (this.y2 - this.y1));

		  if (denominator === 0 || numerator1 === 0 || numerator2 === 0){
				return null;
			}

			var u1 = numerator1 / denominator;
			var u2 = numerator2 / denominator;

			if (u1 >= 0 && u1 <= 1 && u2 >= 0 && u2 <= 1) {
				return {
					x: this.x1 + (u1 * (this.x2 - this.x1)),
      		y: this.y1 + (u2 * (this.y2 - this.y1))
				}
			}

			return null;
		}
	}
}())