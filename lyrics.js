class Lyrics {
    constructor () {
        this.width = CANVAS_WIDTH;
        this.height = CANVAS_HEIGHT;
        this.y = 0;
        this.missingIcon = "♫";
        this.missingWords = ["roads", "call", "dove", "sleeps", "cannon", "banned", "blowin", "answer", "mountain",
        "washed", "some", "allowed", "turn", "pretend", "wind", "blowin", "look", "sky",
        "ears", "people", "deaths", "many", "friend", "wind"],
        this.lyrics = [`How many ${this.missingIcon} must a man walk down`, `Before you ${this.missingIcon} him a man?`,
            `How many seas must a white ${this.missingIcon} sail`, `Before she ${this.missingIcon} in the sand?`, `Yes, 'n' how many times must the ${this.missingIcon} balls fly`,
            `Before they're forever ${this.missingIcon}?`, `The answer, my friend, is ${this.missingIcon}' in the wind`, `The ${this.missingIcon} is blowin' in the wind`,
            `Yes, 'n' how many years can a ${this.missingIcon} exist`, `Before it's ${this.missingIcon} to the sea?`, `Yes, 'n' how many years can ${this.missingIcon} people exist`,
            `Before they're ${this.missingIcon} to be free?`, `Yes, 'n' how many times can a man ${this.missingIcon} his head`, `And ${this.missingIcon} that he just doesn't see?`,
            `The answer, my friend, is blowin' in the ${this.missingIcon}`, `The answer is ${this.missingIcon}' in the wind`, `Yes, 'n' how many times must a man ${this.missingIcon} up`,
            `Before he can see the ${this.missingIcon}?`, `Yes, 'n' how many ${this.missingIcon} must one man have`, `Before he can hear ${this.missingIcon} cry?`, 
            `Yes, 'n' how many ${this.missingIcon} will it take till he knows`, `That too ${this.missingIcon} people have died?`, `The answer, my ${this.missingIcon}, is blowin' in the wind`,
            `The answer is blowin' in the ${this.missingIcon}`]
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.font = "15px Arial";
        ctx.textAlign = "center";
        for (let i = 0, j = this.y; i < this.lyrics.length; i++, j-=25){
        ctx.fillText(this.lyrics[i], CANVAS_WIDTH-250, CANVAS_HEIGHT-j);
        }
        ctx.restore();
    }

    check() {
        this.lyrics.forEach(element, i => {
                if ($input.value === this.missingWords[i]){
                    this.missingIcon = $inputValue;
                    return true;    
                } else {
                return false;
                    }
                }
        );
    }
    
    update() {
        if (true) {
            this.y += 0.5;
        } else {
            // stop
        }
    }
}   