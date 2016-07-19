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
			for (var i = 0; i < data.gamePieces.Blocks.length; i++){
				var block = new Block(data.gamePieces.Blocks[i]);
				blocks.push(block);
				block.draw(context);
			}
		}
	}
}());