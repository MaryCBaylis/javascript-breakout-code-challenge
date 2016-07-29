// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require data
//= require soundHelper
//= require score
//= require player
//= require timer
//= require paddle
//= require_tree .

$(document).ready(function(){
	var field = document.createElement("canvas")
	field.width = data.canvasWidth;
	field.height = data.canvasHeight;
	$("#game-container").append(field);
	var context = field.getContext('2d')
	
	Game.setup(context);

	//Detect keypresses
	$(document).keydown(function(e){
		//If left arrow is pressed
		if (e.which == 37){
			Game.movePaddleLeft();
		} 
		//If right arrow is pressed
		else if (e.which == 39) {
			Game.movePaddleRight(); 
		} 
		//If spacebar is pressed
		else if (e.which == 32) {
			Game.toggleGameState();
		}
	})

	//Detect when arrow keys are no longer being pressed
	$(document).keyup(function(e){
		//If left arrow is no longer being pressed
		if (e.which == 37){
			Game.stopLeftPaddleMovement();
		} 
		//If right arrow is no longer being pressed
		else if (e.which == 39){
			Game.stopRightPaddleMovement();
		}
	})

})