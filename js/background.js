class Background {
    constructor () {
        this.image = new Image();
        this.image.src = "images/Pauta_22 (1) (1).jpg"
        this.y = 0
        this.width = CANVAS_WIDTH;
        this.height = CANVAS_HEIGHT
    }

    draw(ctx) {
        // Draw the background 
        ctx.drawImage(this.image, 0, this.y, this.width, this.height);

        // Draw again the background above
        ctx.drawImage(this.image, 0, this.y-this.height, this.width, this.height);
    }
}