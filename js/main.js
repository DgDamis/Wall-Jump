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
        cube[0] = new Block(130, 530, 70, 70, "black", "background");
        walls[0] = new Wall(900, 450, "orange", "black");
    }

    function generateWall() {
        distance = Math.ceil(Math.random() * 400 + 900);
        if (distance > 300) {
            walls[walls.length] = new Wall(distance, 450, "orange", "black");
            console.log("Počet vygenerovaných zdí: ", walls.length - 1, "");
        }
    }

    function writeScore(writtenScore) {
        ctx.font = "70px Arial";
        ctx.strokeText("Score: " + writtenScore, 40, 80);
    }

    function guard() {
        clearCanvas("white");
        writeScore(score);
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
        score = 0;
        walls.forEach(function(obj) {
            if (obj.x < 100)
                score++;
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