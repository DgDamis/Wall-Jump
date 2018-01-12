function Wall(x,y, background = "blue", border = "black") {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 120;
    this.fillStyle = background;
    this.strokeStyle = border;
    this.lineWidth = 3;
    this.lineDash = [];
    this.speed = 8;
    
    this.paint = function (ctx) {
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.beginPath();
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.setLineDash(this.lineDash);
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    this.animate = function (ctx) {
        this.x = this.x - this.speed;
    }
}
