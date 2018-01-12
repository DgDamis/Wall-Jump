window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var objects = [];
    var score = 0;
    var end = false;
    setInterval(guard, 15);
    var interval = Math.ceil(Math.random()*300)+100;
    console.log("Vygenerovane cislo:",interval,"")
    setInterval(generateWall, interval);

    loadObjects();

    function clearCanvas(color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        canvas.style.border = "10px solid black";
    }
    clearCanvas("white");
    
    function paint() {
        clearCanvas("white");

    }

    // Defaultně bude v proměnné Objects na první pozici (tedy na 0) kostička, která skáče

    function loadObjects() {
        objects[0] = new Block(100,500,100,100,"black","background");
        objects[1] = new Wall(400,500,"orange", "black");
    }

    function generateWall() {
        
    }

    function guard(){
        paint();
        objects[0].paint(ctx);
        objects[0].fall(ctx);
        objects[1].paint(ctx);
        objects[1].animate(ctx);
    }

    document.addEventListener('keypress', function(key){
        console.log(key.code);
        switch(key.code){
        case "Space": objects[0].jump(ctx);
                    break;
        }
    })

};