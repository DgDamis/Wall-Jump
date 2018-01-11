window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // var objects = [];

    function clearCanvas(color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        canvas.style.border = "10px solid black";
    }
    clearCanvas("white");
    // new Block();

    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.rect(100, 500, 100, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 450, 60, 150);
    ctx.stroke();
};