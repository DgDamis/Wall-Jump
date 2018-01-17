window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var walls = [];
    var cube = [];
    var text = [];
    var end = 1;
    var score = 0;
    var distance = 0;
    var interval = setInterval(guard, 15);
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
        text = ctx.strokeText("Score: " + writtenScore, 40, 80);
    }


    function collisionCheck(obj, writtenScore) {
        if (((cube[0].x + 70) > obj.x && (cube[0].x < obj.x + 50)) && (cube[0].y + 70) > obj.y) {
            ctx.font = "50px Arial";
            ctx.strokeText("Final Score: " + writtenScore, 100, 80);

            ctx.fillStyle = "black";
            ctx.fillText("You have lost.", 100, 150);
            ctx.fillText("Refresh the page and try again.", 100, 200);
            clearInterval(interval);
            end = 0;
        }
    }


    function guard() {
        clearCanvas("white");
        cube.forEach(function(obj) {
            obj.paint(ctx);
            obj.fall(ctx);
        })
        walls.forEach(function(obj) {
            obj.paint(ctx);
            obj.animate(ctx);
        })
        walls.forEach(function(obj) {
            collisionCheck(obj, score);
        })
        if (end) {
            writeScore(score);
            score = 0;
            walls.forEach(function(obj) {
                if (obj.x < 100)
                    score++;
            })
        }
    }


    document.addEventListener('keypress', function(key) {
        console.log(key.code);
        switch (key.code) {
            case "Space":
                cube[0].jump(ctx);
                break;
        }
    })

    document.addEventListener('click', function(key) {
        cube[0].jump(ctx);
    })


};