class Lyrics {
    constructor () {
        this.width = CANVAS_WIDTH;
        this.height = CANVAS_HEIGHT;
        this.y = 0;
        this.score = 0;
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
        this.currentLyricIndex = 0
        this.missingWordsIndex = 0
        this.currentText = ""
        this.correctAnswers = [] // If [true,true,false], it means that the 2 lines were correct and not the 3rd line
    }

    draw(ctx) {
        ctx.save();
        ctx.font = "18px Merriweather";
        ctx.textAlign = "center";
        for (let i = 0, j = this.y; i < this.lyrics.length; i++, j-=25){
            if (i < this.currentLyricIndex) {
               if (this.correctAnswers[i]) {
                    ctx.fillStyle = 'green';
               }
               else {
                    ctx.fillStyle = 'red';
               }
            }
            else if (i === this.currentLyricIndex) {
                ctx.fillStyle = 'blue';
            }
            else {
                ctx.fillStyle = 'black';
            }
            let typedWord
            
            // The first lyrics, the missing word is displayed
            if (i < this.currentLyricIndex) {
                typedWord = this.missingWords[i]
            }
            // The current lyric, the typed word and "_" is displayed
            else if (i === this.currentLyricIndex) {
                typedWord = this.currentText + "_".repeat(this.missingWords[i].length - this.currentText.length)
            }
            // The last lyrics, "_" is displayed
            else {
                typedWord = "_".repeat(this.missingWords[i].length)
            }
            let text = this.lyrics[i]
            text = text.replace(this.missingIcon, typedWord)
            ctx.fillText(text, CANVAS_WIDTH/2, CANVAS_HEIGHT-j);
        }
        ctx.restore();
    }

    addCharacter(character){
        this.currentText += character
        if (this.currentText.length === this.missingWords[this.currentLyricIndex].length) {
            if (this.currentText === this.missingWords[this.missingWordsIndex]) {
                console.log("YES!")
                this.correctAnswers.push(true)
                this.score += 10;
            }
            else {
                console.log("NO!")
                this.correctAnswers.push(false)
            }
            this.missingWordsIndex++
            this.currentLyricIndex++
            this.currentText = ""
        }
    }
    
    update() {
        if (!isStopped) {
            this.y += 0.08;
        }
    }
}   