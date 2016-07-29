var SoundHelper = (function sound() {
    // document.body.appendChild(this.sound);
    
    return {
        play: function(src){
            this.sound = document.createElement("audio");
            this.sound.src = src;
            this.sound.setAttribute("preload", "auto");
            this.sound.setAttribute("controls", "none");
            this.sound.style.display = "none";
            $("#game-container").append(this.sound);
            
            this.sound.play();
        }
    }
}());