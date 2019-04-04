class Background {
    constructor () {
        this.image = new Image();
        this.image.src = "images/Pauta_22.jpg"
        this.y = 0
        this.width = CANVAS_WIDTH;
        this.height = CANVAS_HEIGHT
    }

    draw(ctx) {
        // Draw the background 
        ctx.drawImage(this.image, 0, this.y, this.width, this.height);
    }

    // update() {
    //     this.y += 3;
    //     // If the background is off the canvas, we translate it
    //     if (this.y >= CANVAS_HEIGHT) {
    //         this.y -= this.height
    //     }
    // }
}