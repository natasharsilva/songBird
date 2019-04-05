// function music (objectChosen) {
//     this.lyrics = objectChosen.lyrics

//     objectChosen.lyrics
// }

class Lyrics {
    constructor (singer) {
        this.width = CANVAS_WIDTH;
        this.height = CANVAS_HEIGHT;
        this.y = 0;
        this.score = 0;
        this.missingWords = singer.missingWords
        this.lyrics = singer.lyrics
        this.currentLyricIndex = 0
        this.missingWordsIndex = 0
        this.currentText = ""
        this.correctAnswers = [] // If [true,true,false], it means that the 2 lines were correct and not the 3rd line
    }

    draw(ctx) {
        ctx.save();
        ctx.font = "18px Libre Baskerville";
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
            this.y += 0.07;
        }
    }
}

