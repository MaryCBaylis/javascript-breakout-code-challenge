var game = (function(){

	//Add the field
	var field = document.createElement("canvas")
	field.width = data.canvasWidth;
	field.height = data.canvasHeight;
	var context = field.getContext('2d')

	var blocks = [];
	var ball = new Ball();
	var bricks = [];

	return {
		setup: function(){
			$('#game-container').append(field)
			context.clearRect(0, 0, field.width, field.height);
			for (var i = 0; i < data.gamePieces.Bricks.length; i++){
				var brick = new Brick(data.gamePieces.Bricks[i]);
				bricks.push(brick);
				brick.draw(context);
			}
			for (var i = 0; i < data.gamePieces.Blocks.length; i++){
				var block = new Block(data.gamePieces.Blocks[i]);
				blocks.push(block);
				block.draw(context);
			}
		}
	}
}());