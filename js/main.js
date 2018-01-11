var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var objects = [];

function clearCanvas(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.style.border = "10px solid black";
}
clearCanvas("white");