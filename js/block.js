function Block(x, y, width, height, border, background) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fillStyle = background;
    this.strokeStyle = border;
    this.lineWidth = 3;
    this.lineDash = [];
    this.fallSpeed = 4;
    this.jumpHeight = 250;

    this.paint = function(ctx) {
        console.log(this.y);
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.beginPath();
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.setLineDash(this.lineDash);
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    this.fall = function(ctx) {
        if (this.y < 530) {
            this.y = this.y + this.fallSpeed;
        };
    }

    this.jump = function(ctx) {
        if (this.y > 523 && this.y <= 533) {
            this.y = this.y - this.jumpHeight;
        };
    }

};