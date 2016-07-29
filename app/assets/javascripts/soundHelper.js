var SoundHelper = function(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    $("#game-container").append(this.sound);
}

SoundHelper.prototype = (function(){
    
    return {
        play: function(){
            this.sound.play();
        }
    }
}());