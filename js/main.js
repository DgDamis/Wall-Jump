window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var walls = [];
    var cube = [];
    var score = 0;
    var end = false;
    var distance = 0;
    setInterval(guard, 15);
    // var interval = Math.ceil(Math.random() * 800) + 400;
    // console.log("Vygenerovane cislo:", interval, "")
    setInterval(generateWall, 1500);

    loadObjects();

    function clearCanvas(color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        canvas.style.border = "10px solid black";
    }
    clearCanvas("white");

    function loadObjects() {
        cube[0] = new Block(100, 500, 100, 100, "black", "background");
        walls[0] = new Wall(900, 500, "orange", "black");
    }

    function generateWall() {
        distance = Math.ceil(Math.random() * 400 + 900);
        if (distance > 300) {
            walls[walls.length] = new Wall(distance, 500, "orange", "black");
            console.log("Počet vygenerovaných zdí: ", walls.length - 1, "");
        }

    }

    function guard() {
        clearCanvas("white");
        cube.forEach(function(obj) {
                obj.paint(ctx);
                obj.fall(ctx);
            })
            //cube[0].paint(ctx);
            //cube[0].fall(ctx);
        walls.forEach(function(obj) {
            obj.paint(ctx);
            obj.animate(ctx);
        })

    }

    document.addEventListener('keypress', function(key) {
        console.log(key.code);
        switch (key.code) {
            case "Space":
                cube[0].jump(ctx);
                break;
        }
    })

};