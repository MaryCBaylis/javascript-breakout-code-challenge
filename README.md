# javascript-breakout-code-challenge

JavaScript Developer test task

# Original Task

Game field is 1086x768 and consists of bricks (15x7) at the top part of the screen, each line should have

a color of rainbow. Some of the bricks are non-breakable, which should be communicated visually.

The player controls a small bat which moves in the bottom of the screen by using "Left" and "Right"

keyboard arrow keys. The ball flies over the game field, bouncing from the borders, bricks and the bat.

When colliding with the brick the latter destroys (with fadeout effect), crash sound plays and the gamer

gets +10 points.

It the ball misses the bat, the ball goes out of the field in the bottom, and the gamer loses one "life" .

"Lifes" indication (3 by default), game time and current score is displayed at the bottom of the screen.

After the last "life" is lost, the game is over and a window pops up. It contains "Game Over", information

about the score and time, and "Restart" button to start again.

# TODO:

* Find an image for paddle - spaceship

* Database
	* Create Leaderboards

* Add stages
	* Bricks and blocks were designed to easily be added, removed, or moved by changing attributes in data.js.  Add functions in game.js to retrieve and iterate through different groups of blocks and bricks for stages. 
	* Make some blocks that take more than one hit.
	* Make blocks that move
	* Make "blocks" (enemies that act like blocks when they're hit) that fire at spaceship.  Add movement.

* Add powerups
	* Multiball
	* extra bumpers
	* shield

* Random generated stages?  Maybe?
	* Increasing difficulty
