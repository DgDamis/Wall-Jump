/*
function Block(
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    border = "black",
    background = "blue",
) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

this.fillStyle = background;
this.strokeStyle = border;
this.lineWidth = 5;
this.lineDash = [];

this.paint = function(ctx) {
    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.beginPath();
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.setLineDash(this.lineDash);
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
}